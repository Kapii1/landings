from typing import Callable
from django.http import HttpRequest, HttpResponse
from django.http import Http404

import re

from domains.models import ClientDomain

class BaseMiddleware:
    def __init__(self, get_response: Callable[[HttpRequest],HttpResponse]) -> None:
        self.get_response = get_response
    def __call__(self,request:HttpRequest) -> HttpResponse:
        response = self.get_response(request)
        return response

class SubdomainExtractMiddleware(BaseMiddleware):
    def __call__(self, request: HttpRequest) -> HttpResponse:
        host = request.get_host().lower()
        pattern = r"^(?:(?P<subdomain>.*?)\.)?(?:%s)(?::.*)?$" % ('mydomain.localhost')
        matches = re.match(pattern, host)
        if matches:
            subdomain = matches.group('subdomain')
            try:
                request.domain = ClientDomain.objects.get(name=subdomain)
            except:
                return HttpResponse("Not Found", status=404)

            
        response = self.get_response(request)
        return response
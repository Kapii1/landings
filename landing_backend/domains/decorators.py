# decorators.py

from django.http import HttpResponseBadRequest
import re

def extract_client_subdomain(view_func):
    print("here")
    def _wrapped_view(request, *args, **kwargs):
        client_subdomain = request.get_host().lower()
        print("host uis", request.get_host())
        pattern = r"^(?:(?P<subdomain>.*?)\.)?(?:%s)(?::.*)?$" % ('mydomain.localhost')
        matches = re.match(pattern, client_subdomain)
        print(matches.group("subdomain"))
        if matches:
            # Do something with the client_subdomain, for example, pass it as a parameter to the view
            request.domain = matches.group("subdomain")
            return view_func(request, *args, **kwargs)
        else:
            # Handle the case where the client_subdomain is not found
            return HttpResponseBadRequest("Client subdomain not found")

    return _wrapped_view

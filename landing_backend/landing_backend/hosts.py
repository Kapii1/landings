# hosts.py

from django_hosts import patterns, host

host_patterns = patterns(
    '',
    host(r'www', 'landing_backend.urls', name='www'),
    host(r'(?P<client_subdomain>[\w-]+)', 'domains.client_urls', name='client'),
)

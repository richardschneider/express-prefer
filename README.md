# express-prefer

> [RFC 7240](http://www.rfc-base.org/txt/rfc-7240.txt) defines an HTTP header field that can be used by a client to request that certain behaviors be employed by a server while processing a request.

This package parses the HTTP Request and makes the `prefer` headers a keyed property of `req.prefer`.

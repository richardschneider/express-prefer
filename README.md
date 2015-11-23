# express-prefer

> [RFC 7240](http://www.rfc-base.org/txt/rfc-7240.txt) defines an HTTP header field that can be used by a client to request that certain behaviors be employed by a server while processing a request.

This package parses the HTTP Request and makes the `prefer` headers a keyed property of `req.prefer`.

## Usage

````
app.use(require('express-prefer'))
````

Given the following Request
````
PATCH /my-document HTTP/1.1
Host: example.org
Content-Type: application/example-patch
Prefer: return=representation

[{"op": "add", "path": "/a", "value": 1}]
````
then
````
app.post('/:doc', (req,res,next) => {
    // Apply the patch ...
    
    if (req.prefer.return == 'reprsentation')
        res.status(200).send(doc).end();
    else
        res.status(204).end();
})
````

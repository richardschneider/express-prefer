# express-prefer

> [RFC 7240](http://www.rfc-base.org/txt/rfc-7240.txt) defines an HTTP header field that can be used by a client to request that certain behaviors be employed by a server while processing a request.

This package parses the HTTP Request and makes the `prefer` headers a keyed property of `req.prefer`.

## Getting started [![npm version](https://badge.fury.io/js/express-prefer.svg)](https://badge.fury.io/js/express-prefe)

    $ npm install express-prefer --save
    
then add to your `server.js` file

    app.use(require('express-prefer'))

and [*That's all folks!*](https://www.youtube.com/watch?v=gBzJGckMYO4)

## Usage

Given the following Request
````
PATCH /my-document HTTP/1.1
Host: example.org
Content-Type: application/json-patch+json
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
# License
The MIT license

Copyright © 2015 Richard Schneider (makaretu@gmail.com)

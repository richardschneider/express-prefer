# express-prefer

> [RFC 7240](http://www.rfc-base.org/txt/rfc-7240.txt) defines an HTTP header field that can be used by a client to request that certain behaviors be employed by a server while processing a request.

This package parses the HTTP Request and makes the `prefer` headers a keyed property of `req.prefer`.

## Usage

### Getting started

    $ npm install express-prefer --save
    
then add your `server.js` file

    app.use(require('express-prefer'))

and [*That's all folks!*](https://www.google.co.nz/url?sa=t&rct=j&q=&esrc=s&source=web&cd=5&cad=rja&uact=8&ved=0ahUKEwi96rrosqbJAhXC26YKHX-yCgAQtwIIKDAE&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DgBzJGckMYO4&usg=AFQjCNG6hEmET-4vS8cF5Gekafw-eIU_0Q&sig2=PgFDLI_70MGiSkikOgYPQQ&bvm=bv.108194040,d.dGY)

### Example
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

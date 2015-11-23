'use strict';

require('should');
let prefer = require('..');

describe ('prefer', () => {
    
    it('should always create a req.prefer object', () => {
        let req = {},
            res = {},
            next = () => null;
        prefer(req, res, next);
        req.should.have.property('prefer');
    });
    
})
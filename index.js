'use strict';

let parser = require('parse-http-header');

module.exports = function (req, res, next) {
    let prefer = req.prefer = req.prefer || {};
    let header = req.get('prefer');
    if (!header) return next();
    
    let tokens = parser(header).toArray();
    for (let token of tokens) {
        if (typeof token === 'string') {
            let i = token.indexOf('=');
            if (i > 0)
                prefer[token.substr(0, i).trim()] = token.substring(i + 1).trim();
            else
                prefer[token.trim()] = true;
        }
        else if (typeof token === 'object') {
            for (let key in token) {
                prefer[key] = token[key];
            }
        }
    }

    next();
};
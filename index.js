'use strict'

module.exports = function (req, res, next) {
    req.prefer = req.prefer || {};
    
    next();
};
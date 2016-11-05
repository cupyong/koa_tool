'use strict';
var Router = require("koa-router")();
var users = require('./users');
module.exports = function(app) {
    Router.use('/users', users.routes(), users.allowedMethods());
    app.use(Router.routes());
};

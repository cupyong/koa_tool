const compose = require('koa-compose');
function authToken() {
    return compose([
        function *(next) {
            this.throw('UnauthorizedError',401);
            yield next;
        },
    ])
}
exports.authToken = authToken;
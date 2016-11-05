'use strict';
const auth = require('../lib/auth/');
const router = require("koa-router")();
const services = require("../services")

router.get('/list',services.users.getList);
router.get('/aaa',auth.authToken(),services.users.add);
module.exports = router;
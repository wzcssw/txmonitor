"use strict"
let router = require('koa-router')({
    prefix: '/api/test2'
});
router.get('/test1', function*(next) {
    this.body = "test1aaa"
});

module.exports = router.routes()
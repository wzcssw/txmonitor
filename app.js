"use strict"
let app = require('koa')()
let body = require('koa-body')
let path = require('path')
let static_cache = require('koa-static-cache')
let config = require('./config')
let auth = require('koa-basic-auth');

// 处理post参数(this.request.body)
app.use(body({ formidable: { uploadDir: __dirname } }));

app.use(function*(next) { // Basic Authenticate
    try {
        yield next;
    } catch (err) {
        if (401 == err.status) {
            this.status = 401;
            this.set('WWW-Authenticate', 'Basic');
            this.body = 'cant haz that';
        } else {
            throw err;
        }
    }
});
app.use(auth({ name: config.username, pass: config.password }));

require('./api')(app);

// 静态文件缓存
app.use(static_cache(path.join(__dirname, "static"), {
    maxAge: 365 * 24 * 60 * 60
}))

// 启动
app.listen(config.default_port)
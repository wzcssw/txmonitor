"use strict";

function JoinedApi(app) {
    // app.use(require('./test_api'));
    app.use(require('./test2_api'));

}

module.exports = JoinedApi;
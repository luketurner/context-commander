var koa   = require('koa');
var serve = require('koa-static');

var reg   = require('./reg.js');

var app   = koa();
var host  = process.argv[2] || "localhost";
var port  = process.argv[3] || 8000;

var regFileHandler = function *(next) {

    // Only handle requests of the form /reg/whatever.reg
    if (!(/^\/reg\/.+\.reg$/.test(this.path))) {
        yield next;
        return;
    }

    // Validate query parameters. Note that if one is missing we return a 400,
    // instead of delegating to another handler, because we *know* it's an invalid
    // request.
    for (var param of ['name', 'text', 'command', 'extensions', 'type']) {
        if (!this.query.hasOwnProperty(param) || this.query[param].length === 0) {
            this.status = 400;
            this.body = 'Missing required query parameter "' + param + '".';
            return;
        }
    }

    try {
        // Generate the body for the registry file based on the query params.
        this.body = reg.create(this.query);
        this.set('Content-Type', 'application/octet-stream; charset="utf-8"');
        this.set('Content-Disposition', 'attachment');
    } catch (e) {
        this.status = e.name === "RegException" ? 400 : 500;
        this.body = "Error: " + e.message;
    }
};

app.use(serve('dist', { defer: true }));
app.use(regFileHandler);

app.listen(port, host);
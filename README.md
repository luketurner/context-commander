# context-commander
Source for a Web application that lets you modify your context menu entries.

Live at http://context.luketurner.org

Client code written in Javascript using [React](http://facebook.github.io/react/).
The server is a Python WSGI application written using [Flask](http://flask.pocoo.org/)
and [contextext](http://github.org/luketurner/contextext.py) for generating the .reg files.

The Flask application is not self-contained -- it only handles the dynamic parts of the application.
If you want to deploy this on your server, you will need a separate frontend Web server for serving the files in `/static`.
Take a look at the Flask [deployment options](http://flask.pocoo.org/docs/0.10/deploying/).

There is a sample uWSGI.ini file for use in deploying the app as a [uWSGI](http://uwsgi-docs.readthedocs.org/en/latest/index.html)
application behind a Web server like nginx. The Web server configuration is not provided, however. This is for security purposes.

## Installing server dependencies

`pip install -r requirements.txt`

## Building the Javascript/CSS

The steps below are only needed for individuals who want to modify or fork this application.

1. Install browserify and node-sass: `npm install -g browserify node-sass`
2. Install other (local) dependencies: `npm install`
3. Build Javascript: `npm build`
4. Build SASS: `node-sass styles/stylesheet.scss static/app.css`

This uses `browserify` to combine all the javascript under `app` into a single compiled file at `static/app.js`,
where it will be served by your Web server.
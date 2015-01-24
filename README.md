# context-commander
Source for a Web application that lets you modify your context menu entries.

Client code written in Javascript using [React](http://facebook.github.io/react/).
The server is a Python WSGI application written using [Flask](http://flask.pocoo.org/)
and my [contextext](http://github.org/luketurner/contextext.py) library for generating the .reg files.

The Flask application is self-contained, however it does not include a uWSGI compatible server for deployment.
If you want to deploy this application yourself,
take a look at the Flask [deployment options](http://flask.pocoo.org/docs/0.10/deploying/).

## Installing server dependencies

`pip install -r requirements.txt`

## Building the Javascript

The steps below are only needed for individuals who want to modify or fork this application.

1. Install browserify: `npm install -g browserify`
2. Install other dependencies: `npm install`
3. Build: `npm build`

This uses `browserify` to combine all the javascript under `app` into a single compiled file at `static/app.js`,
where it will be served by Flask.
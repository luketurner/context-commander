# context-commander
Source for http://context.luketurner.org, a Web-based utility that lets you modify your context menu entries.

Client code written in Javascript using [React](http://facebook.github.io/react/).
The server is also written in Javascript, using Node and [Koa](http://koajs.com/).

## Running the application

The `/dist` directory contains the fully built client assets and code already.

To run the application, use `npm start [hostname] [port]`. This is a stand-alone Node
application that will serve its own static assets.

## Building the Javascript/CSS

The steps below are only needed for individuals who want to modify or fork this application.

1. Install global dependencies if needed: `npm install -g gulp node-sass bower`
2. Install local dependencies: `npm install`
3. Install client-side dependencies: `bower install`

Now you can run `gulp build` or `gulp build-dev`, both of which use webpack to compile `/src/client/index.jsx` and
everything it includes (which is *everything*). Now you can run the application using `npm start [hostname] [port]`.

You can use `gulp dev-server` to run a dev server that will rebuild client assets and restart the node server
automatically whenever a file in `/src` is changed. The server is run on `localhost:8000`.
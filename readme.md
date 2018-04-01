# Simple polling app
This is a simple polling app using:
- Websockets (no library)
- CouchDB
- Express
- EJS (templating)

The goal is to keep the application functional for 'all' browsers/devices with and without Javascript enabled.

![demo][demo]

# Table of Content
- [Getting started](#getting-started)
- [](#)

# Getting started
You will need the following:
- CouchDB - get the `Apache CouchDB` [here][couchdb]
- You will need a database called `live-poll` or you can change it

1. Clone the repo: `git clone https://github.com/kyunwang/Live-Poll.git`
2. cd to the folder and run `npm install`
3. Run `npm start` to start the server
4. You can not go to `http://localhost:3400/`



<!-- Tests: put in another md file

ie11 supports the websockets: (image is the not yet completed version)



Quick dump of sources:
- https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Date


refresh meta tag


web sockets
- https://html.spec.whatwg.org/multipage/web-sockets.html


Started using es5 only to get support to ie10

##Todo
add some more codecomments

add a timelimit
add a timer with the timelimit

implemment sass
implemment 'private' users

rework the client js
rework the websockets and look more into it

host this somewhere
Host the database instead of using localhost (connect to cloud database)

add install instructions ect




use nunjucks instead of ejs?
put the poll in a iframe in case one does not support websockets? (will use the meta refresh instead)

maybe use a lib like virtual-dom or moon.js to make the updating easier
look into postcss?


## Issues
- Styling on IE11 (euhm fix worthy?) -->


[demo]: https://github.com/kyunwang/Live-Poll/blob/master/doc/images/poll-demo.gif

[couchdb]: http://couchdb.apache.org/
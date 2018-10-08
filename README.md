# Portfolio

## Portfolio
Project for the implementation of a web interface able to integrate Safron to let users deploy searches

### Installation and execution

#### Development environment
In the development environment, we will have 2 servers running.
-The front end code will be served by the webpack dev server with hot and live
reloading.
-The server code will be served using nodemon which helps in automatically
restarting the server whenever server side code changes.

```
$ npm install
$ npm run dev
```

#### Production environment
In the production environment, we will have only 1 server running.
All the client side code will be bundled into static files using webpack and it
will be served by the Node.js/Express application.

```
$ npm install
$ npm run build
$ npm start
```
#### Run eslint

```
$ npm run lint
```

#### Run unit testing

```
$ npm run test
```

To run code coverage reports use the following command.

```
$ npm run cover
```

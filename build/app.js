"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var graphHTTP = require('express-graphql');
var schema = require('../schema/schema');
var app = express();
app.use('/graphql', graphHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(4001, function () {
    console.log("now listening on port 4001");
});
//# sourceMappingURL=app.js.map
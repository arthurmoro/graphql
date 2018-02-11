'use strict';

var _graphql = require('graphql');

var _index = require('./schema/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var query = '{\n    posts {\n        title\n    }\n}';

(0, _graphql.graphql)(_index2.default, query).then(function (response) {
    console.log(JSON.stringify(response, null, 2));
}).catch(function (err) {
    console.log(err);
});
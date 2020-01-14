var url = require('url');
var querystring = require('querystring');
var calc = require('./calc');

var urlobj = url.parse('http://127.0.0.1:3300?a=12&b=3&operator=add');

console.log(urlobj);
var pathstr = urlobj.path;
console.log(pathstr);
pathstr = pathstr.substring(2);
console.log(pathstr);

var obj1 = querystring.parse(pathstr);
console.log(obj1);
console.log(obj1.a, obj1.b, obj1.operator);

var res = calc.add(obj1.a,obj1.b);

console.log(res);

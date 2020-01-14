const http = require('http');
const url = require('url');
const querystring = require('querystring');
const calc = require('./calc');

const hostname = '127.0.0.1';
const port = 3029;


let server = http.createServer((req,res)=>{
	let urlstr = req.url;
	let urlobj = url.parse(urlstr);
	if(urlobj.pathname == '/'){
		let pathstr = urlobj.path;
		pathstr = pathstr.substring(2);
		let pathobj = querystring.parse(pathstr);
		var a=pathobj.a-'0';
		var b=pathobj.b-'0';
		var ans = '';
		if(pathobj.operate == 'add'){
			pr = calc.add(a,b);
			ans += `${a} + ${b} = ${pr}`;
		} else if(pathobj.operate == 'sub'){
			pr = calc.sub(a,b);
			ans +=`${a} - ${b} = ${pr}`;
		} else if(pathobj.operate == 'mult'){
			pr = calc.mult(a,b);
			ans +=`${a} * ${b} = ${pr}`;
		} else if(pathobj.operate == 'div'){
			pr = calc.div(a,b);
			ans +=`${a} / ${b} = ${pr}`;
		} else  ans += 'undifined operate error';
	} else {
		ans += 'undifined path error'
	}

	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end(`${ans}`);

});

server.listen(port,hostname,()=>{
	console.log('server running');
});

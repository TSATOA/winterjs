const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

let condition = (num) => {
	if(num%2==0) return true;
	else return false;
};

let filter = (array, conditionFunc) => {
	let len = array.length;
	for(var i=0; i<len;i++){
		if(conditionFunc(array[i])==false){
			array.splice(i,1);
			i--;
			len--;
		}
	}
	return array;
};

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('remove odd number\n');
});

server.listen(port,hostname, ()=>{
	console.log(filter([1,3,4,6,7],condition));
	console.log(filter([0,2,4,6,7],condition));
	console.log(filter([-1,3,5,9],condition));
});

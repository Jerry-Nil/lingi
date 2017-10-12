/**
 * mock 服务器
 * @author Jerry <superzcj_001@163.com>
 * @date 2017-10-10
 */
/* jshint node: true, esversion: 6 */
const express = require('express');
const fs = require('fs');
const config = require('./config/index');
let app = express();

app.post('/api', (req, res) => {
	let ret = {
		code: '0',
		msg: 'get data success',
		data: [],
	};
	res.json(ret);
});

app.get('/', (req, res) => {
	fs.readFile('./view/index.html', 'utf-8', (err, data) => {
		if(err){
			res.send('<h1>Server Down</h1>');
			console.log(err);
			return;
		}
		res.send(data);
	});
});

app.get('/404', (req, res) => {
	fs.readFile('./view/404.html', 'utf-8', (err, data) => {
		if(err){
			res.send('<h1>Server Down</h1>');
			console.log(err);
			return;
		}
		res.send(data);
	});
});

app.listen(config.port);

console.log('> Listen at 0.0.0.0:' + config.port);

/**
 * mock 服务器
 * @author Jerry <superzcj_001@163.com>
 * @date 2017-10-10
 */
/* jshint node: true, esversion: 6 */
const express = require('express');
const config = require('./config/index');
let app = express();

app.listen(config.port);
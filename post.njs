#!/usr/local/bin/node

/* Include library */
var fs = require('fs');
var qs = require('qs')
var param = qs.parse(fs.readFileSync('/dev/stdin', 'utf-8'));

/* parse json file for name list */
var nameList = JSON.parse(fs.readFileSync('./name.json', 'utf8'));

/* return value */
console.log('Content-type: text/html; charset=utf-8\n');
console.log('<h1>Hello, ' + nameList[param.id] + '</h1>');

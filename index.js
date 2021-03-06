#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var lib = function(){

  this.error = function(msg,exit,usage){
    if( usage ) this.usage()
  	console.error("ERROR: data-dir not found..are you in a expressa-app directory?")
    if( exit ) process.exit(0)
  }

  this.usage = function(){
    console.log("Usage: ")
    console.log("  expressa json2collection <collectionname> <./payload.json>             <- converts json payload into data/collection/collectionname.json")
    console.log("")
  }

  return this

}.apply({})
if(argv['_'].length)
  require('./cmd/'+argv['_'][0])(lib,argv)
else lib.usage()

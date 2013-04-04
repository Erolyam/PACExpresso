#!/usr/bin/env coffee
###
Modified from https://github.com/jashkenas/coffee-script/blob/master/Cakefile
 
Part of an upcoming PeepCode screencast. This snippet is MIT Licensed.
###
 
{spawn, exec} = require 'child_process'
 
runCommand = (name, args) ->
  proc = spawn name, args
  proc.stderr.on 'data', (buffer) -> console.log buffer.toString()
  proc.stdout.on 'data', (buffer) -> console.log buffer.toString()
  proc.on 'exit', (status) -> process.exit(1) if status != 0
 
runCommand 'stylus', ['--watch', 'public/css']
runCommand 'coffee', ['-bcw', 'public/js']

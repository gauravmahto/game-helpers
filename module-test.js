const { readFileSync } = require('fs');
const { join } = require('path');
const { Module } = require('module');

const name = 'test-xyz';
const filename = name + '.js';

const importedModule = new Module(name);
importedModule.filename = filename;
importedModule.paths = Module._nodeModulePaths('.');
importedModule._compile(readFileSync(join(__dirname, 'test.js'), { encoding: 'utf-8' }), name);

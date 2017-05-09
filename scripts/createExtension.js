#!/usr/bin/env node
const path = require('path');
const Kinase = require('kinase')
const manifestOverrides = require('../src/manifestOverrides.json');
const extension = new Kinase({
  manifestOverrides,
  apiFile: path.join(__dirname, '../src/api.js'),
  dependencies: {
    "superagent": "3.5.2"
  },
  output: path.join(__dirname, '../dist/extension.zip'),
})

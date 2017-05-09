#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const semver = require('semver');

const INITIAL_VERSION = '0.1.0';
const MANIFEST_PATH = path.join(__dirname, '../src/manifestOverrides.json');
const manifest = require(MANIFEST_PATH);

const args = process.argv.slice(2);
const bumpLevel = args[0];
if (!bumpLevel) {
  throw Error('You must provide a version bump level.');
}
manifest.version = semver.inc(manifest.version, bumpLevel);

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

Recursive loop promise generator for yeps
=========================================

It helps with looping promises. It's promises middleware realisation.

[![NPM](https://nodei.co/npm/yeps-promisify.png)](https://npmjs.org/package/yeps-promisify)

[![npm version](https://badge.fury.io/js/yeps-promisify.svg)](https://badge.fury.io/js/yeps-promisify)
[![Build Status](https://travis-ci.org/evheniy/yeps-promisify.svg?branch=master)](https://travis-ci.org/evheniy/yeps-promisify)
[![Coverage Status](https://coveralls.io/repos/github/evheniy/yeps-promisify/badge.svg?branch=master)](https://coveralls.io/github/evheniy/yeps-promisify?branch=master)
[![Linux Build](https://img.shields.io/travis/evheniy/yeps-promisify/master.svg?label=linux)](https://travis-ci.org/evheniy/)
[![Windows Build](https://img.shields.io/appveyor/ci/evheniy/yeps-promisify/master.svg?label=windows)](https://ci.appveyor.com/project/evheniy/yeps-promisify)

[![Dependency Status](https://david-dm.org/evheniy/yeps-promisify.svg)](https://david-dm.org/evheniy/yeps-promisify)
[![devDependency Status](https://david-dm.org/evheniy/yeps-promisify/dev-status.svg)](https://david-dm.org/evheniy/yeps-promisify#info=devDependencies)
[![NSP Status](https://img.shields.io/badge/NSP%20status-no%20vulnerabilities-green.svg)](https://travis-ci.org/evheniy/yeps-promisify)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/evheniy/yeps-promisify/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/evheniy/yeps-promisify.svg)](https://github.com/evheniy/yeps-promisify/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/evheniy/yeps-promisify.svg)](https://github.com/evheniy/yeps-promisify/network)
[![GitHub issues](https://img.shields.io/github/issues/evheniy/yeps-promisify.svg)](https://github.com/evheniy/yeps-promisify/issues)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/evheniy/yeps-promisify.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)


## How to install

    npm i -S yeps-promisify

## How to use

    const promisify = require('yeps-promisify');
    
    async () => {
        const context = {};
        
        const promises = [
            async (context) => {
                // some stuff with context
            },
            async (context) => {
                // some other stuff with context
            },
            ...
        ];
        
        try {
            await promisify(context, promises);
        } catch (error) {
            // error handler
        }
    }    


#### [YEPS documentation](http://yeps.info/)

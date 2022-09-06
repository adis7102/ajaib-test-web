# Ajaib Web App

Ajaib Web App is a web that contain list of users.
In this page you can:

* Search
* Filter
* Sort
* Get more user by clicking pagination icon at the bottom of the page


## Table of Contents
1. [Requirements](#requirements)
2. [Getting Started](#getting-started)

## Requirements
* node `v14.15.1 (LTS)`
* npm `6.14.9`

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements),
you can start the site by running these commands:

```bash
$ npm install                   # Install project dependencies
$ npm start                     # Compile and launch
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start` |Serves your app at `localhost:3000`.|
|`build`|Compiles the application to disk (`~/build` by default).|
|`test`|Runs all tests in sequence|

***Important note:***

Before you commit, make sure to always run:

```bash
$ npm test
```

and have all the tests pass.

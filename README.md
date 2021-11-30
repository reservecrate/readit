# Readit

A reddit clone project, made into our own, based on the MERN stack and for the Readit discord server users.

<span align="center">

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/davidsaulrodriguez/readit) [![Build Status](https://travis-ci.com/davidsaulrodriguez/readit.svg?branch=main)](https://travis-ci.com/davidsaulrodriguez/readit) [![GitHub license](https://img.shields.io/github/license/davidsaulrodriguez/readit)](https://github.com/davidsaulrodriguez/readit)

--------------------------------------------------------------------------------

[![GitHub issues](https://img.shields.io/github/issues/davidsaulrodriguez/readit)](https://github.com/davidsaulrodriguez/readit/issues) [![GitHub forks](https://img.shields.io/github/forks/davidsaulrodriguez/readit)](https://github.com/davidsaulrodriguez/readit/network) [![GitHub stars](https://img.shields.io/github/stars/davidsaulrodriguez/readit)](https://github.com/davidsaulrodriguez/readit/stargazers) ![GitHub contributors](https://img.shields.io/github/contributors/davidsaulrodriguez/readit) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_readit&metric=bugs)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_readit) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_readit&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_readit) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_readit&metric=security_rating)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_readit) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=davidsaulrodriguez_readit&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=davidsaulrodriguez_readit) ![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/davidsaulrodriguez/readit/latest/main)

</span>

Table of Contents

- [Description](#description)
- [Quick Note](#quick-note)
- [Dependencies](#dependdencies)
- [Installation Requirements](#installation-requirements)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Supported Versions](#supported-versions)
- [Contributing](#contributing)
- [Bugs and Issues](#bugs-and-issues)
- [License](#license)

## Description

**readit** is a MERN Stack project that is a reddit clone, made into our own, based on the MERN stack and for the Readit discord server users.

**Download**

[Download the zip][archive] or clone this project.

```shell
git clone https://github.com/davidsaulrodriguez/readit.git
cd readit/
```

## Quick Note

This project is equiped with a basic API setup using Mongoose. It is expected that you will modify this API backend as necessary to suite your project. **DO NOT** count on the current API's USER SCHEMA as it is only meant as a placeholder and is far from a complete model. You may extend and modify the schema as you see fit.

## Dependencies

**Project Dependencies**

- "axios": "^0.21.1",
- "concurrently": "^6.0.0",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "helmet": "^4.4.1",
- "if-env": "^1.0.4",
- "mongoose": "^5.12.2"

**Development Dependencies**

- "@babel/eslint-parser": "^7.16.3",
- "@babel/plugin-syntax-jsx": "^7.16.0",
- "@babel/preset-react": "^7.16.0",
- "@babel/runtime": "^7.16.3",
- "eslint": "^7.11.0",
- "eslint-config-prettier": "^8.3.0",
- "eslint-plugin-import": "^2.25.3",
- "eslint-plugin-jest": "^24.7.0",
- "eslint-plugin-jsx-a11y": "^6.5.1",
- "eslint-plugin-prettier": "^3.4.1",
- "eslint-plugin-react": "^7.27.1",
- "eslint-plugin-react-hooks": "^4.3.0",
- "jest": "26.6.0",
- "nodemon": "^2.0.15",
- "prettier": "^2.4.1",
- "ts-node": "^9.1.1",
- "typescript": "^4.5.2"

## Installation Requirements

You will need [NodeJS] installed for use with this project.

You will also need the latest version of [MongoDB] installed locally on your machine.

## Configuration

To configure this application for use, you should create a `.env` file with your database information. For convience, a sample enviroment variable file can be found in the root directory with the name of: `.env.example`.

> For local development, after installing the dependencies and initializing the project (instructions below) you will need to go into the `package.json` file in your `client/` folder and add `"proxy": "http://localhost:3001"` to this file.

## Usage

**Getting Started**

To get started with this project, you'll want to install the required dependencies and the React frontend with this command:

```shell
npm run install:all
```

## Development

### Starting the project

While working and developing on the source code, you can run a live development server (front and backend) with:

```shell
npm run start:dev:watch
```

To start just the backend MonogoDB server and work on the API you can run:

```shell
npm run start:server
```

To start just the React frontend and work on the UI, you can run:

```shell
npm run start:client
```

### Formatting (Prettier)

It is suggested that you format your code with **Prettier** in order to make sure you code looks clean and consistent before you commit and publish it to GitHub. To do this, you can simply run:

> This will format both your backend and frontend code with Prettier

```shell
npm run format
```

### Linting (ESLint)

Linting is important! You can statically analyzes your code to quickly find problems with **ESLint** by running:

**Lint check backend code**

```shell
npm run lint:check
```

**Lint check frontend code**

```shell
npm run lint:check:client
```

**Lint check backend and frontend code**

```shell
npm run lint:check:all
```

### Linting Autofix (ESLint)

This project supports ESLint autofixing to try and assist you with fixing any issues that ESLint may find in your code. To do this you can simply run:

> Please keep in mind that **_this is not full-proof_**.

**Lint fix backend code**

```shell
npm run lint:fix
```

**Lint fix frontend code**

```shell
npm run lint:client:fix
```

**Lint fix backend and frontend code**

```shell
npm run lint:fix:all
```

## Supported Versions

Below is a list of the currently supported versions of this software.

> Note: This project is an ephemeral homework assignment and will not be worked on past its release (due date). Hence the week-long support life cycle.

Release |       Status       | Initial Release | Active LTS Start | Maintenance LTS Start | End of Life
:-----: | :----------------: | :-------------: | :--------------: | :-------------------: | :---------:
develop |      Unstable      |        -        |        -         |           -           |      -
  v1    | :heavy_check_mark: |       TBD       |       TBD        |          TBD          |     TBD
  v2    |   :construction:   |       TBD       |       TBD        |          TBD          |     TBD

You can view the Status Key Map and software support model [here][support].

## Contributing

Contributions are more than welcome! If you improve on this project, please feel free to share it by submitting a Pull Request.

Before contributing, be sure to check out the [CONTRIBUTING][contrib] and [Branching Model][branching] docs.

## Bugs and Issues

Found a bug? Having an issue with this app? [Open a new issue][issues] here.

## License

This project and all of its source code is released and permissively licensed under the [BSD 2 Clause][license] license.

[archive]: https://github.com/davidsaulrodriguez/readit/archive/main.zip
[branching]: ./docs/Branching_Model.md
[contrib]: ./CONTRIBUTING.md
[issues]: https://github.com/davidsaulrodriguez/readit/issues/new/choose
[license]: ./LICENSE
[mongodb]: https://www.mongodb.com/try/download/community
[nodejs]: https://nodejs.com
[support]: ./SLC.md

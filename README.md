# React starter with Typescript

[![Build Status](https://travis-ci.org/shortgiraffe4/react-typescript-starter.svg?branch=master)](https://travis-ci.org/shortgiraffe4/react-typescript-starter)
[![Dependency Status](https://david-dm.org/shortgiraffe4/react-typescript-starter.svg)](https://david-dm.org/shortgiraffe4/react-typescript-starter)
[![devDependency Status](https://david-dm.org/shortgiraffe4/react-typescript-starter/dev-status.svg)](https://david-dm.org/shortgiraffe4/react-typescript-starter#info=devDependencies)
[![Code Climate](https://codeclimate.com/github/shortgiraffe4/react-typescript-starter.svg)](https://codeclimate.com/github/shortgiraffe4/react-typescript-starter)

React Typescript Starter is a boilerplate built on top of React and Typescript using Webpack 4.
### Stack
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Webpack 4](https://webpack.js.org/)
    - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
    - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
    - [sass-loader](https://github.com/webpack-contrib/sass-loader)
    - [postcss-loader](https://github.com/postcss/postcss-loader)
    - ...
- [Redux](https://redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [react-router v4](https://github.com/ReactTraining/react-router)
- [Bootstrap v4](https://getbootstrap.com/)

### Demo
https://react-typescript-starter.herokuapp.com/
## Getting started
Directory layout
```
├── /dist/                      # The folder for compiled output (only exists after build in production mode)
├── /node_modules/              # 3rd-party libraries and utilities          
├── /src/                       # The source code of the application
|   ├── /assets/                # All the static assets  
│   ├── /components/            # React components
│   ├── /redux/                 # Redux and redux-thunks component and config
│   ├── /scss/                  # Stylesheets in SASS
│   ├── /App.tsx                # Main App component
│   ├── /index.html             # Html template
│   └── /index.tsx              # Main script
├── _config.yml                 # Github pages config
├── package-lock.json           # Automatically generated
├── package.json                # The list of 3rd party libraries, utilities, and build, run scripts
├── postcss.config.js           # Postcss loader config
├── README.md                   # README document
├── static.json                 # Configuration for Heroku deployment
├── tsconfig.json               # Configuration for Typescript
├── tslint.json                 # Configuration for TSlint
├── webpack.config.js           # Common config for Webpack
├── webpack.dev.js              # Development config for Webpack
└── webpack.prod.js             # Production config for Webpack
```
##### 1. Clone the repo
`git clone git@github.com:shortgiraffe4/react-typescript-starter.git --depth 1`
##### 2. Install dependencies
`npm install`
##### 3. Run the project
`npm start`

webpack-dev-server is here to do the job

## Deployment
### With heroku
##### 1. Install Heroku CLI
Follow this instruction: https://devcenter.heroku.com/articles/heroku-cli
##### 2. Login to Heroku CLI
Open your command line and run this:

`heroku login`

Input your account and continue.
##### 3. Add buildpack
`heroku create -b https://github.com/mars/create-react-app-buildpack.git`
##### 4. Add heroku remote
Firstly, go to https://dashboard.heroku.com, and create an app. Then run:

`heroku git:remote -a <name_of_your_heroku_app>`
##### 5. Push to heroku remote
`git push heroku master`
##### 6. Your heroku app is now online
`https://<name_of_your_heroku_app>.herokuapp.com/`


## TODO
- [x] Favicon for webpack-dev-server
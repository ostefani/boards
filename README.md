# Boards

Project management app, created using JavaScript stack.

[User Stories](#user-stories) | [Tools Used](#tools-used-aka-tech-stack) | [Install & Build](#install-and-build) | [Demo](#demo)


## User Stories

### Minimum Viable Product

- [+] As a user I can see home page with information about the app
- [+] As a user I can create an account with my email
- [+] As a user I can login with my email and password
- [+] As a user I can see an error if login wasn't succesful
- [+] As an authenticated user I can stay logged in when I close the app or refresh a page
- [+] As an authenticated user I can log out
- [ ] As an authenticated user I can create, delete, update boards
- [ ] As an authenticated user I can create, delete, update tasks
- [ ] As an authenticated user I can create, delete, update groups
- [ ] As an authenticated user I can change status tasks
- [ ] As an authenticated user I can see tasks in details in modal window

### Future Releases

- [ ] As a user I can login with my GitHub and/or Twitter and/or Facebook account
- [ ] As a user I can drag’n’drop tasks inside the group and between groups

## Tools Used aka Tech Stack

### Back End

- [Node.js](https://nodejs.org/en/) 12+
- [Express](https://expressjs.com/) web framework
- [GraphQL](http://graphql.org/) data query language
- [MongoDB](https://www.mongodb.com/) NoSQL database
- [@hapi/joi](https://hapi.dev/family/joi/) Schema description language and data validator for JavaScript.

### Front End

- [React](https://facebook.github.io/react/) library
- [Redux](https://redux.js.org/) a Predictable State Container for JS Apps
- [Redux-saga](https://redux-saga.js.org/)
- [React Router](https://reacttraining.com/react-router/) routing for React app
- [Styled Components](https://www.styled-components.com/) CSS-in-JS

### Tools

- [Webpack](https://webpack.js.org/) module bundler
- [ESLint](http://eslint.org/) linter with [Airbnb's config]
- [Babel.js](https://babeljs.io/) compiler
- [Storybook](https://storybook.js.org/) a user interface development environment and playground for UI components

## Install and Build

#### Install dependencies

``` bash
npm install
```

#### Create a `.env` file

You can find a `.env.example` file in the root directory as a starting point. You can copy the content of this file to `.env` and add your own values.

``` bash
touch .env
```

#### Start Storybook

```bash
npm run storybook
```

#### Start React app with hot reload and API dev server

``` bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view app in the browser.
The API will be available at [http://localhost:3001](http://localhost:3001).

#### Start API dev server

``` bash
npm run dev:server
```

#### Start React app with hot reload

It builds HTML, CSS, and the JavaScript bundle, starts a dev server and refreshes the browser on every saved changes.

``` bash
npm run dev:client
```

#### Build production bundle

It builds production bundle, uglifies JS, minifies CSS.

``` bash
npm run build
```

## Demo

The demo is deployed on Heroku using their free plan thus it can take about 30 seconds for Heroku dyno to wake up.

[Boards](https://boards-ostefani.herokuapp.com/)

## Git Branches

#### `master` branch

The `master` branch is the main branch where the source code always reflects the current production release and is only updated from the `development` branch.

#### `development` branch

The `development` branch is the "integration" branch where the source code always reflects a state with the latest delivered changes for the next release.

#### Developer branches

Developer branches are "feature", "bugfix" and "refactor" branches I merge back into the `development` branch.

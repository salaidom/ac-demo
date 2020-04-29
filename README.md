This is a demo application for a testing task.

## Running project locally in development

In order to get it running locally on your computer:

1. Git clone this repo
1. Make sure you are on `master` branch
1. Install dependencies with `yarn install`
1. Copy `.env.dist` file and rename it to `.env`
1. Put the URL of the apollo server into `.env` file
1. Run `yarn start`
1. You are good to go...

## Building project

Since the project is based on `Create React App` just run the following command to build production ready application:

- `yarn build`

## This codebase showcases

- use of `git flow` (just basics since it is one man simple task)
- ability to write tests and use testing frameworks
- ability to use `apollo gprahql` with cache and persistent storage
- incremental addition of functionality based on commit history
- use of `react context and providers` to manage application state
- use of latest advancements in react ecosystem like `react hooks` (as of April 2020)
- use of hooks to simplify application state persistence for state managed outside apollo
- use of `typescript` for static analysis of the code and code qulaity improvment
- application configuration with config files and `.env` file
- improved tooling with `eslint` and `prettier` cnofguration
- use of third party libraries and their integration

## Note

Since this is just a demo task, the showcase of functionality / skills mentioned above is selective and it might happen that seemingly related tasks are solved using different approach but that is just for showcase purposes. Production application codebase with many contributors would of course involve much more tooling, processes, organisation, code reviews, functionality etc.

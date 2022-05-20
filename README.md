# matejb6.github.io

![GitHub package.json version](https://img.shields.io/github/package-json/v/matejb6/matejb6.github.io)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/matejb6/matejb6.github.io/CI)
![GitHub repo size](https://img.shields.io/github/repo-size/matejb6/matejb6.github.io)

## About
My GitHub Pages profile. This site is used to showcase my skills and interests.

## CI setup
CI is run by GitHub Actions. See `.github/workflows/main.yml` for further details.

## Setup
* In project root run `npm install` to install deps

## Start
* In project root run `npm run serve` to start dev server
* Navigate to `http://localhost:3000/`
* Reload manually after saving source files changes

## Lint
* In project root run `npm run lint` to lint the project

## Prettier
* In project root run `npm run prettier:check` to check if files are formatted
* In project root run `npm run prettier:write` to format files

## Test
* In project root run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io)
* In project root run `npm test:ci` to execute the unit tests in headless mode
* In project root run `npm test:coverage` to execute the unit tests in headless mode with coverage

## Release
* In project root run `npm version major|minor|patch` to bump version
* Go to GitHub Releases to make a new release

## Developer
**Matej Buljan**

# Quiz Countries - Backend

## Parameters

##### Base path:

`[path-to-server]/countries/mode`

##### Default path:

`[path-to-server]/countries/modes?mode=capital&rounds=5&difficulty=easy&lang=en`

| Parameter  | Required | Choice                                      | Default   |
| ---------- | -------- | ------------------------------------------- | --------- |
| mode       | false    | `capital`, `subregion`, `area`,`population` | `capital` |
| difficulty | false    | `easy`, `normal`, `hard`                    | `easy`    |
| rounds     | false    | `5`, `10`, `15`                             | `5`       |
| lang       | false    | `en`, `pl`                                  | `en`      |

## Technologies

- Front-end stack:
  - `JavaScript`
  - `Express.js`
  - `nodemon`
- Client: https://dlwas-quiz.netlify.app

## Features

- Modes: `Capital`, `Subregion`, `Area`, `Population` (of country).
- Round selection: `5` / `10` / `15`.
- Difficulty level selection: `Easy` / `Normal` / `Hard`.
- Locales: `English` / `Polish` (in progress).

## Usage

Installation: `npm i`

Start: `npm start`

Dev: `npm run dev`

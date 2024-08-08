# React + TypeScript + Vite + Capacitor

This boilerplate provides a minimal setup to get React working in Vite with Capacitor and some ESLint rules to build a hybrid app.

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

- [![Vite][Vite]][Vite-url]
- [![React][React.js]][React-url]
- [![ReactQuery][ReactQuery]][ReactQuery-url]
- [![Mui][Mui]][Mui-url]
- [![Capacitor][Capacitor]][Capacitor-url]

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- node >= 20.xx.xx
- npm >= 10.xx.xx

Install eslint and prettier extensions for your editor

### Installation

```bash
    npm i
```

<!-- USAGE EXAMPLES -->

1. Start web version in development mode

```bash
    npm run web
```

2. Start mobile version in development mode

```bash
    npm run mobile
```

3. Build web version

```bash
    npm run build-web
```

4. Build mobile version

```bash
    npm run build-mobile
```

5. Run android app

```bash
    npm run start-android
```

6. Run ios app

```bash
    npm run start-ios
```

## Code conventions

### Code structure

```
src
├── core
│   ├── app
│   │   ├── components # common components
│   │   ├── containers # sections in page
│   │   ├── hooks # common hooks use in containers and pages
│   │   └── pages # pages for application
│   ├── assets
│   │   ├── fonts # fonts folder
│   │   ├── icons # icons components import from svg
│   │   ├── react.svg
│   │   └── svg # svg icons folder
│   ├── constants # constants folder
│   ├── locales
│   │   └── i18n.ts
│   ├── localstorage # data save in localstorage
│   ├── queries # query api wrapper
│   ├── routes # routes for application
│   ├── services # api functions
│   ├── store # global state
│   ├── styles
│   │   ├── GlobalStyles.tsx
│   │   ├── colors.ts # import colors from here
│   │   ├── fonts.d.ts
│   │   ├── global.module.css
│   │   └── text.ts # import common text style from here
│   ├── theme
│   │   └── index.ts
│   ├── types # type definitions
│   └── utils # utility functions
├── mobile
│   ├── configs
│   │   └── index.ts # import from .env file
│   ├── containers
│   ├── hooks
│   ├── index.html
│   ├── layouts
│   │   ├── DefaultLayout.tsx
│   │   └── index.tsx
│   ├── main.tsx # mobile's entry point
│   ├── pages
│   │   └── mobile
│   ├── routes
│   │   └── index.tsx
│   └── vite.config.ts
├── vite-env.d.ts
└── web
    ├── configs
    │   └── index.ts
    ├── index.html
    ├── layouts
    │   ├── DefaultLayout.tsx
    │   └── index.tsx
    ├── main.tsx # web's entry point
    ├── pages
    │   └── Web
    ├── routes
    │   └── index.tsx
    └── vite.config.ts
```

1. `core` folder use to write commons `components`, `containers` and `pages` use for **web** and **mobile**.
2. Write `.env` in `web` and `mobile` for each type of platform.
3. Write **components** which just related to ui only with no business logic to `core/app/components`.
4. Divide **page** in too different parts and write in `core/app/containers` if that **page** 's too complicated else just use
   `core/app/components` too avoid redundant code.
5. Write one function per file in `queries`, `mutations`, `services`, `utils`, `store` and **export default** those functions.
6. Avoid using **any** as much as posible and write types into `core/types`, each type will be seperated into different categries which are divided by folders and written in one file named after it's name.
7. Avoid creating sub folders for each react's component but try to create functions which others can use.

## Best practices

1. Using `var!` instead `var as number` if `var` has type `number | undefined`
2. Using `var?.<key>` as much as posible
3. Using all camelCase, if some variables using other styles, try to convert to camelCase
4. Add space between JSX code and add comments if necessary to enhance readability.
5. Pay attention to **mobile** platform because UI can be different from **web** so try to test UI in mobile before pushing
   code.
6. Avoid using unnessary `<div>` tag by using `<><>`

7. Install a package by using **exact** version of it
8. Commit message following this format `<feat|fix|refactor>: [<id>] <message>`

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/npm/dw/react?logo=react&label=react
[React-url]: https://reactjs.org/
[ReactQuery]: https://img.shields.io/npm/dw/react-query?logo=reactquery&label=react-query
[ReactQuery-url]: https://www.npmjs.com/package/react-query
[Mui]: https://img.shields.io/npm/dw/mui?logo=mui&label=mui
[Mui-url]: https://www.npmjs.com/package/@mui/material
[Vite]: https://img.shields.io/npm/dw/vite?logo=vite&label=vite
[Vite-url]: https://www.npmjs.com/package/vite
[Capacitor]: https://img.shields.io/npm/dw/%40capacitor%2Fcore?logo=capacitor&label=capacitor
[Capacitor-url]: https://capacitorjs.com/

# react-tailwindcss-storybook-sample

A sample React project using [TailwindCSS](https://tailwindcss.com/docs/guides/create-react-app) and [Storybook](https://storybook.js.org/docs/react/get-started/introduction).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Objective

I wanted to study using Tailwind CSS in making components in React.

Although there is a steep learning curve, it looks very promising if you want to make all your components from scratch.

In this project, I have some custom elements so far (I will add more as time goes by):
* Checkbox
* Radio
* ControlLabel
* Textbox
* Avatar


# Installing Tailwind CSS and Storybook with Create React App (CRA).

I am putting this as reference to anyone who wishes to integrate Storybook in React with Tailwind CSS.

First, create your React app.

```
npx create-react-app my-project
cd my-project
```

Then install and setup Tailwind CSS (as of v2.2.4).

**Note: Tailwind CSS requires Node.js 12.13.0 or higher!**

```
npm install -D tailwindcss@npm:tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
npm install @craco/craco
```

Edit the scripts part of your `package.json`.

```
{
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test",
        // ...
    },
}
```

Make `craco.config.js` and write the following:

```
module.exports = {
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}
```

Next, generate `tailwind.config.js`.

```
npx tailwindcss-cli@latest init
```

Edit the generated file to enable purge to remove unused styles in production.

```
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    // ...
}
```

Next, edit your `index.css`, remove everything and write the following instead.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Now, proceed to install Storybook.

```
npx sb init
```

Then edit `.storybook/main.js`.

```
const path = require('path');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\,css&/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              require('tailwindcss'),
              require('autoprefixer')
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    })
    return config;
  }
}
```

That's it and you are good to go! :)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To run Storybook:

### `npm run storybook`


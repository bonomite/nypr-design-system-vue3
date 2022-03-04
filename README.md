# NODE version 14.7.0 

## Installation
npm i

## Storybook
npm run storybook

## Nuxt instance
npm run dev


## Themes location
src/assets/themes/

## global scss location
src/assets/library/

## compile Theme
sass src/assets/themes/theme-name/_theme.scss theme-name.css

## minify Theme
sass "theme-name.css:theme-name.min.css" --style compressed

## Prime Theme View
first, rename config file to "vite.config.js" 
npm run prime-serve

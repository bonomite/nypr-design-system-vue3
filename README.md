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
sass src/assets/themes/white-label/_theme.scss 
src/assets/themes/white-label/white-label.css

## minify Theme
sass "src/assets/themes/white-label/white-label.css:src/assets/themes/white-label/white-label.min.css" --style compresse

## Prime Theme View
first, rename config file to "vite.config.js" 
npm run prime-serve

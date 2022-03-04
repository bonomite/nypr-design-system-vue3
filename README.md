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
sass src/assets/themes/white-paper/_theme.scss 
src/assets/themes/white-paper/white-paper.css

## minify Theme
sass "src/assets/themes/white-paper/white-paper.css:src/assets/themes/white-paper/white-paper.min.css" --style compresse

## Prime Theme View
first, rename config file to "vite.config.js" 
npm run prime-serve

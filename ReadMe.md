# Adding SCSS Workflow

## Adding SCSS
1. change style.css to style.scss
2. require in entry.js
3. add sass-loader to config, and change the file type query
4. check if support file import
5. add scss/panels.scss , import it

## Adding Font Assets
1. add your custom font file to assets/font/font.ttf
2. add font.scss for font face query , import it
3. use your font(sass-loader don't have url rewrite , and would also make css-loader not rewriting it)(so all your img[url] , font[url] would lack consistency with the way you write css)
4. add url-resolve-loader after your sass-loader , and postfix the ?sourceMap

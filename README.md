CanAm Shopify Timbermod
=====================

A Shopify theme based on and modified from the "timber" framework by Shopify and Semantic-UI, a UI component framework based around useful principles from natural language. 

##### Note: This theme is incomplete, further work would have fully implemented Semantic-UI conventions to replace timber (including the grid system), however, work was ceased before this goal was realized.

Requirements
---------------------
- [npm](https://nodejs.org/en/download/) Package Manager (Bundled with Node.js)
- Shopify's [Themekit](https://shopify.github.io/themekit/)

Getting Started
---------------------
1. Clone the repo `git clone https://github.com/jfelixdev/canam-shopify-timbermod.git`
2. Run `npm install`
3. Ensure the configuration of `src\config.yml` is correct for your Shopify deployment.
4. Build the project with `grunt build` and `grunt rebuild` respectively.
5. From the `/deploy` folder, run `theme upload` to upload the theme to Shopify
5. Grunt's default task `grunt` will flatten the `/assets` folder, build the project to the `/deploy` directory, 
and automatically *watch* and upload changed files to Shopify.


Additional resources
---------------------
- [Themes Documentation][1]: Learn more about Liquid and theme templates.
- [Theme Kit][3]: Next generation tool for syncing theme files. Currently in beta.
- [Liquid Tag Cheat Sheet][2]: A helpful reference for working with Shopify liquid files
- [Semantic-UI][4]: A UI component framework based around useful principles from natural language.

[1]: http://docs.shopify.com/themes
[2]: http://cheat.markdunkley.com
[3]: https://github.com/Shopify/themekit
[4]: http://semantic-ui.com/introduction/getting-started.html
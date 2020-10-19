# Item Finder
A front-end template designed to help players obtain various items in a video game.

# Sitemap

## Home
The entry point. The user starts here when they first navigate through the app.

## Maps
This webpage is where users will go to for map information. It is intended to be a app that exposes data for a level or map within the video game this template is made for.

The information that this page should include are:
- An image of the map layout.
- A short description (This can be used to show information that this template is not prepared for)
- Items that can be found in this map. This should link to the Items page
- Enemies that can be found in this map. This should include how likely an the enemy can appear
- Quest points that are located in this map.
- Notable Non-player Characters (NPCs) that are on the map. (Such as Shops, quest givers, etc.)

## Enemy page
This page will be for collecting data on the enemies that are encountered in the game.

The information provided should include:
- The enemy's name.
- A short description.
- The enemy's stat block. (HP, Attack Value, and so on)
- What maps the enemy appears on. (This should serve as a link to the corresponding Maps page)
- The Enemy's droptable. (In most games, defeating an enemy provides some sort of bonus to the player. Often times, the rewards are given randomly from a list of possible drops. We refer to this list as a droptable). This should link to the Iems page

## Items Page
This page will display all the items that are obtainable in the game. Links should be created when there are references to the other pages.

The information this page should have include the following:
- Item name.
- A short description.
- Item category, if applicable
- What map this item can be obtained in.
- The aquisition method; How is this item obtained. Examples include: Enemy drops, given from NPCs, or Found in a chest on the map.
---
# ItemFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

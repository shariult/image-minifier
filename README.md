# Image Minifier

## Features

1. Image compression to a lower size making it Website friendly.
2. SVG sprite keeps all SVG in one file which can be included in HTML. It shortens website load times.

## Installation

**Node.JS** is absolutely necessary. Open terminal from in this directory and run following,

``` bash
npm i -D gulp gulp-cli gulp-imagemin svg-sprite-generator
```

## Usage

Put all SVG files in "dist" directory. "SVG" file's filename will become their SVG id. All svg files will also be compressed and exported in the "dist" folder, delete them if not needed. "./dist" will contain all the compressed Image files and the "sprite.svg" file. Run the following code,

```bash
npm start
```

**Note:** **Never put spaces in the SVG filename**
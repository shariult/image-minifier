//==========================================
// Imports
//==========================================
const path = require("path"),
  fs = require("fs"),
  { task, src, dest, series, parallel, watch } = require("gulp"),
  imagemin = require("gulp-imagemin");

//==========================================
// Variables
//==========================================
const appPath = {
  devImgDir: "./img",
  buildDir: "./dist"
};
const { devImgDir, buildDir } = appPath;

//==========================================
// Code
//==========================================

//==========================================
// Class
//===========================================
// Cleaning dist folder
function deleteFolderRecursive(path=buildDir) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function (file, index) {
      let curPath = path + "/" + file;
      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}
deleteFolderRecursive();

const imgProduction = () => {
  return src(`${devImgDir}/*`)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(buildDir));
};

//==========================================
// Exports
//==========================================
exports.default = series(imgProduction);
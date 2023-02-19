// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`


export const path = {
  build: {
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
  },
  src: {
    scss: `${srcFolder}/scss/*.scss`,
    html: `${srcFolder}/html/*.html`,
  },
  watch: {
    scss: `${srcFolder}/scss/**/*.scss`,
    html: `${srcFolder}/html/**/*.html`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}

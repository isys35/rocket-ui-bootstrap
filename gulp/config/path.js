// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`


export const path = {
  build: {
    css: `${buildFolder}/css/`,
  },
  src: {
    scss: `${srcFolder}/scss/style.scss`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}

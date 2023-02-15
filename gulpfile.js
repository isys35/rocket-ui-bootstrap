// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт общих плагинов
import { plugins } from './gulp/config/plugins.js';

global.app = {
  path: path,
  gulp: gulp,
  plugins: plugins,
};


import { scss } from './gulp/tasks/scss.js';

const mainTasks = gulp.series(
  scss
);

const dev = gulp.series(mainTasks);

// Экспорт сценариев
export { dev }

// Выполнение сценария по умолчанию
gulp.task('default', dev)

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

import { reset } from './gulp/tasks/reset.js';
import { scss } from './gulp/tasks/scss.js';
import { html } from './gulp/tasks/html.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';

// Наблюдатель за изменениями в файлах
function watcher() {
  gulp.watch(path.watch.scss, scss)
  gulp.watch(path.watch.html, html)
  gulp.watch(path.watch.images, images)
}

// Основные задачи
const mainTasks = gulp.series(
    gulp.parallel(html, scss, images),
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

// Экспорт сценариев
export { dev }

// Выполнение сценария по умолчанию
gulp.task('default', dev)

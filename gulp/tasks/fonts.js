export const fonts = () => {
  return app.gulp
    .src(app.path.src.material_icons)
    .pipe(app.gulp.dest(app.path.build.material_icons))
}
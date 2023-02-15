export const server = (done) => {
  app.plugins.browsersync.init({
    files: [`${app.path.build.html}`, `${app.path.build.css}`],
    server: {
      baseDir: `${app.path.build.html}`,
    },
    notify: false,
    port: 3000,
  })
}

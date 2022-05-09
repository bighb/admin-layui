var gulp = require("gulp");
var connect = require("gulp-connect");
var proxy = require("http-proxy-middleware");

gulp.task("connect", function () {
  connect.server({
    port: 9627,
    root: ["./"],
    middleware: function (connect, opt) {
      return [
        proxy("/api", {
          target: "http://10.3.70.132:31887",
          pathRewrite: { "^/api": "" },
          changeOrigin: true,
        }),
      ];
    },
  });
});

gulp.task("default", gulp.series("connect"));

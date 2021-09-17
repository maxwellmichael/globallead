require("babel-register")({
    presets: ["es2015", "react"]
  });
  const router = require('./src/routes').default;
  const Sitemap = require('react-router-sitemap').default;
  (
     new Sitemap(router)
        .build("https://www.globalleadedu.in")
        .save('./public/sitemap.xml')
  );
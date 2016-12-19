module.exports = {
  cache: {
    cacheId: "mon-app-electrode",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "mon-app-electrode",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};

module.exports = {
  configureWebpack: {
    externals: [
      "single-spa",
      "vue",
      "vue-router",
      "vuex",
      "axios",
      "js-cookie",
      "i18n",
      "moment",
      /^@bizfly\/.+/,
    ],
  },
};

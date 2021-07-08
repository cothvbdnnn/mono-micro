const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
// const { VueLoaderPlugin } = require('vue-loader')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "bizfly",
    projectName: "shared",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // mode: "development",
    // module: {
    //   rules: [
    //     {
    //       test: /\.vue$/,
    //       loader: 'vue-loader'
    //     }
    //   ]
    // },
    // plugins: [
    //   new VueLoaderPlugin()
    // ],
    externals: ['vuex', /^@bizfly\/.+$/],
  });
};

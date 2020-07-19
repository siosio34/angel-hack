const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#7986cb",
              "@font-size-base": 16,

              "@rate-star-color": "#965efe",
              "@rate-star-size": 12,

              "@layout-header-background": "#7986cb",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

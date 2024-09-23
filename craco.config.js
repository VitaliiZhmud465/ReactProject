const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#29ABE2", 
              "@font-family": "regularFont",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

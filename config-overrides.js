const { override, fixBabelImports, addLessLoader  } = require('customize-cra');

const addCustomize = () => config => {
  config.output.publicPath = process.env.REACT_APP_BASENAME ? process.env.REACT_APP_BASENAME : '';
  return config;
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addCustomize(),
);

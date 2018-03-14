module.exports = function override(config, env) {
  const { injectBabelPlugin } = require('react-app-rewired');
  const rewireLess = require('react-app-rewire-less');

  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);
  
  return config;
}
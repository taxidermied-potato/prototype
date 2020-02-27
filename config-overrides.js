const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#D3F5F1',
      '@primary-color': '#fff',
      '@text-color': 'rgb(136, 146, 176)',
      '@body-background': '#000000',
      '@component-background': 'none'
    },
  }),
);

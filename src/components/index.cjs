const paths = require.context('./', true, /\.js$/).keys();

const getComponents = paths => {
  let exports;
  paths.forEach(path => {
    if (path === './index.js') return;
    exports = {
      ...exports,
      [path.split('/')[1]]: require(`./${path.split('/')[1]}`).default,
    };
  });
  return exports;
};

module.exports = getComponents(paths);


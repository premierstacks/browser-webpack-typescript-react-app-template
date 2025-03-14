import { browserTypescriptReactApp, copy, getAppEnv, getNodeEnv, getWebpackMode, html } from '@premierstacks/webpack-stack';
import webpack from 'webpack';

export default async function (env, argv) {
  const config = browserTypescriptReactApp(env, argv);

  const webpackMode = getWebpackMode(env, argv);
  const nodeEnv = getNodeEnv(env, argv);
  const appEnv = getAppEnv(env, argv);

  config.entry = {
    index: './src/index.ts',
  };

  config.plugins.push(
    new webpack.EnvironmentPlugin({
      NODE_ENV: nodeEnv,
      WEBPACK_MODE: webpackMode,
      APP_ENV: appEnv,
    }),
  );

  html(env, argv, config, { inject: true, template: './src/index.html', filename: 'index.html', chunks: ['index'], publicPath: '/' });
  copy(env, argv, config, { patterns: [{ from: './public', to: '.' }] });

  return config;
}

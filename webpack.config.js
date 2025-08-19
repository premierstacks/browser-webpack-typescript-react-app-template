import { WebpackStack } from '@premierstacks/webpack-stack';

// eslint-disable-next-line no-restricted-exports
export default function (env, argv) {
  return WebpackStack.preset(env, argv, {
    brotli: true,
    gzip: true,
    environment: true,
    define: true,
  }).entry({
    index: ['./src/index.ts'],
  }).html({
    template: './src/index.html',
    filename: 'index.html',
  }).environment({
    OTLP_API_KEY: env.OTLP_API_KEY ?? argv.otlpApiKey ?? process.env.OTLP_API_KEY ?? null,
  }).copy().build();
}

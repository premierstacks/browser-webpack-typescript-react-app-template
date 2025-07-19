import { createPostcssConfigStylex } from '@premierstacks/postcss-stack';

export default createPostcssConfigStylex({
  include: ['./src/**/*.{tsx,mts,ts,cts,jsx,mjs,js,cjs}', './node_modules/@premierstacks/material-design-expressive-react-aria-stack/src/**/*.{tsx,mts,ts,cts,jsx,mjs,js,cjs}'],
  useCSSLayers: false,
});

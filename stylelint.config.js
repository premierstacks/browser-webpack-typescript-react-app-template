import { StylelintStack } from '@premierstacks/stylelint-stack';

// eslint-disable-next-line no-restricted-exports
export default StylelintStack.create()
  .base()
  .standard()
  .prettier()
  .build();

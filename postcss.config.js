import { PostcssStack } from '@premierstacks/postcss-stack';

// eslint-disable-next-line no-restricted-exports
export default PostcssStack.create()
  .base()
  .env()
  .build();

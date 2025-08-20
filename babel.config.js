import { BabelStack } from '@premierstacks/babel-stack';

// eslint-disable-next-line no-restricted-exports
export default BabelStack.create()
  .base()
  .env()
  .typescript()
  .react()
  .reactCompiler()
  .build();

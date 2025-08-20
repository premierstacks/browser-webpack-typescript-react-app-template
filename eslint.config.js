import { EslintStack } from '@premierstacks/eslint-stack';
import globals from 'globals';

// eslint-disable-next-line no-restricted-exports
export default EslintStack.create()
  .base()
  .globals({
    ...globals.node,
    ...globals.es2024,
  }, { files: [...EslintStack.Selectors.GlobalRC] })
  .globals({
    ...globals.browser,
    ...globals.es2024,
  })
  .ignores([...EslintStack.Selectors.GlobalIgnore])
  .ignores(['dist', 'test-results'])
  .recommended()
  .typescript({ files: [...EslintStack.Selectors.GlobalTypeScript, ...EslintStack.Selectors.GlobalTypedReact] })
  .stylistic()
  .react()
  .jsxA11y()
  .reactHooks()
  .reactCompiler()
  .sonarjs()
  .typescriptDisabled({ files: [...EslintStack.Selectors.GlobalJavaScript, ...EslintStack.Selectors.GlobalReact] })
  .build();

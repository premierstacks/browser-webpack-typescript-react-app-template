import { EslintStack } from '@premierstacks/eslint-stack';

// eslint-disable-next-line no-restricted-exports
export default EslintStack.Presets.browserTypescriptReact().ignores({ patterns: ['dist', 'test-results'] }).build();

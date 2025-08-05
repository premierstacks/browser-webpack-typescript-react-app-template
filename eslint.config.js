import { createEslintConfigBrowserTypescriptReactStrict, createEslintConfigIgnores, createEslintConfigIgnoresRoot } from '@premierstacks/eslint-stack';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'test-results']),
  createEslintConfigIgnores(),
  createEslintConfigIgnoresRoot(),
  createEslintConfigBrowserTypescriptReactStrict(),
  {
    rules: {
      '@stylistic/indent': 'off',
    }
  }
]);

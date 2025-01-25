import pluginVue from 'eslint-plugin-vue'
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default tseslint.config([
  eslint.configs['recommended'],

  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/dev-dist/**', '**/.vitepress/cache/**', '**/.yarn/**'],
  },

  {
    name: 'app/ignore-hosting-server',
    ignores: ['hosting-server/**'],
  },

  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        parser: tseslint.parser,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      }
    }
  },

  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  pluginVue.configs['flat/strongly-recommended']
])

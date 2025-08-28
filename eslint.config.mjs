import withNuxt from './.nuxt/eslint.config.mjs'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'
import tsParser from '@typescript-eslint/parser'

export default withNuxt([
  ...pluginVue.configs['flat/recommended'],
  ...tseslint.configs.recommended,
  {
    // Глобальные макросы Vue
    languageOptions: {
      globals: {
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        // другие Composition API при необходимости
      }
    }
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.vue'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      }
    },
    rules: {
      // Ваши правила Vue
      'vue/script-setup-uses-vars': 'error', // Важно для script setup
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      }
    }
  },
  {
    ignores: [
      '.nuxt/',
      '.output/',
      'node_modules/',
      'dist/',
      '*.config.*'
    ]
  }
])

import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const storybookConfig: StorybookConfig = {
  stories: [
    '../components/**/*.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config?.resolve) {
      config.resolve.plugins = [
        ...(config?.resolve?.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config?.resolve?.extensions,
        }),
      ];
    }
    return config;
  },
};

export default storybookConfig;

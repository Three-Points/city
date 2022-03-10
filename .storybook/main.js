module.exports = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  core: {
    builder: "storybook-builder-vite",
  },
};

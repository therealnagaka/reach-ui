module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  transform: {
    "^.+\\.jsx?$": "./jest-transformer.js"
  },
  globals: {
    __DEV__: true
  }
};

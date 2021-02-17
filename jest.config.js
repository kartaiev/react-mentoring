module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '@testing-library/react/cleanup-after-each'
  ]
};

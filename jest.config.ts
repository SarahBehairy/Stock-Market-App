export default {
  testEnvironment: "jest-environment-jsdom", 
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    '^@assets/(.*)': '<rootDir>/src/assets/$1'},
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  }
};
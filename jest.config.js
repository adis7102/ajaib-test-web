module.exports = {
  testPathIgnorePatterns: [
    "(TestFactory.js)$",
    "/node_modules/",
    "<rootDir>/src/*.js",
  ],
  coveragePathIgnorePatterns: [
    "(TestFactory.js)$",
    "/node_modules/",
    "<rootDir>/src/*.js",
    "<rootDir>/src/App.js",
    "<rootDir>/src/index.js",
    "<rootDir>/src/store/*"
  ],
  moduleFileExtensions: [
    'js', 'jsx'
  ],
  coverageThreshold: {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  collectCoverage: true,
  verbose: true,
  testURL: "http://localhost"
};

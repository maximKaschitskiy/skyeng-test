module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect",
    ],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    coverageDirectory: "<rootDir>/coverage",
    coverageReporters: ["text", "lcov"],
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/build/"],
    modulePathIgnorePatterns: ["<rootDir>/__mocks__/"],
    testEnvironment: "jsdom",
    preset: "ts-jest",
    moduleNameMapper: {
      "^.+\\.svg$": "<rootDir>/src/__mocks__/svgMock.ts",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
  };
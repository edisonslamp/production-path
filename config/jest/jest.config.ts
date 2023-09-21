/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    clearMocks: true,
    coveragePathIgnorePatterns: ["/node_modules/"],
    moduleDirectories: ["node_modules"],
    moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
    rootDir: "../../",
    testEnvironment: "jsdom",
    testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)`],
    setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],

    // to get worked the relatives paths
    modulePaths: ["<rootDir>src"],
};

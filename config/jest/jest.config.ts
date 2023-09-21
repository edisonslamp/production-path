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

    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},

    // Adds a location field to test results
    // testLocationInResults: false,

    // The glob patterns Jest uses to detect test files
    testMatch: [`<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)`],

    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "/node_modules/"
    // ],

    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],

    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,

    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",

    // This option sets the URL for the jsdom environment. It is reflected in properties such as location.href
    // testURL: "http://localhost",

    // to get worked the relatives paths
    modulePaths: ["<rootDir>src"],
};

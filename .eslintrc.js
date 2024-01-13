module.exports = {
    env: {
        browser: true,
        es2021: true,
    },

    globals: {
        IS_DEV: true,
        _API_: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:i18next/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "i18next",
        "react-hooks",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/prefer-nullish-coalescing": [
            0,
            { ignoreTernaryTests: true },
        ],
        "@typescript-eslint/no-floating-promises": [0],
        "@typescript-eslint/strict-boolean-expressions": [0],
        "@typescript-eslint/consistent-type-imports": [
            1,
            { prefer: "no-type-imports" },
        ],
        "@typescript-eslint/explicit-function-return-type": [0],
        "@typescript-eslint/consistent-indexed-object-style": [2, "record"],
        "@typescript-eslint/promise-function-async": [0],
        "@typescript-eslint/prefer-ts-expect-error": [0],
        "@typescript-eslint/ban-ts-comment": [0],
        "@typescript-eslint/no-confusing-void-expression": [0],
        "@typescript-eslint/no-unused-vars": [0],
        "@typescript-eslint/consistent-type-assertions": [0],

        // Handle this later
        // "@typescript-eslint/naming-convention": [
        //     1,
        //     {
        //         selector: "Function",
        //         modifiers: ["const"],
        //         format: ["camelCase"],
        //     },
        // ],

        "react/button-has-type": [
            2,
            { button: true, submit: true, reset: false },
        ],
        "no-unused-vars": [1],
        "react/no-deprecated": [0],
        "promise/param-names": [0],
        "react/jsx-props-no-spreading": [1],
        "prettier/prettier": "error",
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error",
        "react/display-name": "off",
    },
    ignorePatterns: [".eslintrc.js"],
};

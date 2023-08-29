module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
    },
    plugins: ["react", "prettier"],
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
        "@typescript-eslint/naming-convention": [
            1,
            {
                selector: "variable",
                modifiers: ["global"],
                format: ["UPPER_CASE"],
            },
        ],
        "prettier/prettier": "error",
    },
    ignorePatterns: [".eslintrc.js"],
};

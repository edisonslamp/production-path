import path from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        html: "",
        build: "",
        entry: "",
        src: path.resolve(__dirname, "..", "..", "src"),
    };

    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push(".ts", ".tsx");
    config.module.rules.push(buildCssLoader(true));

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    });

    config.plugins.push(
        new DefinePlugin({
            IS_DEV: true,
        }),
    );

    return config;
};

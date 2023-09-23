import webpack from "webpack";
import { buildCssLoader } from "./loaders/buildCssLoader";
export default function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    // если не используем TS - нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    return [fileLoader, svgLoader, typescriptLoader, cssLoader];
}

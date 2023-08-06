import path from "path";
import webpack from "webpack";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildResolvers from "./buildResolver";
import { BuildOptions } from "./types/config";
import buildDevServer from "./buildDevServer";

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolvers(),
    output: {
      path: paths.build, // or 'dist' instead
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}

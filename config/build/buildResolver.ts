import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export default function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        modules: [options.paths.src, "node_modules"],
        extensions: [".tsx", ".ts", ".js"], // import test from ./test(without extensions)
        preferAbsolute: true,
        mainFiles: ["index"],
        // alias: {
        //     "@": [options.paths.src],
        // },
    };
}

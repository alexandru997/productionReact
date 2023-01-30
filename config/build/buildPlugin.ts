import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOption} from "./types/config";

export function buildPlugins({paths}: BuildOption): webpack.WebpackPluginInstance[] {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
    ]
}

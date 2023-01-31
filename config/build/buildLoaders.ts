import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";

export function buildLoaders({isDev}: BuildOption): webpack.RuleSetRule[] {

    //If don't use typescript -> must babel-loader
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {

        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[hash:base64:5]'
                            : '[hash:base64:8]',
                    },

                }
            },
            "sass-loader",
        ],

    }
    return [
        typescriptLoaders,
        cssLoaders
    ]
}

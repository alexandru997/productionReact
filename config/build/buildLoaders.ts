import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {

    //If don't use typescript -> must babel-loader
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoaders = {

        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],

    }
    return [
        typescriptLoaders,
        cssLoaders
    ]
}

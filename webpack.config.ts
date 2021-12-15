import * as path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    context: path.join(__dirname, 'src'),
    entry: './Main.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
            {
                test: /\.css?$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {url: false}
                    }
                ]
            },
        ],
    },
    mode: "development",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    devtool: "inline-source-map",
};

export default config;
module.exports = {
    entry: "./index.jsx",
    output: {
        filename: "bundle.js",
        publicPath: "http://localhost:8090/assets"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: "jsx-loader?insertPragma=React.DOM"
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"]
    }
};
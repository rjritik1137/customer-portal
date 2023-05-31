const webpack = require('webpack')
module.exports = {
    mode: "production", // enables us to optimise the bundled code
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env.name": JSON.stringify("Build")
        })
    ]
}
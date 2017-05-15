// to fix the "The provided value ./Release is not an absolute path!" issue
const path = require('path');

module.exports = {

    entry: './Develop/entry.js',

    output: {
        path: path.resolve(__dirname, 'Release'),
        filename: 'build.js'
    },

    module: {

        rules: [
            {
                test: /\.scss/,
                use: [
                    {
                        // merge css to build.js
                        loader: 'style-loader'
                    },
                    {
                        // add capability to require css, but still not merge to build.js
                        loader: 'css-loader'
                    },
                    {
                        // add scss loader support
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader?name=[name].[ext]&outputPath=assets/"
                    }
                ]
            }
        ]

    }

}

import webpack from 'webpack';
import path from 'path';

export default {
    debug: true,    //enables displaying debug informtion
    devtool: 'cheap-module-eval-source-map',        
    noInfo: false,      //setting it to false means - webpack will display all the files that is bundling
    entry: [
        'eventsource-polyfill',         //necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true',        //reload=true --> note that it reloads the page it hot module reloading fails
        'src/index'
    ],
    target: 'web',      //setting it "web" - will make webpack understand it needs to bundle up the code in a way that browser understands
                        // we can set it to "Node" - if we want it to run on node
    output: { //here we say, where our dev bundles
        path: __dirname + '/dist',         //Note: Physical files are only output by the production build task 'npm run build'.
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {        //here, we are telling webpack dev server where our code is.
        contentBase: '/src'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()        //helps us keep errors from breaking hotreload experience. Shows error msgs in browsers.
    ],
    module: {       //this section tells webpack what file types it should handle.
        loaders: [
            {test: /\.js/, include: path.join(__dirname, 'src'), loaders: ['babel']},  //to handle JS files
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ]
    }
}
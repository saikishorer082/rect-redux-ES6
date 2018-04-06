import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/*eslint-disable no-console */

const port = 4000;
const app = express();
const compiler = webpack(config);       //passing webpack config

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,       //dont want information on command line as it runs
    publicPath: config.output.publicPath        //pass our publicpath which we define in our config
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req,res){     //acts as a wild card - if it recevies any req - end up with index.html.
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else {
        open(`http://localhost:${port}`);
    }
});
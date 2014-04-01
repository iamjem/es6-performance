var fs = require('fs');
var through = require('through2');
var _ = require('lodash');
var spawn = require('child_process').spawn;
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;


var Runner = function(opts){
    // default options
    opts = _.extend({
        output: './results.json',
        command: 'js24',
        args: ['-f']
    }, opts || {});

    // results map
    var results = {};

    return through.obj(function(file, enc, callback){
        // push null files or directories through
        if (file.isNull() || file.isDirectory()) {
            this.push(file);
            return callback();
        }

        var that = this;
        var start = process.hrtime();
        var sm = spawn(opts.command, opts.args.concat([file.path]));

        // emit any errorcs encountered by process
        sm.stderr.on('data', function(data) {
            that.emit('error', new PluginError({
                plugin: 'Runner',
                message: 'Spidermonkey error: ' + data
            }));
            callback();
        });

        // save results on process close
        sm.on('close', function(){
            var end = process.hrtime(start);
            results[file.path] = end[1] / 1000000;
            callback();
        });

    }, function(callback){
        // dump JSON to output file
        fs.writeFile(opts.output, JSON.stringify(results, null, 4), function(){
            callback();
        });
    });
};

module.exports = Runner;

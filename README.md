# ECMAScript 6 Performance Tests

Performance tests for ECMAScript 6 features in SpiderMonkey.

## Requirements

You must have SpiderMonkey installed in order to run the tests. See [MDN](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Getting_SpiderMonkey_source_code) for instructions on how to get the source code.

## Usage

Tests are ran using the [Gulp](http://gulpjs.com/) task runner. Use `gulp test` to run. results are saved to `results.json` by default.

## Runner Options

You may want to change these options for the runner plugin inside the `gulpfile.js`:

+ `output` - The output file. Defaults to `results.json`.
+ `command` - The alias for SpiderMonkey. Defaults to `js24`.

# Credits

The matmul code was adapted from [this project](http://attractivechaos.github.io/plb/).
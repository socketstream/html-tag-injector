# HTML Asset Tag Injector

Injects asset tags (e.g. `<script>` and `<link>`) inside a given HTML document in the most optimal place.

Outputs original HTML with top tags (typically CSS) and bottom tags (typically JS) correctly inserted.


## Example

```js
var injector = require('html-tag-injector');

var input = fs.readFileSync('any.html', 'utf8');
var output = injector(input, {
  top:    '<link rel="stylesheet" type="text/css" href="my.css">'
  bottom: '<script type="text/javascript" src="/myscript.js">'
});
```

## Status

This module is a work in progress. It's possible we'll need to move to a real HTML parser
(like `htmlparser2`) instead of simple string substation in the future.

Pull requests appreciated. Please be sure to create test cases (it's easy).


## Tests

To run tests:

    mocha


## Licence

MIT
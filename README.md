# config-babel

Provides a base config for:

- Babel
- Jest
- Eslint
- Prettier

add using the following:

`npm install @stackcrafters/config-babel --save-dev`

Then create the following files in the base of your project:

.babelrc.js

```
module.exports = require('@stackcrafters/config-babel').babel;
```

jest.config.js

```
module.exports = require('@stackcrafters/config-babel').jest;
```

.eslintrc.js

```
module.exports = require('@stackcrafters/config-babel').eslint;
```

.prettierrc.js

```
module.exports = require('@stackcrafters/config-babel').prettier;
```

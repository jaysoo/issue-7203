This repo demonstrates a workaround for this Nx issue: https://github.com/nrwl/nx/issues/7203

If you are running into an issue with `next-transpile-module` and `@nrwl/next/plugins/with-nx`, then make sure you apply `withNx` first, otherwise `withTM` will break the config.

e.g.

```javascript
const withNx = require('@nrwl/next/plugins/with-nx');

const withTM = require('next-transpile-modules')([
  'react-spring',
  '@react-spring/parallax'
]);

const nextConfig = {
  nx: {
    svgr: false,
  },
};

// This ordering matters. Make sure Nx is applied before TM.
module.exports = withTM(withNx(nextConfig));
```

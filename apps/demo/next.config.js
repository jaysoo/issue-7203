// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const withTM = require('next-transpile-modules')(['react-spring', '@react-spring/parallax'], {
  debug: true,
});

const nextBaseConfig = require('../../next.base.config');

const nextConfig = {
  ...nextBaseConfig,
  reactStrictMode: true,
};

module.exports = withTM(withNx(nextConfig));

const debug = require('debug')('yeps:promisify');

const promisify = module.exports = async (ctx, promises, index = 0) => {
  const promise = promises[index];

  if (promise) {
    debug('Index:', index);
    debug(promise.toString());

    await promise(ctx);

    return promisify(ctx, promises, index + 1);
  }

  return Promise.resolve(ctx);
};

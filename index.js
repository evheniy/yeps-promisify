const debug = require('debug')('yeps:promisify');

const promisify = module.exports = async (ctx, promises) => {
    debug(ctx);
    if (promises.length) {
        await promises.shift()(ctx);
        return promisify(ctx, promises);
    } else {
        return Promise.resolve(ctx);
    }
};

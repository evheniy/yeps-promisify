const debug = require('debug')('yeps:promisify');

const promisify = module.exports = async (ctx, promises) => {
    debug(ctx);

    if (promises.length) {
        await promises[0](ctx);
        return promisify(ctx, promises.slice(1));
    } else {
        return Promise.resolve(ctx);
    }

};

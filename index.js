const debug = require('debug')('yeps:promisify');
const promisify = module.exports = async (ctx, promises) => {

    debug(ctx);
    debug(promises);

    if (promises.length) {
        const promise = promises.pop();
        await promise(ctx);
        return promisify(ctx, promises);
    } else {
        return Promise.resolve(ctx);
    }
};

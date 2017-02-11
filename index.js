const promisify = module.exports = async (ctx, promises) => {
    if (promises.length) {
        const promise = promises.pop();
        await promise(ctx);
        return promisify(ctx, promises);
    } else {
        return Promise.resolve(ctx);
    }
};
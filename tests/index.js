const expect = require('chai').expect;
const promisify = require('../index');

describe('Promisify test', () => {

    it('it should test promises', async () => {

        let isFirstPromiseDone = false;
        let isSecondPromiseDone = false;

        const context = {};

        const promises = [
            ctx => Promise.resolve().then(() => {
                expect(ctx).is.not.undefined;
                expect(ctx).to.be.equal(context);
                isFirstPromiseDone = true;
                return true;
            }),
            ctx => Promise.resolve().then(() => {
                expect(ctx).is.not.undefined;
                expect(ctx).to.be.equal(context);
                isSecondPromiseDone = true;
                return true;
            }),
        ];


        await promisify(context, promises);

        expect(isFirstPromiseDone).is.true;
        expect(isSecondPromiseDone).is.true;

    });
});

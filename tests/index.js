const expect = require('chai').expect;
const promisify = require('..');

describe('Promisify test', () => {

    it('should test promises', async () => {

        let isFirstPromiseDone = false;
        let isSecondPromiseDone = false;

        const context = {};

        const promises = [
            async ctx => {
                expect(ctx).is.not.undefined;
                expect(ctx).to.be.equal(context);
                isFirstPromiseDone = true;
            },
            async ctx => {
                expect(ctx).is.not.undefined;
                expect(ctx).to.be.equal(context);
                isSecondPromiseDone = true;
            },
        ];


        await promisify(context, promises);

        expect(isFirstPromiseDone).is.true;
        expect(isSecondPromiseDone).is.true;

    });

    it('should run it 5 times ', async () => {

        let times = 0;

        const context = {};

        const promises = [
            async ctx => {
                expect(ctx).is.not.undefined;
                expect(ctx).to.be.equal(context);
                times++;
            },
        ];


        await promisify(context, promises);
        await promisify(context, promises);
        await promisify(context, promises);
        await promisify(context, promises);
        await promisify(context, promises);

        expect(times).to.be.equal(5);

    });
});

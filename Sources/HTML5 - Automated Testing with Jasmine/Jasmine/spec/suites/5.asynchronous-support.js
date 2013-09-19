var x = 0;

function asyncMethod() {
    setTimeout(function() {
        x = 1;
        console.log('x was set to ' + x);
    }, 5000);
};

describe('5. Asynchronous support (runs, waitsFor)', function () {
    it('tests asynchronous support', function () {
        //asyncMethod();
        //expect(x).toEqual(1);

        runs(function() {
            asyncMethod();
            console.log('an asynchronous method');
        }, 'an asynchronous method');

        waitsFor(function() {
            return x == 1;
        }, 'x to be equal to 1', 6000);

        //console.log('this executes between two runs()');

        runs(function() {
            console.log('another sequential block');
        }, 'another sequential block');
    });
});
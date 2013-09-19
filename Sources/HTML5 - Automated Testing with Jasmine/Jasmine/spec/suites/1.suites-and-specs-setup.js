describe("1. Specs setup (beforeEach, afterEach)", function() {
    var foo = 0;

    beforeEach(function() {
        foo += 1;
    });

    afterEach(function() {
        foo = 0;
    });

    it("should have the 'foo' value set to 1", function() {
        expect(foo).toEqual(1);
    });

    it("should have the 'foo' value reset to 1", function() {
        expect(foo).toEqual(1);
    });
});
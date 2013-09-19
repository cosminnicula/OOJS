describe("3. Jasmine Default and jQuery Matchers", function () {

    describe("a) Jasmine Default Matchers", function () {

        describe("toEqual", function () {
            it("should compare objects", function() {
                var foo = {
                    a: 12,
                    b: 34
                };
                var bar = {
                    a: 12,
                    b: 34
                };
                expect(foo).toEqual(bar);
            });
        });

        describe("toBe", function () {
            it("the 'toBe' matcher compares with ===", function() {
                var a = 12;
                var b = a;

                expect(a).toBe(b);
                expect(a).not.toBe(null);
            });
        });

        describe("toBeNull", function() {
            it("the 'toBeNull' matcher compares with null", function() {
                var a = null;
                var foo = 'foo';

                expect(null).toBeNull();
                expect(a).toBeNull();
                expect(foo).not.toBeNull();
            });
        });

        describe("toThrow", function() {
                    it("checks if a function throws an exception", function() {
                        var foo = function() {
                            return 1 + 2;
                        };
                        var bar = function() {
                    return a + 1;
                };

                expect(foo).not.toThrow();
                expect(bar).toThrow();
            });
        });

        describe("custom matcher", function() {
            beforeEach(function() {
                this.addMatchers({

                    toBeLessThan: function(expected) {
                        var actual = this.actual;
                        var notText = this.isNot ? " not" : "";

                        this.message = function () {
                            return "Custom message: expected " + actual + notText + " to be less than " + expected;
                        }

                        return actual < expected;
                    }

                });
            });

            it("toBeLessThan should display a custom message", function () {
                var pi = 3.1415926, e = 2.78;

                expect(e).toBeLessThan(pi);
                expect(pi).not.toBeLessThan(e);
            });
        });
    });

	describe("b) Jasmine jQuery Matchers", function () {

		describe("toBe", function () {
			it("should be a div", function () {
				expect($('<div />')).toBe('div');
			});
			
			it("should be a div with a specific id", function () {
				expect($('<div id="some-id"></div>')).toBe('div#some-id');
			});
		});

        describe("toContain", function () {
            beforeEach(function () {
                setFixtures(sandbox().html('<span />'));
            });

            it("should pass if object contains selector", function () {
                expect($('#sandbox')).toContain('span');
            });

            it("should pass negated if object does not contain selector", function () {
                expect($('#sandbox')).not.toContain('div');
            });
        });

        describe("toHaveData", function () {
            var key = 'some_key';
            var value = 'some value';
            var wrongKey = 'wrong_key';

            beforeEach(function () {
                setFixtures(sandbox().data(key, value));
            });

            it("should pass if element has matching data key", function () {
                expect($('#sandbox')).toHaveData(key);
            });

            it("should pass if element has matching key with matching value", function () {
                expect($('#sandbox')).toHaveData(key, value);
            });

            it("should pass negated if element has no matching data key", function () {
                expect($('#sandbox')).not.toHaveData(wrongKey);
            });
        });
	});
});
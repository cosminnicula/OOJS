describe("2. a) Fixtures (jasmine-jQuery): setFixtures", function () {
    beforeEach(function () {
        setFixtures('\
				<input type="checkbox" id="checked" checked="checked" />\n\
				<input type="checkbox" id="not-checked" />');
    });

    it("should pass on checked element", function () {
        expect($('#checked')).toBeChecked();
    });

    it("should pass negated on not checked element", function () {
        expect($('#not-checked')).not.toBeChecked();
    });
});

describe("2. b) Fixtures (jasmine-jQuery): sandbox", function () {
    it("should pass on hidden element", function () {
        setFixtures(sandbox().hide());
        expect($('#sandbox')).toBeHidden();
    });
});

describe("2. c) Fixtures (jasmine-jQuery): style fixture", function () {
    var defaultFixturesPath;
    var fixtureUrl = "real_non_mocked_fixture_style.css";

    beforeEach(function () {
        defaultFixturesPath = jasmine.getFixtures().fixturesPath;
        jasmine.getFixtures().fixturesPath = 'spec/fixtures';
    })

    afterEach(function () {
        jasmine.getFixtures().fixturesPath = defaultFixturesPath;
    })

    it("should load content of fixture file", function () {
        jasmine.getFixtures().load(fixtureUrl);
        expect($('#jasmine-fixtures').html()).toEqual('body { background: red; }');
    })
})
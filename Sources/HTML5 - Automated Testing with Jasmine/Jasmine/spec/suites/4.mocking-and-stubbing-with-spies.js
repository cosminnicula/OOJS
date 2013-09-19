describe('4. a) Mocking and stubbing with spies: toHaveBeenTriggeredOn (spyOnEvent)', function () {
    beforeEach(function () {
        setFixtures(sandbox().html('<a id="clickme">Click Me</a> <a id="otherlink">Other Link</a>'))
        spyOnEvent($('#clickme'), 'click');
    });

    it('should pass if the event was triggered on the object', function () {
        $('#clickme').click();
        expect('click').toHaveBeenTriggeredOn($('#clickme'));
    });
});

jQuery.fn.getSomeAjaxData = function(){

    var that = this;

    $.ajax({
        url: 'some/url',
        type: 'GET',
        contentType: 'application/json',
        dataType: 'json',
        success: function(data){
            $(that).html(data);
        }
    });
};

describe("4. b) Mocking and stubbing with spies: spyOn", function() {

    // stubbing
    it("should get the ajax data",function(){
        setFixtures('<div id="container"></din>');
        spyOn(jQuery, 'ajax');
        $('#container').getSomeAjaxData();
        jQuery.ajax.mostRecentCall.args[0].success('<ul><li>data1</li><li>data2</li></ul>');
        expect($('#container li').length).toBe(2);
    });

    // mocking
    it("should get the ajax data and determine the output",function(){
        setFixtures('<div id="container"></din>');
        spyOn(jQuery, 'ajax').andCallFake(function() {
            $('#container').html('<ul><li>data1</li><li>data2</li></ul>');
        });
        $('#container').getSomeAjaxData();
        expect($('#container li').length).toBe(2);
    });
});

var ParentObjectClass = function() {};
ParentObjectClass.prototype.firstMethod = function(aValue) {
    return "First method: " + this.secondMethod() + " " + aValue;
};
ParentObjectClass.prototype.secondMethod = function() {
    return "Second method: ";
};

describe("4. c) Mocking and stubbing with spies: createSpy", function() {
    it("should call a dummy secondMethod function", function() {
        var anObject = new ParentObjectClass();
        anObject.secondMethod = jasmine.createSpy("secondMethod spy");
        anObject.firstMethod("a test");
        expect(anObject.secondMethod).toHaveBeenCalled();
    });
});
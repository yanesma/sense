require("spec_helper.js");
require("../../public/javascripts/yui/sense_widget.js");

Screw.Unit(function(){
  describe("Panels", function(){
    it("change panel name", function(){
      expect(setPanelName("yanes")).to(equal, "yanes");
    });
  });
});

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "SecondWindow";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.SecondWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "SecondWindow"
    });
    $.__views.SecondWindow && $.addTopLevelView($.__views.SecondWindow);
    exports.destroy = function() {};
    _.extend($, $.__views);
    alert("android");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
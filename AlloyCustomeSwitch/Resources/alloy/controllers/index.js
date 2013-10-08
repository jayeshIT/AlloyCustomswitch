function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "teal",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.btn1 = Ti.UI.createButton({
        top: 10,
        left: 10,
        height: 30,
        width: 60,
        title: "green",
        id: "btn1"
    });
    $.__views.index.add($.__views.btn1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tintswitch = require("com.yydigital.tintswitch");
    Ti.API.info("module is => " + tintswitch);
    var sw = Ti.UI.createSwitch({
        value: true,
        offTint: "red",
        onTint: "green",
        thumbTint: "blue",
        top: 50
    });
    $.index.add(sw);
    var sw2 = Ti.UI.createSwitch({
        value: true,
        offImage: "/off.png",
        onImage: "/on.png",
        onTint: "purple",
        top: 80
    });
    $.index.add(sw2);
    var sw3 = Ti.UI.createSwitch({
        value: false,
        offTint: "red",
        onTint: "green",
        thumbTint: "grey",
        top: 110
    });
    $.index.add(sw3);
    var sw4 = Ti.UI.createSwitch({
        value: false,
        offImage: "/off.png",
        onImage: "/on.png",
        onTint: "purple",
        top: 140
    });
    $.index.add(sw4);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;
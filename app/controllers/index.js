

var tintswitch = require('com.yydigital.tintswitch');
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
  onTint: 'purple',
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
  onTint: 'purple',
  top: 140
});
$.index.add(sw4);



$.index.open();

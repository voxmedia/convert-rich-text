exports.public = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('div');

    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', value.type + ':' + value.id);
    // if doc has data params object
    if (value[value.type]) {
      // should be an object
      var data = value[value.type];
      div.setAttribute('data-anthem-component-data', JSON.stringify(data));
    }
    dom(node).replace(div);

    return div;
  }
};

exports.private = require('./object')('doc');
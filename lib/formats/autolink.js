var addLink = require('./link').add;

module.exports = {
  add: function(node, value, dom) {
    if (!value.disabled) {
      node = addLink(node, value.href, dom);
    }

    return node;
  }
};

module.exports = {
  add: function(node, value, dom) {
    var blank = node.ownerDocument.createTextNode('');
    dom(node).replace(blank);
    return blank;
  }
};

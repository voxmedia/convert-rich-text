module.exports = {
  add: function(node, data, dom) {
    var formatNode = node.ownerDocument.createElement('q');
    if (node.parentNode) {
      dom(node.parentNode).switchTag('ASIDE');
      dom(node).replace(formatNode);
    }
    node = formatNode;
    node.innerHTML = data.value;

    return node;
  }
};

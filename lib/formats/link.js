module.exports = {
  add: function(node, value, dom) {
    var link = node.ownerDocument.createElement('a');
    dom(node).wrap(link);
    node = link;
    node.href = value;
    var previous = node.previousSibling;
    if (previous && previous.tagName === 'A' && previous.href === node.href) {
      node = dom(previous).merge(node).get();
    }
    return node;
  }
};

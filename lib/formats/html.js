module.exports = {
  add: function(node, value, dom) {
    var temp = node.ownerDocument.createElement('div');
    temp.innerHTML = value.value;

    var frag = node.ownerDocument.createDocumentFragment();
    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    // If the HTML block was created via content migration,
    // don't wrap it in an additional div.
    if (value.reason === 'migration-v1') {
      dom(node.parentNode).replace(frag);
    } else {
      dom(node.parentNode).switchTag('div');
      dom(node).replace(frag);
    }
    return frag;
  }
};

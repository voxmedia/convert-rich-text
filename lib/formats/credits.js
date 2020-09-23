module.exports = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('ASIDE');
    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', 'credits');
    div.setAttribute('data-anthem-component-data', JSON.stringify({ credits: value }));
    dom(node).replace(div);

    return div;
  }
};

module.exports = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('ASIDE');

    var data = {
      title: value.title,
      description: value.description,
      label: value.label,
      url: value.url
    };

    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', 'actionbox');
    div.setAttribute('data-anthem-component-data', JSON.stringify(data));
    dom(node).replace(div);

    return div;
  }
};

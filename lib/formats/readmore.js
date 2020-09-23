module.exports = {
  add: function(node, value, dom) {
    dom(node.parentNode).switchTag('ASIDE');

    var data = {
      stories: value.map(function(item) {
        return {
          title: item.title,
          url: item.url
        };
      })
    };

    var div = node.ownerDocument.createElement('div');
    div.setAttribute('data-anthem-component', 'readmore');
    div.setAttribute('data-anthem-component-data', JSON.stringify(data));
    dom(node).replace(div);

    return div;
  }
};

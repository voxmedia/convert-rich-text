module.exports = {
  type: 'line',
  add: function(node, value, dom) {
    var container = node.ownerDocument.createElement('div');
    dom(node).wrap(container);

    switch (value) {
      case 'float-left':
        container.classList.add('c-float-left');
        break;
      case 'float-right':
        container.classList.add('c-float-right');
        break;
      case 'hang-left':
        container.classList.add('c-float-left');
        container.classList.add('c-float-hang');
        break;
      case 'hang-right':
        container.classList.add('c-float-right');
        container.classList.add('c-float-hang');
        break;
      case 'full-bleed':
        container.classList.add('p-fullbleed-block');
        break;
      case 'wide-block':
        container.classList.add('c-wide-block');
        break;
    }

    // If the previous line was aligned the same way, merge together
    var previous = container.previousSibling;
    if (previous &&
        previous.tagName === container.tagName &&
        previous.className === container.className) {
      dom(previous).merge(container);
    }

    // Return the original node, not the wrapper
    return node;
  }
};

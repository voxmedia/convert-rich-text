module.exports = {
  type: 'line',
  add: function(node, value) {
    if (value) {
      node.classList.add('p--has-dropcap');
    }

    return node;
  }
};

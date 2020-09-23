module.exports = {
  add: function(node, value, dom) {
    var hr = dom(node.parentNode).switchTag('hr').get();
    hr.classList.add('p-entry-hr');
    return hr;
  }
};

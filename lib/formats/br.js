// All lines that end with a line-break will end with a <br> tag. `to_unison_html`
// post-processing will strip out extra <p> tags b/t lines after the fact.
//
// Ex. <p>Hello<br></p><p>world!</p> => <p>Hello<br>world!</p>
module.exports = {
  type: 'line',
  add: function(node) {
    var br = node.ownerDocument.createElement('br');
    node.appendChild(br);

    return node;
  }
};

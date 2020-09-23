module.exports = {
  type: 'line',
  add: function(node, value, dom) {
    // Create the image grid container with appropriate classes
    var group = node.ownerDocument.createElement('div');
    dom(node).wrap(group);
    group.classList.add('c-image-grid');
    if (/3-up/.test(value)) {
      group.classList.add('c-image-grid__odd');
      if (value === '3-up-top') {
        group.classList.add('c-image-grid__odd-first-wide');
      }
    }

    // Wrap the image in a grid item div
    var item = node.ownerDocument.createElement('div');
    dom(node).wrap(item).get();
    item.classList.add('c-image-grid__item');

    // Merge together with others in the group + set captions where necessary
    var previousGroup = group.previousSibling;
    if (previousGroup && group.className === previousGroup.className) {
      group = dom(previousGroup).merge(group).get();
      setCaptions(group, value, dom);
    }

    // return the original node
    return node;
  }
};

function setCaptions(group, value, dom) {
  // If this is the last line of data in the image group, parse the caption:
  // - IF 2-up: each image keeps its caption
  // - IF 3-up or 4-up: the caption for the last image is set as a master
  //   caption for the group. If the last image has no caption, none is set.
  //   All individual image captions are stripped out of the group.
  var totalExpected = parseInt(value.split('-up')[0]);
  if (totalExpected >= 3 && group.childNodes.length === totalExpected) {
    var captionText = reduceCaptions(group, dom);
    if (captionText) {
      var caption = group.ownerDocument.createElement('p');
      caption.classList.add('caption');
      caption.innerHTML = captionText;

      var wrapper = group.ownerDocument.createElement('div');
      dom(group).wrap(wrapper).get();
      wrapper.classList.add('c-image-grid__wrapper');
      wrapper.appendChild(caption);
    }
  }
}

// Removes every caption block in the array of grid item childNodes. The last
// caption in the array is returned if it exists.
function reduceCaptions(group, dom) {
  var caption;
  var captions = group.querySelectorAll('.caption');
  for (var i = 0; i < captions.length; i++) {
    caption = captions[i].innerHTML;
    dom(captions[i]).remove();
  }

  return caption;
}

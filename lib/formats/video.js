module.exports = {
  add: function(node, value, dom) {
    var doc = node.ownerDocument;
    dom(node.parentNode).switchTag('div');

    var frag = doc.createDocumentFragment();

    var video = doc.createElement('div');
    video.setAttribute('data-analytics-viewport', 'video');
    video.setAttribute('data-analytics-action', 'volume:view:article:middle');
    video.setAttribute('data-analytics-label', value.title + '|' + value.id);
    video.setAttribute('data-volume-uuid', value.uuid);
    video.setAttribute('data-volume-id', value.id);
    video.setAttribute('data-analytics-placement', 'article:middle');
    video.setAttribute('data-volume-placement', value.isLeadArt ? 'lede' : 'article');
    video.setAttribute('data-volume-autoplay', value.autoplay);
    video.setAttribute('id', 'volume-placement-' + Math.floor(Math.random() * 1000));
    video.setAttribute('class', 'volume-video');
    if (value.playerType) {
      video.setAttribute('data-volume-player-choice', value.playerType.toLowerCase());
    }

    if (value.mask_text) {
      video.setAttribute('data-mask-text', value.mask_text);
    }

    frag.appendChild(video);

    frag.insertBefore(doc.createComment('  ########  BEGIN VOLUME VIDEO  ########  '), video);
    frag.insertBefore(doc.createComment('  ########  END VOLUME VIDEO  ########  '), video.nextSibling);

    if (value.caption) {
      var caption = doc.createElement('div');
      caption.setAttribute('class', 'caption');
      caption.innerHTML = value.caption;
      frag.appendChild(caption);
    }

    dom(node).replace(frag);

    return frag;
  }
};

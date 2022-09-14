var portalLib = require('/lib/xp/portal');


exports.get = function(request) {
  //log.info('request:%s', JSON.stringify(request, null, 4));

  var content = portalLib.getContent();
  //log.info('content:%s', JSON.stringify(content, null, 4));

  return {
    applyFilters: false,
    body: content.data.body,
    contentType: content.data.contentType,
    postProcess: false
  }
}

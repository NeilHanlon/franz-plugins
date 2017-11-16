
module.exports = (Franz) => {

  function getMessages() {
    var has_notification = document.querySelectorAll(".alertMightyMessage").length;

    if (has_notification) {
      Franz.setBadge(has_notification);
    }
  }

  Franz.loop(getMessages);

  /*if (typeof Franz.onNotify === 'function') {
    Franz.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'MightyText';
      }

      return notification;
    });
  }*/

}

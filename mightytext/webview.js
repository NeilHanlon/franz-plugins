
module.exports = (Franz) => {

  const getMessages = function getMessages() {
    var notifications = document.querySelectorAll(".unread-thread-counter")[0].innerText;
    var count = isNaN(parseInt(notifications)) ? 0 : parseInt(notifications)
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);

  if (typeof Franz.onNotify === 'function') {
    Franz.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'MightyText';
      }

      return notification;
    });
  }

}

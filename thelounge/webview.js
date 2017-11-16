
module.exports = (Franz) => {

  const getMessages = function getMessages() {
    let highlight_badges = document.querySelectorAll(".badge.highlight");

    let count = 0;
    if (highlight_badges) {
      for (i=0; i<highlight_badges.length; i++){
        count += parseInt(highlight_badges[i].innerHTML, 10);
      }
    }
    Franz.setBadge(count);
  }

  Franz.loop(getMessages);

  /*if (typeof Franz.onNotify === 'function') {
    Franz.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Hi';
      }

      return notification;
    });
  }*/

}

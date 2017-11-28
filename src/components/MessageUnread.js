import React from 'react';

class MessageUnread extends React.Component {
  render() {
    return (
      <div>
<div className="row message unread">
<div className="col-xs-1">
  <div className="row">
    <div className="col-xs-2">
      <input type="checkbox" />
    </div>
    <div className="col-xs-2">
      <i className="star fa fa-star-o"></i>
    </div>
  </div>
</div>
<div className="col-xs-11">
  <a href="http://www.gmail.com">
    Here is some message text that has a bunch of stuff
  </a>
</div>
</div>
</div>
    )
  }
}

export default MessageUnread
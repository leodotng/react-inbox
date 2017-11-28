import React from 'react';

class MessageSelected extends React.Component {
  render() {
    return (
      <div>
        <div class="row message read selected">
          <div class="col-xs-1">
            <div class="row">
              <div class="col-xs-2">
                <input type="checkbox" checked="checked"/>
              </div>
              <div class="col-xs-2">
                <i class="star fa fa-star-o"></i>
              </div>
            </div>
          </div>
          <div class="col-xs-11">
            <a href="http://www.gmail.com">
              Here is some message text that has a bunch of stuff
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageSelected
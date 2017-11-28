import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './email.ico';
import './App.css';
import ComposeMessage from './components/ComposeMessage';
import MessageExpanded from './components/MessageExpanded';
import MessageRead from './components/MessageRead';
import MessageSelected from './components/MessageSelected';
import MessageStarred from './components/MessageStarred';
import MessageUnread from './components/MessageUnread';
import MessageWLabels from './components/MessageWLabels';
import ToolbarAMS from './components/ToolbarAMS';
import ToolbarSMS from './components/ToolbarSMS';
import ToolbarWCB from './components/ToolbarWCB';
import {msgData} from "./msgData"

class App extends Component {
  render() {
    return (
      <div>
      <logo />
      <ToolbarWCB />
      <ComposeMessage />
      <MessageExpanded />
      <MessageRead />
      <MessageSelected />
      <MessageStarred />
      <MessageUnread />
      <MessageWLabels />
      

      </div>
    );
  }
}

export default App;

ReactDOM.render(
  <App/>, document.getElementById('root'));

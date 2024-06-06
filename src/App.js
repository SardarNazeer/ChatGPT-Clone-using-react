import './App.css';
import chatGptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={chatGptLogo} alt="logo picture" className="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="msg icon" />What is programming ?</button>
            <button className="query"><img src={msgIcon} alt="msg icon" />How to use an API ?</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className="listItem"><img src={home} alt="list item image" className="listItemImg" />Home</div>
          <div className="listItem"><img src={saved} alt="list item image" className="listItemImg" />Saved</div>
          <div className="listItem"><img src={rocket} alt="list item image" className="listItemImg" />Upgrade to pro</div>
        </div>
      </div>
      <div className='main'>

      </div>
    </div>
  );
}

export default App;
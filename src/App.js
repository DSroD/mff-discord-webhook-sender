import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MessageComponent from './MessageComponent.js';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <p>MFF Discord webhook stuff</p>
        <div>
          <MessageComponent />
        </div>
      </main>
    </div>
  );
}

export default App;

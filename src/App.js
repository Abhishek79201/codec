import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  return (
    <div className="body">
      <ChatEngine
        height="100vh"
        projectID="ed0949d1-023e-4b08-9c07-4c47bae9c568"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;

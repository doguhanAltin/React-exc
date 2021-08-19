
import './App.css';
import Header from './components/Header.js';
import User from './components/User.js'
function App() {
  return (
    <div> 
     <User name = "Sa"  surname="As" isLogged={true} age={22} friends={["saaa","asss","daaass"]}/>
    <Header />
    <Header />
    </div>
  );
}

export default App;

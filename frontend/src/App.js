
import "./App.css";
import ChatScreen from "./Screens/ChatScreen";
import HomeScreen from './Screens/HomeScreen';
import {   Route, Routes } from "react-router-dom";
function App() {
  return (
      
    <div className="App">
     
      <Routes>
      <Route path="/" element={<HomeScreen/>}  />
      <Route path="/chats" element={<ChatScreen/>} />
      </Routes>
    </div>

  
  );
}

export default App;

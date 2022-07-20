import './App.css';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">


      <div className="container my-3">
        <TextForm heading="Enter Text Here" />
      </div>


    </div>



  );
}

export default App;


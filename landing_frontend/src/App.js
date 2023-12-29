import './App.css';
import {Routes, Route} from 'react-router-dom'
import {Backoffice} from './backoffice/Backoffice'
import PageRenderer from './backoffice/PageRenderer/PageRenderer';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<PageRenderer/>}/>
        <Route path="/backoffice" element={<Backoffice/>}/>
      </Routes>
    </div>
  );
}

export default App;

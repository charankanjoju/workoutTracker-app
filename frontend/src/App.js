import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import WorkoutContent from './components/WorkoutContent';
import Navbar from './components/Navbar'
import ClientDetail from './components/ClientDetail';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <WorkoutContent/>
        <div className='pages'>
          <Routes>
            <Route path="/"
            element={<Home/>}
            />
             <Route path="/client/:id" element={<ClientDetail/>} />
          </Routes>        
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Create from './Components/Create'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './Components/BlogDetails';

function App() {
  return (
    <Router>
       <div className="App">
      <Navbar />
        <div className="content">

              <Routes>
                <Route path = "/" Component={Home} />
                <Route path = "/create" Component={Create} />
                <Route path = "/blogs/:id" Component={BlogDetails} />
              </Routes>
      
        </div>
    </div>
    </Router>
  );
}

export default App;

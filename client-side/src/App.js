import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login'
import Register from './components/pages/Register';
import Navbar from './components/utilities/Navbar';
import { useAuthHook } from './hooks/useAuthHook'


function App() {
  const { user } = useAuthHook()
  return (
    <div className="">
   
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={user ? <Dashboard/> : <Login />} /> 
          <Route path="/register" element={user ? <Dashboard/> : <Register />} /> 
          <Route path="/dashboard" element={!user ?<Login/> : <Dashboard />} /> 
          <Route
           path="*"
           element={
              <main style={{ padding: "1rem" }}>
                <h3>404! There's nothing here!</h3>
                <p>Enter a valid route</p>
              </main>
            }
         />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

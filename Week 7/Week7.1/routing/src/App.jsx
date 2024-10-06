//import { Dashboard } from './components/Dashboard'
//import { Landing } from './components/Landing'


// Suspense is an API , it is used for asynchronous component fetching , asynchronous data fetching.
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from "react";
import { useNavigate } from 'react-router-dom'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

function App() {
  //code for client side routing
    // cannot use useNavigate inside the App function
  return(
  <div>
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading..."}>Dashboard</Suspense>} />
        <Route path="/" element={<Suspense fallback={"loading..."}>Landing </Suspense>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}
function Appbar() {
  const navigate = useNavigate();

  return <div>
    <div> 
    <button onClick={() => {
      navigate("/");
    }}>Landing page </button>
    
    <button onClick={() => {
      navigate("/dashboard");
    }}>Dashboard</button>
    </div>
  </div>
  
}
export default App
import { Route, Routes, Navigate } from "react-router-dom"
import ReactLoading from "react-loading";
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { useAuthContext } from "./context/AutchContext"

function App() {
  const {authUser, isLoading} = useAuthContext();
  
if(isLoading){
  return <div className="p-4 h-screen flex items-center justify-center"><ReactLoading
  type="spinningBubbles"
  color= "#00b300"
  height={'5%'}
  width={'5%'}
  
/></div>
}

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"}/>}/>
        <Route path="/signup" element={!authUser ? <SignUp /> : <Navigate to={"/"}/>}/>
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to={"/"}/>}/>
      </Routes>
    </div>
  )
}

export default App

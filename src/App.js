import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import AllStudents from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import ViewStudent from "./components/ViewStudent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import userEvent from "@testing-library/user-event";

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    showAlert();
  }, [count])
  const handleClick = () => {
    setCount(count + 1)
  }
  
  const showAlert = () => {
    alert("React App Loaded..")
  }
  
  return (


    <div className="">

          <div className="container">
              <p className="display-1">{count}</p>

              <button className="btn btn-dark" onClick={() => handleClick()}>Count++</button>
          </div>



      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allstudents" element={<AllStudents />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/viewstud" element={<ViewStudent />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

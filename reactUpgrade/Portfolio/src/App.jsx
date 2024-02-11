// Importing necessary components and hooks from react and react-router-dom
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import useJsonData from "./hooks/useJsonData";

// Defining the App component
function App() {

  // Execute a custom hook that fetches the data and stores it as state.
  const jsonData = useJsonData();
  
  // Rendering the Routes if jsonData is not null
  if(jsonData)
  {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home jsonData={jsonData}/>}/>
          <Route path="about" element={<About />}/>
          <Route path="skills" element={<Skills />}/>
          <Route path="contact" element={<Contact />}/>
        </Route>
      </Routes>
    )
  }

}

// Exporting the App component
export default App
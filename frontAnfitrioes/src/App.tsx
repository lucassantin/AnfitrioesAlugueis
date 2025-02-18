import { Box } from "@mui/material"
import { Route, HashRouter as Router, Routes } from "react-router-dom"
import Properties from "./components/propertys/Properties"
import PropertyDetails from "./components/propertys/PropertyDetails"

function App() {
  return (
    <Box sx={{display:'flex', minWidth:'100vw', height:'100vh', backgroundColor: 'white', overflow: 'hidden' }}>
        <Router>
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/imovel/:id" element={<PropertyDetails />} />
          </Routes>
        </Router>
    </Box>
  )
}

export default App

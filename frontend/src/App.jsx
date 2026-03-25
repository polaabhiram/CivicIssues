import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CitizenPage from "./pages/CitizenPage";
import SectorDashboard from "./pages/SectorDashboard";
import GlobalDashboard from "./pages/GlobalDashboard";

function App() {
  const [complaints, setComplaints] = useState([]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <CitizenPage
              complaints={complaints}
              setComplaints={setComplaints}
            />
          }
        />
        <Route
          path="/sector"
          element={<SectorDashboard data={complaints} />}
        />
        <Route
          path="/global"
          element={<GlobalDashboard data={complaints} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
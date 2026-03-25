import React from "react";
import ComplaintTable from "../components/ComplaintTable";

const SectorDashboard = ({ data }) => {
  const sorted = [...data].sort((a, b) =>
    b.priority.localeCompare(a.priority)
  );

  return (
    <div>
      <h2>Sector Dashboard</h2>
      <ComplaintTable data={sorted} />
    </div>
  );
};

export default SectorDashboard;
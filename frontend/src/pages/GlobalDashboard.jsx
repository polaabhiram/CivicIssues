import React from "react";
import ComplaintTable from "../components/ComplaintTable";

const GlobalDashboard = ({ data }) => {
  const sorted = [...data].sort((a, b) =>
    b.priority.localeCompare(a.priority)
  );

  return (
    <div>
      <h2>Global Dashboard</h2>
      <ComplaintTable data={sorted} />
    </div>
  );
};

export default GlobalDashboard;
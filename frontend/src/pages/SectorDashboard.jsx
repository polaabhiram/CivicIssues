import React from "react";
import ComplaintTable from "../components/ComplaintTable";

const SectorDashboard = ({ data }) => {

  const priorityOrder = {
  Critical: 4,
  High: 3,
  Medium: 2,
  Low: 1
};
  const sorted = [...data].sort(
  (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
);

  return (
    <div>
      <h2>Sector Dashboard</h2>
      <ComplaintTable data={sorted} />
    </div>
  );
};

export default SectorDashboard;
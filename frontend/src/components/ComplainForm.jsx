import React, { useState } from "react";

const ComplaintForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mockPrediction = {
      sector: "Roads",
      severity: "High",
      priority: "Critical"
    };

    const complaint = {
      id: Date.now(),
      image,
      text,
      location,
      ...mockPrediction
    };

    onSubmit(complaint);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>Report Issue</h3>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <textarea
        placeholder="Describe the issue..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    marginBottom: "20px"
  }
};

export default ComplaintForm;
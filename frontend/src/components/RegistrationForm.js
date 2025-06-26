import React, { useState } from 'react';
import { logRequest } from '../logging/requestLogger';

function RegistrationForm() {
  const [form, setForm] = useState({
    name: 'Yalla Venkata Siva Manoj',
    email: '22MH1A4961@acoe.edu.in',
    mobileNo: '9059332299',
    githubUsername: 'VenkataSivaManojYalla',
    rollNo: '22MH1A4961',
    accessCode: 'NFwgRT'
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    logRequest("http://localhost:3001/register", "POST", form);

    try {
      const res = await fetch("http://localhost:3001/register", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unknown error");
      }

      setResponse(data);
      setError(null);
      alert("Registration Successful!");
    } catch (error) {
      console.error("Registration failed:", error);
      setResponse(null);
      setError(error.message);
      alert("Registration failed. Check console.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Register</button>
      </form>

      {response && (
        <div style={{ marginTop: "20px" }}>
          <h3>✅ API Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "20px", color: "red" }}>
          <h3>❌ Error:</h3>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;
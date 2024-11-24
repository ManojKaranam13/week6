import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => setName(event.target.value);

  const handleSubmit = (event) => {
    alert(`Hello, ${name}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

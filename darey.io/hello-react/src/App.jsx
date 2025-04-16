// Mini Project Assessment: Fetch and Display List from an API
// Objective: The goal of this project is to build a functional React component that fetches data from an API and displays a list of items.

import React, { useState, useEffect } from "react";
import "./App.css";

// Reusable ListComponent
function ListComponent({ items, renderItem }) {
  if (!items || items.length === 0) {
    return <div className="empty-list">No items to display.</div>;
  }
  return (
    <ul className="user-list">
      {items.map((item, idx) => (
        <li className="user-list-item" key={item.id || idx}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// Parent component that fetches data and uses ListComponent
function FetchList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading users...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="App">
      <h2>User List</h2>
      <ListComponent
        items={users}
        renderItem={(user) => (
          <div>
            <strong>{user.name}</strong> <span className="user-email">({user.email})</span>
          </div>
        )}
      />
    </div>
  );
}

export default FetchList;
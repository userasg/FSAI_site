// src/TestConnection.js
import React, { useEffect, useState } from 'react';
import supabase from './supabase';

const TestConnection = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const insertPlaceholderEmail = async () => {
      // Insert a placeholder email into the "Users" table
      const { data, error } = await supabase
        .from('Users') // Replace 'Users' with your table name if it's different
        .insert([{ email: 'placeholder@example.com' }]); // Insert a placeholder email

      if (error) {
        console.error('Error inserting placeholder email:', error);
      } else {
        console.log('Placeholder email added:', data);
      }
    };

    const fetchUsers = async () => {
      try {
        const { data, error } = await supabase
          .from('Users') // Replace 'Users' with your table name if different
          .select('*');

        if (error) throw error;
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    // Insert a placeholder email and then fetch users
    insertPlaceholderEmail().then(fetchUsers);
  }, []);

  return (
    <div>
      <h2>Connection Test</h2>
      {error && <p>Error: {error}</p>}
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.email}</li>
          ))}
        </ul>
      ) : (
        <p>No data found or table is empty.</p>
      )}
    </div>
  );
};

export default TestConnection;

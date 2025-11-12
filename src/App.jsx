import React from 'react';
import UserProfile from './UserProfile';
import Card from './Card';
import Counter from './Counter';
import Login from './Login';
import Accordion from './Accordion';

// Dữ liệu người dùng (Exercise 4)
const user1 = {
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  avatarUrl: 'data:image/webp;base64,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',
  imageSize: 90,
};

const user2 = {
  name: 'Alex Johnson',
  email: 'alex.j@work.com',
  avatarUrl: 'https://th.bing.com/th/id/OIP.Y50bz_Lk7pNqt0yUxHY5XgHaLH?w=119&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1',
  imageSize: 120,
};

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Lab 3: React Exercises </h1>
      <hr />

      {/* ========================================
        EXERCISE 7.1: WRAPPER COMPONENT WITH CHILDREN
        (Bao bọc UserProfile bằng Card)
        ========================================
      */}
      <h2>Part IV: Composition Patterns</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Card title="Primary User Profile Card (Theme: Dark)">
          {/* EXERCISE 4: Passing Props */}
          <UserProfile userData={user1} theme="dark" />
        </Card>

        <Card title="Secondary User Profile Card (Theme: Light Default)">
          {/* EXERCISE 4: Passing Props */}
          <UserProfile userData={user2} /> 
        </Card>
      </div>

      <hr style={{ margin: '30px 0' }} />

      {/* ========================================
        EXERCISE 5 & 6: STATE AND INTERACTIVITY
        ========================================
      */}
      <h2>Part III: State and Interactivity</h2>
      <div style={{ display: 'flex', gap: '50px' }}>
        {/* EXERCISE 5: Simple Counter */}
        <Counter />

        {/* EXERCISE 6: Multi-Input Form */}
        <Login />
      </div>

      <hr style={{ margin: '30px 0' }} />

      {/* ========================================
        EXERCISE 7.2: LIFTING STATE UP
        ========================================
      */}
      <Accordion />
      
    </div>
  );
}

export default App;
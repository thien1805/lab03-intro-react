import React from 'react';

function Card({ children, title }) { 
  return (
    <div className="card" style={{ border: '2px solid navy', padding: '15px', borderRadius: '10px', minWidth: '300px' }}>
      <h3>{title}</h3> 
      <hr />
      {children} 
    </div>
  );
}

export default Card;
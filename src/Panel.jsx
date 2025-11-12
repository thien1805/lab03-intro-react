import React from 'react';

// Controlled by props
function Panel({ title, children, isActive, onShow }) { 
  return (
    <section className="panel" style={{ border: '1px solid #ddd', margin: '5px 0', padding: '10px' }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{title}</h4>
      <button onClick={onShow}> 
        {isActive ? 'Hide' : 'Show'}
      </button>
      {isActive && <p style={{ borderLeft: '3px solid blue', paddingLeft: '10px' }}>{children}</p>} 
    </section>
  );
}

export default Panel;
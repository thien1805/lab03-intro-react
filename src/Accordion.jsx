import React, { useState } from 'react';
import Panel from './Panel';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div style={{ border: '1px dashed blue', padding: '15px', marginTop: '20px' }}>
      <h3>Accordion (Ex 7.2 - Lifting State Up)</h3>
      <Panel
        title="Panel 1: Introduction"
        isActive={activeIndex === 0} 
        onShow={() => setActiveIndex(0)} 
      >
        React là thư viện JavaScript để xây dựng giao diện người dùng dựa trên component.
      </Panel>
      <Panel
        title="Panel 2: State vs Props"
        isActive={activeIndex === 1} 
        onShow={() => setActiveIndex(1)} 
      >
        Props là dữ liệu truyền từ cha xuống con. State là dữ liệu nội bộ thay đổi theo thời gian.
      </Panel>
    </div>
  );
}

export default Accordion;
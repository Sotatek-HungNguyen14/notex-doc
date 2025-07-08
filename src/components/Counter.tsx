import React from 'react';
export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div style={{ margin: '16px 0' }}>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: '0 12px' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
} 
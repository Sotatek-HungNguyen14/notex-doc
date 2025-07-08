import React from 'react';

export function Alert({ type = 'info', title, children }) {
  // Màu xanh nước biển cho tip/info
  const bgColor = '#e6f4ff';
  const borderColor = '#2196f3';
  const icon = (
    <svg style={{ marginRight: 8, minWidth: 20 }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle cx="10" cy="10" r="10" fill="#2196f3"/>
        <path d="M10 5.5V11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="14" r="1" fill="white"/>
      </g>
    </svg>
  );
  return (
    <div style={{
      border: `1px solid ${borderColor}`,
      borderLeft: `4px solid ${borderColor}`,
      background: bgColor,
      padding: 16,
      margin: '16px 0',
      borderRadius: 8,
      display: 'flex',
      alignItems: 'flex-start',
      boxShadow: '0 1px 4px rgba(33,150,243,0.05)'
    }}>
      {icon}
      <div>
        {title && <strong style={{ display: 'block', marginBottom: 8, color: '#1565c0', fontWeight: 600 }}>{title}</strong>}
        <div style={{ color: '#222' }}>{children}</div>
      </div>
    </div>
  );
} 
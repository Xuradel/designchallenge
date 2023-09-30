import React from 'react';

const Container = ({ children, transparent, color }) => {
  const containerStyle = {
    backgroundColor: transparent ? 'transparent' : (color ? `#${color}` : 'red'),
  };

  return (
    <div className='container' style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;

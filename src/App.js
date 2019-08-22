import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const handlePointerEvent = event => {
    switch (event.type) {
      case 'pointermove':
        setScrollEnabled(false);
        console.log(`${event.type}: scroll DISABLED`);
        break;

      default:
        setScrollEnabled(true);
        console.log(`${event.type}: scroll ENABLED`);
    }
  };

  return (
    <div className="root">
      <div className="touch-area">
        <div
          className="touch-area-inner"
          style={scrollEnabled ? { overflowX: 'scroll' } : { overflowX: 'hidden' }}
          onPointerEnter={handlePointerEvent}
          onPointerLeave={handlePointerEvent}
          onPointerMove={handlePointerEvent}
          onPointerUp={handlePointerEvent}
          onPointerDown={handlePointerEvent}
          onPointerOver={handlePointerEvent}
        >
          {[...Array(15)].map((box, index) =>
            <div key={index} className="box">
              <div className="box-inner">{index}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

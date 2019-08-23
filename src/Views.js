import React, { useState } from 'react';

import './Views.css';

const ENABLE_SPECIAL_VIEW = false;
const ENABLE_POINTER_ACTIONS = false;

const RedView = () => (
  <div className="view" style={{ backgroundColor: "red" }}>Red</div>
);

const BlueView = () => (
  <div className="view" style={{ backgroundColor: "blue" }}>Blue</div>
);

const YellowView = () => (
  <div className="view" style={{ backgroundColor: "yellow" }}>Yellow</div>
);

const RegularGreenView = () => (
  <div className="view" style={{ backgroundColor: "green" }}>Green</div>
);

const SpecialGreenView = () => {
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const handlePointerEvent = event => {
    console.log(event.type);
    if (ENABLE_POINTER_ACTIONS && event.type === 'pointerdown') {
      const touchAreaRect = document.getElementsByClassName('touch-area')[0].getBoundingClientRect();

      if (event.clientX >= touchAreaRect.left
        && event.clientX <= touchAreaRect.right
        && event.clientY >= touchAreaRect.top
        && event.clientY <= touchAreaRect.bottom) {
        setScrollEnabled(true);
      } else {
        setScrollEnabled(false);
      }
    }
  };
  return (
    <div className="view"
      style={{ backgroundColor: "green" }}
      onPointerEnter={handlePointerEvent}
      onPointerLeave={handlePointerEvent}
      onPointerMove={handlePointerEvent}
      onPointerUp={handlePointerEvent}
      onPointerDown={handlePointerEvent}
      onPointerOver={handlePointerEvent}>
      <div className="touch-area">
        <div
          className="touch-area-inner"
          style={scrollEnabled ? { whiteSpace: 'nowrap' } : { whiteSpace: 'normal' }}
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

const GreenView = ENABLE_SPECIAL_VIEW ? SpecialGreenView : RegularGreenView;

export { RedView, BlueView, YellowView, GreenView };
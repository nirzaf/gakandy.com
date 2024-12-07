import React, { useState, useEffect } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition';
import { calculateEyePosition } from '../../utils/eyeCalculations';
import './RobotHead.css';

export const RobotHead: React.FC = () => {
  const mousePosition = useMousePosition();
  const [lastMouseMove, setLastMouseMove] = useState(Date.now());
  const [isBlinking, setIsBlinking] = useState(false);
  
  const leftEyePosition = calculateEyePosition(mousePosition, { x: 35, y: 40 });
  const rightEyePosition = calculateEyePosition(mousePosition, { x: 65, y: 40 });

  useEffect(() => {
    // Update last mouse movement time
    setLastMouseMove(Date.now());
  }, [mousePosition]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      const timeSinceLastMove = Date.now() - lastMouseMove;
      
      // If no movement for 4 seconds, trigger blink
      if (timeSinceLastMove >= 4000) {
        setIsBlinking(true);
        // Reset blink after 150ms
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 4000);

    return () => clearInterval(blinkInterval);
  }, [lastMouseMove]);

  return (
    <div className="flex flex-col items-center">
      <div className="robot-head">
        <div className="eye-socket left">
          <div 
            className={`eye ${isBlinking ? 'blink' : ''}`}
            style={{
              transform: `translate(calc(-50% + ${leftEyePosition.x}px), calc(-50% + ${leftEyePosition.y}px))`
            }}
          >
            <div className="pupil">
              <div className="glow"></div>
            </div>
          </div>
        </div>
        <div className="eye-socket right">
          <div 
            className={`eye ${isBlinking ? 'blink' : ''}`}
            style={{
              transform: `translate(calc(-50% + ${rightEyePosition.x}px), calc(-50% + ${rightEyePosition.y}px))`
            }}
          >
            <div className="pupil">
              <div className="glow"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-lg font-medium text-[#033A5B] tracking-wide">
        We Observe Everything into detail
      </p>
    </div>
  );
};

import React from "react";

const SIZE = 180;
const STROKE = 12;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/* Large central countdown with a circular progress ring.
   `remaining` is whole seconds left; `total` is the card's timer value. */
export default function CountdownTimer({ total, remaining }) {
  const progress = total > 0 ? Math.max(remaining, 0) / total : 0;
  const offset = CIRCUMFERENCE * (1 - progress);
  const final = remaining <= 5;

  return (
    <div className="dv-timer">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <defs>
          <linearGradient id="dv-timer-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c70039" />
            <stop offset="100%" stopColor="#ff5733" />
          </linearGradient>
        </defs>
        <circle
          className="dv-timer-track"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE}
        />
        <circle
          className="dv-timer-ring"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE}
          stroke="url(#dv-timer-grad)"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <div className={`dv-timer-value${final ? " final" : ""}`}>
        {Math.max(remaining, 0)}
      </div>
    </div>
  );
}

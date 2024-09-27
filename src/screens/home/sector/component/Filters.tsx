import React from "react";

const Filters = () => {
  return (
    <div>
      <svg className="absolute">
        <filter id="inner-shadow">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="3" result="offset-blur" />
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <feFlood floodColor="black" floodOpacity="1" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </svg>

      <svg className="absolute">
        <filter id="inner-shadow-mobile">
          <feOffset dx="0" dy="0" />
          <feGaussianBlur stdDeviation="20" result="offset-blur" />
          <feComposite
            operator="out"
            in="SourceGraphic"
            in2="offset-blur"
            result="inverse"
          />
          <feFlood floodColor="black" floodOpacity="1" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </svg>
    </div>
  );
};

export default Filters;

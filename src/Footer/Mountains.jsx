import React from 'react';

const NUM_OF_PEAKS = 5;

const getRandom = (min, max) => {
  if (min < 0) { min = 0; }
  if (max > 100) { max = 100; }
  return Math.floor(Math.random() * (max - min) ) + min;
};

// How far out the next descending points MUST be from their parent
const MIN_RUN = 5;
// DEVNOTE Should I make a MAX_RUN?

class Mountain {
  constructor(i) {
    const farLeft = i * (100 / NUM_OF_PEAKS) + MIN_RUN;
    const farRight = (i + 1) * (100 / NUM_OF_PEAKS) - MIN_RUN;
    this.id = `mountain$i`;
    this.peakX = getRandom(farLeft, farRight);
    this.leftX = getRandom(0, this.peakX - MIN_RUN);
    this.rightX = getRandom(this.peakX + MIN_RUN, 100);
    this.middleX = getRandom(this.leftX + MIN_RUN, this.rightX - MIN_RUN);
  }

  draw() {
    return [
      <path
        key={`${this.id}-front`}
        className="front-face"
        d={`M${this.leftX},100 L${this.peakX},0 L${this.middleX},100 Z`}
        vector-effect="non-scaling-stroke"
        fill="url(#front-gradient)"
      />,
      <path
        key={`${this.id}-right`}
        className="right-face"
        d={`M${this.middleX},100 L${this.peakX},0 L${this.rightX},100 Z`}
        vector-effect="non-scaling-stroke"
        fill="url(#side-gradient)"
      />
    ];
  }
}

export default function Mountains() {
  let mountains = [];
  for (let i = 0; i < NUM_OF_PEAKS; i++) {
    const thisMountain = new Mountain(i);
    mountains.push(thisMountain.draw());
  }
  return (
    <svg
      width="100%"
      height="100%"
      className="mountains"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
        <defs>
          <radialGradient id="front-gradient">
            <stop offset="25%" stopColor="#7122FA" />
            <stop offset="95%" stopColor="#560A86" />
          </radialGradient>
          <radialGradient id="side-gradient">
            <stop offset="5%" stopColor="#483475" />
            <stop offset="95%" stopColor="#070B34" />
          </radialGradient>
        </defs>
       { mountains }
    </svg>
  );
}

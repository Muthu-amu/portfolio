const generateStars = (count) => {
  return Array.from({ length: count }).map((_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const size = Math.random() * 2 + 1; // between 1px to 3px
    const delay = Math.random() * 10;  // random animation delay

    const colors = ['#ffffff', '#60fbc4', '#7ae3ff', '#94fdfd'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <span
        key={i}
        className="absolute rounded-full bg-white blur-[0px] animate-star-blink"
        style={{
          top: `${y}%`,
          left: `${x}%`,
          width: `${size}px`,
          height: `${size}px`,
          animationDelay: `${delay}s`,
        backgroundColor: color,
        }}
      />
    );
  });
};

const StarfieldBackground = ({ count = 80 }) => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {generateStars(count)}
    </div>
  );
};

export default StarfieldBackground;

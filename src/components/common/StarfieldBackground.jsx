import { useEffect, useRef } from 'react';

const StarfieldBackground = ({ count = 300 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = document.body.scrollHeight // ✅ get full page height
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: count }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.7 + 0.5,
      blinkSpeed: Math.random() * 0.004 + 0.003,
      driftX: (Math.random() - 0.5) * 0.05, // slow horizontal drift
      driftY: (Math.random() - 0.5) * 0.05, // slow vertical drift
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let star of stars) {
        // Blink effect
        star.alpha += star.blinkSpeed;
        if (star.alpha > 1 || star.alpha < 0.3) star.blinkSpeed *= -1;

        // Parallax drift
        star.x += star.driftX;
        star.y += star.driftY;

        // Wrap around screen edges
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 251, 196, ${star.alpha})`; // glowing green
        ctx.fill();
      }

      requestAnimationFrame(draw);
    };

    draw();

    const resize = () => {
      width = window.innerWidth;
      height = document.body.scrollHeight; // ✅ get full page height
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default StarfieldBackground;

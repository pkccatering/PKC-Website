import React, { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: 'spice' | 'steam';
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const isReducedMotion = useRef(false);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const createParticles = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return [];
    
    const particles: Particle[] = [];
    const particleCount = isReducedMotion.current ? 0 : Math.min(30, Math.floor(window.innerWidth / 30));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1,
        type: Math.random() > 0.5 ? 'spice' : 'steam'
      });
    }
    return particles;
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isReducedMotion.current) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }

    particlesRef.current.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

      ctx.save();
      ctx.globalAlpha = particle.opacity;
      
      if (particle.type === 'spice') {
        ctx.fillStyle = '#f59e0b';
      } else {
        ctx.fillStyle = '#34d399';
      }
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotion.current = mediaQuery.matches;
    
    const handleChange = (e: MediaQueryListEvent) => {
      isReducedMotion.current = e.matches;
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      mediaQuery.removeEventListener('change', handleChange);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [resizeCanvas, createParticles, animate]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  );
};

export default ParticleBackground;
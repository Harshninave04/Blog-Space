import React, { useEffect, useState, useRef } from 'react';
import { X } from 'lucide-react';
import { BlogPost } from '../types';
import { Link } from 'react-router-dom';

const createConfetti = () => {
  const colors = ['#FFD700', '#FF69B4', '#4169E1', '#32CD32', '#FF4500'];
  const shapes = ['circle', 'star', 'heart', 'square'];
  const confetti = [];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * -100,
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      velocity: {
        x: (Math.random() - 0.5) * 12,
        y: Math.random() * 4 + 1,
      },
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 6,
      wobble: Math.random() * 2 * Math.PI,
    });
  }
  return confetti;
};

const drawShape = (
  ctx: CanvasRenderingContext2D,
  shape: string,
  x: number,
  y: number,
  size: number,
) => {
  switch (shape) {
    case 'circle':
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.fill();
      break;
    case 'star':
      const spikes = 5;
      const outerRadius = size / 2;
      const innerRadius = size / 4;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / spikes;
        if (i === 0) ctx.moveTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
        else ctx.lineTo(x + radius * Math.cos(angle), y + radius * Math.sin(angle));
      }
      ctx.closePath();
      ctx.fill();
      break;
    case 'heart':
      ctx.beginPath();
      const topX = x;
      const topY = y;
      size = size * 0.8;
      ctx.moveTo(topX, topY + size / 4);
      ctx.bezierCurveTo(topX, topY, topX - size / 2, topY, topX - size / 2, topY + size / 4);
      ctx.bezierCurveTo(
        topX - size / 2,
        topY + size / 2,
        topX,
        topY + size * 0.75,
        topX,
        topY + size,
      );
      ctx.bezierCurveTo(
        topX,
        topY + size * 0.75,
        topX + size / 2,
        topY + size / 2,
        topX + size / 2,
        topY + size / 4,
      );
      ctx.bezierCurveTo(topX + size / 2, topY, topX, topY, topX, topY + size / 4);
      ctx.fill();
      break;
    default:
      ctx.fillRect(-size / 2, -size / 2, size, size);
  }
};

const ConfettiEffect = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef(createConfetti());
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      let activePieces = 0;

      particles.forEach((particle) => {
        if (particle.y < canvas.height + 50) {
          activePieces++;
          particle.wobble += 0.1;
          particle.x += particle.velocity.x + Math.sin(particle.wobble) * 0.5;
          particle.y += particle.velocity.y;
          particle.velocity.y += 0.15;
          particle.rotation += particle.rotationSpeed;

          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.fillStyle = particle.color;
          drawShape(ctx, particle.shape, 0, 0, particle.size);
          ctx.restore();
        }
      });

      if (activePieces > 0) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [onComplete]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />;
};

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  results: BlogPost[];
}

export default function SearchOverlay({
  isOpen,
  onClose,
  searchTerm,
  onSearchChange,
  results,
}: SearchOverlayProps) {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowConfetti(true);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity">
      {showConfetti && <ConfettiEffect onComplete={() => setShowConfetti(false)} />}
      <div className="bg-white w-full max-w-2xl mx-auto mt-20 rounded-lg shadow-xl">
        <div className="p-4 border-b flex justify-between items-center">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-2 focus:outline-none text-lg"
            autoFocus
          />
          <button onClick={onClose} className="ml-4">
            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
          </button>
        </div>
        <div className="max-h-[60vh] overflow-y-auto">
          {results.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              onClick={onClose}
              className="block p-4 hover:bg-gray-50 border-b">
              <h3 className="font-medium text-gray-900">{blog.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{blog.excerpt}</p>
            </Link>
          ))}
          {searchTerm && results.length === 0 && (
            <div className="p-4 text-center text-gray-500">No results found for "{searchTerm}"</div>
          )}
        </div>
      </div>
    </div>
  );
}

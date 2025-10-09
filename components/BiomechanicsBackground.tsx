import React, { useRef, useEffect } from 'react';

interface BiomechanicsBackgroundProps {
  className?: string;
}

const BiomechanicsBackground: React.FC<BiomechanicsBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating geometric shapes for a sleek, professional look
    class Shape {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      shapeType: 'circle' | 'triangle' | 'square';
      opacity: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 20 + 10;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.color = `rgba(${Math.floor(Math.random() * 30 + 80)}, ${Math.floor(Math.random() * 30 + 90)}, ${Math.floor(Math.random() * 50 + 180)}, ${Math.random() * 0.1 + 0.05})`;
        this.shapeType = ['circle', 'triangle', 'square'][Math.floor(Math.random() * 3)] as 'circle' | 'triangle' | 'square';
        this.opacity = Math.random() * 0.1 + 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotationSpeed;
        
        // Boundary check with bounce
        if (canvas) {
          if (this.x > canvas.width + this.size) this.x = -this.size;
          if (this.x < -this.size) this.x = canvas.width + this.size;
          if (this.y > canvas.height + this.size) this.y = -this.size;
          if (this.y < -this.size) this.y = canvas.height + this.size;
        }
      }

      draw() {
        if (!ctx || !canvas) return;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        
        switch (this.shapeType) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
            ctx.fill();
            break;
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(0, -this.size / 2);
            ctx.lineTo(-this.size / 2, this.size / 2);
            ctx.lineTo(this.size / 2, this.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
          case 'square':
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            break;
        }
        
        ctx.restore();
      }
    }

    // Create shapes
    const shapes: Shape[] = [];
    for (let i = 0; i < 15; i++) {
      shapes.push(new Shape(
        Math.random() * (canvas?.width || 1000),
        Math.random() * (canvas?.height || 1000)
      ));
    }

    // Subtle gradient overlay for depth
    const drawGradient = () => {
      if (!ctx || !canvas) return;
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(79, 70, 229, 0.03)');
      gradient.addColorStop(1, 'rgba(67, 56, 202, 0.03)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear with slight fade effect
      ctx.fillStyle = 'rgba(17, 24, 39, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient
      drawGradient();
      
      // Update and draw shapes
      shapes.forEach(shape => {
        shape.update();
        shape.draw();
      });
      
      // Draw subtle connections between nearby shapes
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.05)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const dx = shapes[i].x - shapes[j].x;
          const dy = shapes[i].y - shapes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.05;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(shapes[i].x, shapes[i].y);
            ctx.lineTo(shapes[j].x, shapes[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ background: 'transparent' }}
    />
  );
};

export default BiomechanicsBackground;
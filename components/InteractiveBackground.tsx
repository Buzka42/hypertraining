import { useEffect, useRef } from "react";
import { Dumbbell, Zap, TrendingUp } from "lucide-react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Smoothly interpolate mouse position
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      mousePos.current.x = lerp(mousePos.current.x, targetPos.current.x, 0.1);
      mousePos.current.y = lerp(mousePos.current.y, targetPos.current.y, 0.1);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create radial gradient that follows mouse
      const gradient = ctx.createRadialGradient(
        mousePos.current.x,
        mousePos.current.y,
        0,
        mousePos.current.x,
        mousePos.current.y,
        400
      );
      
      gradient.addColorStop(0, "hsla(16, 90%, 58%, 0.15)"); // primary color
      gradient.addColorStop(0.5, "hsla(280, 60%, 55%, 0.08)"); // accent color
      gradient.addColorStop(1, "hsla(0, 0%, 0%, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add secondary gradient at opposite corner
      const gradient2 = ctx.createRadialGradient(
        canvas.width - mousePos.current.x,
        canvas.height - mousePos.current.y,
        0,
        canvas.width - mousePos.current.x,
        canvas.height - mousePos.current.y,
        350
      );
      
      gradient2.addColorStop(0, "hsla(200, 80%, 50%, 0.12)"); // secondary color
      gradient2.addColorStop(0.6, "hsla(16, 90%, 58%, 0.06)");
      gradient2.addColorStop(1, "hsla(0, 0%, 0%, 0)");

      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Interactive canvas layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Animated floating fitness icons */}
      <div className="absolute top-20 left-10 text-primary/20 animate-float">
        <Dumbbell className="w-20 h-20" />
      </div>
      
      <div className="absolute top-40 right-20 text-secondary/20 animate-float-slow">
        <Zap className="w-24 h-24" />
      </div>
      
      <div className="absolute bottom-40 left-1/4 text-accent/20 animate-float md:left-1/4" style={{ animationDelay: "1s", left: '20%' }}>
        <TrendingUp className="w-20 h-20" />
      </div>
      
      <div className="absolute bottom-20 right-1/3 text-primary/20 animate-float-slow md:right-1/3" style={{ animationDelay: "2s", right: '20%' }}>
        <Dumbbell className="w-16 h-16" />
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow md:right-1/4" style={{ right: '15%' }} />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow md:left-1/4" style={{ animationDelay: "1.5s", left: '15%' }} />
    </div>
  );
};

export default InteractiveBackground;
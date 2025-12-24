import React, { useState, useEffect, useRef } from "react";
import { Eye, EyeOff, Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AnimatedSignIn: React.FC = () => {
  const [role, setRole] = useState<"user" | "admin">("user");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();

  // Handle role switching - clear fields and errors
  const handleRoleSwitch = (newRole: "user" | "admin") => {
    setRole(newRole);
    setUsername("");
    setPassword("");
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Simple frontend validation (temporary)
    if (role === "admin") {
      if (username === "admin" && password === "admin123") {
        console.log("Admin logged in");
        toast.success("Welcome back Admin!");
        navigate("/admin");
      } else {
        setError("Invalid credentials. Use 'admin' / 'admin123'");
      }
    } else {
      if (username === "user" && password === "user123") {
        console.log("User logged in");
        toast.success("Welcome back User!");
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Use 'user' / 'user123'");
      }
    }
  };

  // Particle animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach((particle2) => {
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={`animated-login-wrapper ${isDarkMode ? 'dark' : 'light'}`}>
      <canvas ref={canvasRef} className="animated-login-canvas" />
      
      <button 
        className="animated-theme-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle theme"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <div className="animated-login-container">
        <div className="animated-login-card">
          <div className="animated-role-tabs">
            <button
              type="button"
              className={`animated-role-tab ${role === "user" ? "active" : ""}`}
              onClick={() => handleRoleSwitch("user")}
            >
              User
            </button>
            <button
              type="button"
              className={`animated-role-tab ${role === "admin" ? "active" : ""}`}
              onClick={() => handleRoleSwitch("admin")}
            >
              Admin
            </button>
          </div>

          <div className="animated-login-header">
            <h1 className="animated-login-title">Welcome</h1>
            <p className="animated-login-subtitle">Please sign in to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="animated-login-form">
            <div className="animated-form-group">
              <label htmlFor="username" className="animated-form-label">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="animated-form-input"
                placeholder={role === "user" ? "user" : "admin"}
                required
              />
            </div>

            <div className="animated-form-group">
              <label htmlFor="password" className="animated-form-label">
                Password
              </label>
              <div className="animated-password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="animated-form-input"
                  placeholder={role === "user" ? "user123" : "admin123"}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="animated-password-toggle"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="animated-error-message">
                {error}
              </div>
            )}

            <div className="animated-form-footer">
              <label className="animated-remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="animated-checkbox"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="animated-forgot-link">
                Forgot Password?
              </a>
            </div>

            <button 
              type="submit" 
              className="animated-submit-btn"
              disabled={!username || !password}
            >
              {role === "user" ? "Sign In as User" : "Sign In as Admin"}
            </button>
          </form>

          <div className="animated-signup-link">
            Don't have an account?{" "}
            <a href="/signup">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSignIn;

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface LoadingPercentageProps {
  color?: string;
  size?: string;
  speed?: number;
  redirectTo?: string;
}

const LoadingPercentage: React.FC<LoadingPercentageProps> = ({
  color = "#6200ee",
  size = "text-3xl",
  speed = 1200,
  redirectTo = "/videos",
}) => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [speed]);

  // Add effect for redirection when progress reaches 100%
  useEffect(() => {
    if (progress === 100) {
      // Add a small delay before redirecting to ensure the user sees 100%
      const redirectTimeout = setTimeout(() => {
        router.push(redirectTo);
      }, 500);
      
      return () => clearTimeout(redirectTimeout);
    }
  }, [progress, redirectTo, router]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className={`${size} font-bold`} style={{ color }}>
        {progress}%
      </p>
    </div>
  );
};

export default LoadingPercentage;

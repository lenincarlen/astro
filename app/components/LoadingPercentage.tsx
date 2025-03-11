import { useState, useEffect } from "react";

interface LoadingPercentageProps {
  color?: string;
  size?: string;
  speed?: number;
}

const LoadingPercentage: React.FC<LoadingPercentageProps> = ({
  color = "#6200ee",
  size = "text-3xl",
  speed = 1200,
}) => {
  const [progress, setProgress] = useState(0);

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

  return (
    <div className="flex mx-auto flex-col items-center justify-center">
      
      <p className={`${size} font-bold`} style={{ color }}>
        {progress}%
      </p>
     
    </div>
  );
};

export default LoadingPercentage;

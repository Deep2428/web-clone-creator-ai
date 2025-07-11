import { Shield } from "lucide-react";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      container: "space-x-3",
      icon: "h-6 w-6",
      mainText: "text-lg",
      subText: "text-xs"
    },
    md: {
      container: "space-x-3",
      icon: "h-8 w-8",
      mainText: "text-2xl",
      subText: "text-sm"
    },
    lg: {
      container: "space-x-4",
      icon: "h-10 w-10",
      mainText: "text-3xl",
      subText: "text-base"
    }
  };

  const colors = {
    light: {
      icon: "text-amber-400",
      main: "text-white",
      sub: "text-amber-200"
    },
    dark: {
      icon: "text-blue-900",
      main: "text-blue-900",
      sub: "text-blue-700"
    }
  };

  return (
    <div className={`flex items-center ${sizeClasses[size].container}`}>
      <div className="relative">
        <Shield className={`${sizeClasses[size].icon} ${colors[variant].icon}`} />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full opacity-75"></div>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-orbitron font-black tracking-wider ${sizeClasses[size].mainText} ${colors[variant].main}`}>
          NIKOLAX
        </span>
        <span className={`font-inter font-medium tracking-wide ${sizeClasses[size].subText} ${colors[variant].sub} -mt-1`}>
          ELECTRICAL
        </span>
      </div>
    </div>
  );
};

export default Logo;
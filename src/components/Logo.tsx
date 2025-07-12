
interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "dark", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: {
      image: "h-8 w-auto",
    },
    md: {
      image: "h-10 w-auto",
    },
    lg: {
      image: "h-12 w-auto",
    }
  };

  return (
    <div className="flex items-center">
      <img 
        src="/lovable-uploads/11556457-1251-4974-ba59-f3e82b0f326b.png" 
        alt="NIKOLAX Electrical Logo"
        className={sizeClasses[size].image}
      />
    </div>
  );
};

export default Logo;

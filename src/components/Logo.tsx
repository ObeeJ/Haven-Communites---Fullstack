import logoImage from "figma:asset/3eada838a8a55b948f7379c648ac717c0e7f47c9.png";

export default function Logo({ onClick, className = "" }: { onClick?: () => void; className?: string }) {
  return (
    <div 
      className={`relative shrink-0 ${onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''} ${className}`}
      onClick={onClick}
    >
      <img 
        src={logoImage} 
        alt="Haven Communities Logo" 
        className="h-auto w-[105px]"
      />
    </div>
  );
}

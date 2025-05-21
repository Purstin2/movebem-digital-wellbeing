
export interface YogaIllustrationProps {
  pose?: string;
  className?: string;
}

export function YogaIllustration({ pose = "default", className }: YogaIllustrationProps) {
  return (
    <div className={`flex items-center justify-center w-full h-full ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Chair */}
        <rect x="120" y="150" width="160" height="20" rx="2" fill="#9747FF" opacity="0.2" />
        <rect x="120" y="170" width="160" height="80" rx="2" fill="#9747FF" opacity="0.3" />
        <rect x="130" y="170" width="140" height="10" rx="2" fill="#9747FF" opacity="0.4" />
        <rect x="130" y="230" width="140" height="10" rx="2" fill="#9747FF" opacity="0.4" />
        <rect x="130" y="250" width="20" height="30" rx="2" fill="#9747FF" opacity="0.5" />
        <rect x="250" y="250" width="20" height="30" rx="2" fill="#9747FF" opacity="0.5" />

        {/* Person on chair - simplified representation */}
        <circle cx="200" cy="120" r="25" fill="#E9D5FF" stroke="#9747FF" strokeWidth="2" />
        <path 
          d={
            pose === "arms-up" 
              ? "M200 145 L200 200 M180 165 L220 165 M200 165 L160 130 M200 165 L240 130" 
              : pose === "side-bend"
              ? "M200 145 L200 200 M180 165 L220 165 M200 165 L160 180 M200 165 L240 130"
              : pose === "twist"
              ? "M200 145 L200 200 M180 165 L220 165 M200 165 L150 150 M200 165 L230 170"
              : "M200 145 L200 200 M180 165 L220 165 M200 165 L170 165 M200 165 L230 165"
          } 
          stroke="#9747FF" 
          strokeWidth="3" 
          strokeLinecap="round" 
        />

        {/* Simple face */}
        <circle cx="190" cy="115" r="3" fill="#7432B4" />
        <circle cx="210" cy="115" r="3" fill="#7432B4" />
        <path d="M195 130 Q200 135 205 130" stroke="#7432B4" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

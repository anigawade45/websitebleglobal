import React from "react";

const AVATARS = [
  // LEFT SIDE
  { id: 11, label: "Lead Designer", x: "2%", y: "50%", mdY: "55%", zIndex: "z-20", anim: "animate-float", side: "left" },
  { id: 12, label: "Senior Strategist", x: "8%", y: "40%", hiddenSm: true, zIndex: "z-10", anim: "animate-float-delayed", side: "left" },
  { id: 13, label: "Frontend Engineer", x: "20%", mdX: "25%", y: "15%", zIndex: "z-10", anim: "animate-float", side: "left" },
  { id: 14, label: "Product Manager", x: "32%", y: "45%", hiddenSm: true, zIndex: "z-10", anim: "animate-float-delayed", side: "left" },

  // RIGHT SIDE
  { id: 15, label: "UX Researcher", x: "32%", y: "20%", zIndex: "z-10", anim: "animate-float", side: "right" },
  { id: 16, label: "Creative Director", x: "20%", y: "40%", hiddenSm: true, zIndex: "z-10", anim: "animate-float-delayed", side: "right" },
  { id: 17, label: "Content Writer", x: "8%", y: "15%", hiddenSm: true, zIndex: "z-10", anim: "animate-float", side: "right" },
  { id: 18, label: "Marketing Lead", x: "2%", y: "50%", mdY: "55%", zIndex: "z-20", anim: "animate-float-delayed", side: "right" },
];

const AvatarItem = React.memo(({ avatar }) => {
  const { id, label, x, y, mdX, mdY, zIndex, anim, side, hiddenSm } = avatar;

  const positionStyle = {
    [side]: x,
    top: y,
  };

  return (
    <div
      className={`absolute w-12 h-12 md:w-28 md:h-28 lg:w-[168px] lg:h-[168px] group pointer-events-auto will-change-transform transform-gpu ${anim} ${zIndex} ${hiddenSm ? 'hidden md:block' : ''}`}
      style={positionStyle}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label={`Team Member: ${label}`}
        onKeyDown={(e) => e.key === "Enter" && console.log(label)}
        className="w-full h-full rounded-full border-2 md:border-4 border-white shadow-lg md:shadow-xl overflow-hidden transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:z-50 cursor-pointer aspect-square bg-gray-100 opacity-80 hover:opacity-100 hover:blur-0 blur-[0.2px] transform-gpu"
      >
        <img
          src={`https://i.pravatar.cc/300?img=${id}`}
          alt={label}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${label.replace(' ', '+')}&background=random`;
          }}
        />
      </div>
    </div>
  );
});

AvatarItem.displayName = "AvatarItem";

export function AvatarCluster() {
  return (
    <div
      className="relative w-full max-w-full mx-auto h-[220px] md:h-[480px] lg:h-[550px] mt-8 md:mt-12 mb-4 md:mb-8 pointer-events-none"
    >
      {AVATARS.map((avatar) => (
        <AvatarItem key={avatar.id} avatar={avatar} />
      ))}
    </div>
  );
}

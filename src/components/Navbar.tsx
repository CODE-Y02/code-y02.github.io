"use client";

import { Button } from "./ui/button";

const navItems = [
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

export function Navbar() {
  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#181616] border-b border-[#272525] px-6 py-4 flex items-center justify-between">
      <span className="text-2xl font-bold text-orange-500 tracking-tight">
        Yatharth
      </span>
      {/* Show nav buttons only on md+ screens */}
      <div className="hidden md:flex gap-4">
        {navItems.map((item) => (
          <Button
            key={item.target}
            onClick={() => handleScroll(item.target)}
            variant={"outline"}
            className="px-4 py-2 rounded text-white bg-transparent hover:bg-orange-500 hover:text-white transition"
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}

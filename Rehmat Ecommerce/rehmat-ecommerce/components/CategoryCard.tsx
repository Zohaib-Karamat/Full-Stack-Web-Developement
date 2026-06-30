import { ReactNode } from "react";

interface CategoryCardProps {
  icon: ReactNode;
  label: string;
  isActive?: boolean;
}

export default function CategoryCard({ icon, label, isActive }: CategoryCardProps) {
  return (
    <div
      className={`w-44 h-36 flex flex-col items-center justify-center gap-4 rounded-sm border cursor-pointer transition-colors ${isActive
          ? "bg-red-500 border-red-500 text-white shadow-md"
          : "border-black/30 hover:bg-red-500 hover:border-red-500 hover:text-white hover:shadow-md bg-transparent text-black"
        }`}
    >
      <div className={`[&>svg]:w-14 [&>svg]:h-14 [&>svg]:stroke-1 transition-colors ${isActive ? "[&>svg]:text-white" : ""}`}>
        {icon}
      </div>
      <span className="font-poppins font-normal text-base">{label}</span>
    </div>
  );
}

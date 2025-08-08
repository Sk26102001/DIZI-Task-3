import React from "react";

interface PlanCardProps {
  title: string;
  total: number;
  oldPrice?: number;
  discount?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function PlanCard({
  title,
  total,
  oldPrice,
  discount,
  selected = false,
  onClick,
}: PlanCardProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer  hover:bg-gradient-to-br from-pink-400 via-yellow-100 to-purple-400 border p-4 rounded-xl shadow-md transition-all ${
        selected ? "border-green-500 bg-green-50" : "hover:shadow-lg"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div
            className={`w-4 h-4 rounded-full border ${
              selected ? "bg-green-500 border-green-500" : "border-gray-400"
            }`}
          />
          <div>
            <p className="text-sm font-semibold">{title}</p>
            {discount && (
              <p className="text-xs text-pink-500 font-semibold">{discount}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          {oldPrice && (
            <p className="text-xs text-gray-400 line-through">₹{oldPrice}</p>
          )}
          <p className="text-base font-bold">₹{total}</p>
        </div>
      </div>
    </div>
  );
}

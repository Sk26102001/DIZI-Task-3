import React from "react";

interface SummaryProps {
  fees: number;
  discount: number;
  practiceSets: number;
}

export default function Summary({ fees, discount, practiceSets }: SummaryProps) {
  const total = fees + practiceSets - discount;

  return (
    <div className="mt-6 space-y-2 text-sm">
      <div className="flex justify-between">
        <span>Fees</span>
        <span>₹{fees}</span>
      </div>
      <div className="flex justify-between text-green-600">
        <span>Discount</span>
        <span>-₹{discount}</span>
      </div>
      <div className="flex justify-between">
        <span>Practice Sets</span>
        <span>₹{practiceSets}</span>
      </div>
      <hr />
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>₹{total}</span>
      </div>
      <div className="text-green-600 text-xs mt-2 bg-green-100 p-2 rounded-md">
        ✅ You’ll save ₹{discount} on this!
      </div>
    </div>
  );
}

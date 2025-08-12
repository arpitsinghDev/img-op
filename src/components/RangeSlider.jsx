import { useState } from "react";

export default function RangeSlider({ min = 0, max = 75, step = 1 ,value,setRangeValue}) {
// Start at mid-value

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Label and Value */}
      <div className="text-lg font-semibold">
        Quality: <span className="text-blue-600">{value}</span>
      </div>

      {/* Range Input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setRangeValue(e.target.value)}
        className="w-full md:w-96 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer 
                   accent-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Value Labels (Optional) */}
      <div className="flex justify-between w-full md:w-96 text-sm text-gray-600">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

import React from "react";

export default function CaculaProgress({ rate = 50 }) {
  let color;

  switch (true) {
    case parseInt(rate) >= 70:
      color = "#2da94c";
      break;
    case parseInt(rate) >= 50 && rate < 70:
      color = "#90972c";
      break;
    case parseInt(rate) < 50:
      color = "#974c2c";
      break;
    default:
      break;
  }
  return (
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-red-900">
      <div
        className="w-[36px] h-[36px] rounded-full absolute"
        style={{
          background: `conic-gradient${color} 0% ${
            360 * rate * 0.01
          }deg, rgba(255, 255, 255, 0.1) ${360 * rate * 0.01}deg 360deg `,
        }}
      >
        <div className="w-[32px] h-[32px] bg-gray-900 rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-[50%] flex justify-center items-center text-[12px] text-white">
          {rate}
        </div>
      </div>
    </div>
  );
}

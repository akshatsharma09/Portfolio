"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function SplineModel({ className = "h-[540px] w-full" }) {
  return (
    <div className={`relative ${className}`}>
      <Spline scene="https://prod.spline.design/zZoyu8xEZ22wD2U1/scene.splinecode" />
    </div>
  );
}

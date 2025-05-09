import React from "react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-bold text-2xl tracking-tight ${className}`}>
      <img src="/images/ziva-shin-guard.png" alt="Ziva Logo" className="h-8 w-8 object-contain" />
      <span>ZIVA</span>
    </div>
  )
} 
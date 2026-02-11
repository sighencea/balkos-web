"use client";

import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
interface StatsStripProps {
  stats: StatItem[];
  theme?: 'dark' | 'light';
}
export default function StatsStrip({
  stats,
  theme = 'dark'
}: StatsStripProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(stats.map(() => 0));
  const stripRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (stripRef.current) {
      observer.observe(stripRef.current);
    }
    return () => observer.disconnect();
  }, [isVisible]);
  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedValues(stats.map(stat => Math.floor(stat.value * easeOutQuart(progress))));
      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(stats.map(stat => stat.value));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [isVisible, stats]);

  // Easing function for smooth animation
  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };
  const isDark = theme === 'dark';
  return <div ref={stripRef} className={`py-12 ${isDark ? 'bg-slate-950 border-t border-slate-800' : 'bg-slate-100 border-t border-slate-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => <div key={index} className={`text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className={`w-5 h-5 mr-2 ${isDark ? 'text-orange-500' : 'text-orange-600'}`} />
              </div>
              <div className={`text-5xl md:text-6xl font-bold mb-2 font-mono ${isDark ? 'text-orange-500' : 'text-orange-600'}`}>
                {stat.prefix}
                {animatedValues[index].toLocaleString('de-DE')}
                {stat.suffix}
              </div>
              <div className={`text-lg font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {stat.label}
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}
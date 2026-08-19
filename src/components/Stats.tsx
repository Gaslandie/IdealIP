"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/site";

function useCountUp(target: number, run: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setValue(target));
      return () => cancelAnimationFrame(frame);
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run, duration]);
  return value;
}

function Stat({ item, run }: { item: (typeof stats)[number]; run: boolean }) {
  const value = useCountUp(item.value, run);
  return (
    <li className="flex flex-col border-b border-ink-900/20 pb-6">
      <span className="text-[clamp(2.5rem,1.6rem+3.4vw,4rem)] font-semibold leading-none tracking-[-0.04em] tabular-nums">
        {value.toLocaleString("fr-FR")}
        <span className="text-gold-500">{item.suffix}</span>
      </span>
      <span className="mt-4 text-para-s font-semibold uppercase tracking-[0.1em]">
        {item.label}
      </span>
      <span className="mt-1 text-para-s text-ink-500">{item.note}</span>
    </li>
  );
}

export default function Stats() {
  const ref = useRef<HTMLUListElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul ref={ref} className="grid gap-x-10 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((s) => (
        <Stat key={s.label} item={s} run={run} />
      ))}
    </ul>
  );
}

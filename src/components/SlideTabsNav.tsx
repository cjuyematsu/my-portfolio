"use client";

import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SlideTabsNav = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md py-4 border-b border-blue-200">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        <Tab href="/" setPosition={setPosition}>Home</Tab>
        <Tab href="/projects/plottrip" setPosition={setPosition}>PlotTrip</Tab>
        <Tab href="/projects/hoopsdata" setPosition={setPosition}>HoopsData</Tab>
        <Tab href="/projects/gittempo" setPosition={setPosition}>GitTempo</Tab>
        <Tab href="/projects/marketforecast" setPosition={setPosition}>MarketForecast</Tab>
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

const Tab = ({
  children,
  href,
  setPosition,
}: {
  children: string;
  href: string;
  setPosition: Dispatch<SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10"
    >
      <Link
        href={href}
        className={`block cursor-pointer px-3 py-1.5 text-xs uppercase mix-blend-difference md:px-5 md:py-3 md:text-base ${
          isActive ? "text-black font-semibold hover:text-white" : "text-black hover:text-white font-medium"
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: Position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

type Position = {
  left: number;
  width: number;
  opacity: number;
};
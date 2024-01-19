"use client";
import ReactGA from "react-ga4";
import { usePathname } from 'next/navigation';

export function Ga4Init() {

  ReactGA.initialize("G-BYQBHJEHKF");
  return <div />;
}

export function Ga4SendPageview() {
    const pathname = usePathname();
     ReactGA.send({ hitType: "pageview", page: pathname})
    return <div />;
  }
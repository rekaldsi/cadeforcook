"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ACTBLUE_URL = "https://secure.actblue.com/donate/ncadewebsite";
const POLLING_LOCATOR_URL = "https://www.cookcountyclerk.com/service/election-information";

function usePrimaryDay() {
  const [isToday, setIsToday] = useState(false);
  useEffect(() => {
    const now = new Date();
    const primary = new Date("2026-03-17");
    setIsToday(
      now.getFullYear() === primary.getFullYear() &&
      now.getMonth() === primary.getMonth() &&
      now.getDate() === primary.getDate()
    );
  }, []);
  return isToday;
}

export function DonateButtonHero() {
  return (
    <a
      href={ACTBLUE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-red text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white shadow-lg"
    >
      Donate →
    </a>
  );
}

export function GetInvolvedButton() {
  return (
    <Link
      href="/get-involved"
      className="inline-block bg-white text-navy font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white border-2 border-white"
    >
      Get Involved
    </Link>
  );
}

export function StickyDonateBar() {
  const isToday = usePrimaryDay();
  const pathname = usePathname();

  if (pathname === "/get-involved") {
    return null;
  }

  if (isToday) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t-2 border-yellow-400 p-3">
        <a
          href={POLLING_LOCATOR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center font-bold py-3 rounded-lg transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white text-navy"
          style={{ backgroundColor: "#FFD700" }}
        >
          🗳️ VOTE TODAY — Find Your Polling Place
        </a>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-navy/20 p-3">
      <a
        href={ACTBLUE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-red text-white font-bold py-3 rounded-lg hover:bg-red/90 transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-white"
      >
        Donate to Nicholas Cade
      </a>
    </div>
  );
}

export { ACTBLUE_URL, POLLING_LOCATOR_URL };

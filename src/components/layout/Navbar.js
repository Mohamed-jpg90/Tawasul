"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import img from "../../imag/9433969339dc30ff23e7c765411625e87ebea061.png";
import sectorImg1 from "../../imag/sectorImag1.png";

import "./layout.css";
import Button from "../shared/Button";

export default function Navbar() {
  const sectors = [
    {
      sectorName: "الشركات الاستشارية",
      sectorImage: sectorImg1,
      sectorDetails:
        "حلول تساعد الشركات الاستشارية على إدارة العملاء والمشاريع والعمليات اليومية بشكل احترافي.",
      sectorLink: "/sectors/consulting",
    },
    {
      sectorName: "شركات البرمجة",
      sectorImage: sectorImg1,
      sectorDetails:
        "أنظمة متكاملة لإدارة المشاريع والعملاء والفرق التقنية ومتابعة مراحل التطوير.",
      sectorLink: "/sectors/programming",
    },
    {
      sectorName: "شركات التسويق",
      sectorImage: sectorImg1,
      sectorDetails:
        "حلول رقمية تساعدك على إدارة الحملات التسويقية وتحليل الأداء وتنظيم العملاء.",
      sectorLink: "/sectors/marketing",
    },
  ];

  const [activeSector, setActiveSector] = useState(sectors[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background/shadow state once user has scrolled a bit
      setIsScrolled(currentScrollY > 10);

      // Always show navbar near the top of the page
      if (currentScrollY < 80) {
        setIsHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Scrolling down -> hide, scrolling up -> show
      if (currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize back to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`containerNavBar ${isHidden ? "navHidden" : ""} ${
        isScrolled ? "navScrolled" : ""
      }`}
    >
      <div className="logoDiv">
        <Link href="/">
          <Image src={img} alt="Logo" width={150} height={60} priority />
        </Link>

        <button
          className="mobileMenuBtn"
          aria-label="فتح القائمة"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`linksDiv ${isMobileMenuOpen ? "linksDivOpen" : ""}`}>
        <ul>
          <li>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              من نحن
            </Link>
          </li>

          <li>
            <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
              الأسعار والباقات
            </Link>
          </li>

          <li className="sectorMenu">
            <Link href="#" onClick={() => setIsMobileMenuOpen(false)}>
              القطاعات
            </Link>

            <div className="sectorsPopup">
              <div className="sectorsList">
                {sectors.map((sector) => (
                  <div
                    key={sector.sectorName}
                    className={`sectorItem ${
                      activeSector.sectorName === sector.sectorName
                        ? "activeSector"
                        : ""
                    }`}
                    onMouseEnter={() => setActiveSector(sector)}
                    onClick={() => setActiveSector(sector)}
                  >
                     <Link href={sector.sectorLink} style={{color:"black"}} onClick={() => setIsMobileMenuOpen(false)} > {sector.sectorName}</Link>
                     
                  </div>
                ))}
              </div>

              <div className="sectorDetails">
                <Image
                  src={activeSector.sectorImage}
                  alt={activeSector.sectorName}
                  width={300}
                  height={160}
                />

                <h3>{activeSector.sectorName}</h3>

                <p>{activeSector.sectorDetails}</p>

                <Link
                  href={activeSector.sectorLink}
                  className="link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  معرفة المزيد
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              تواصل معنا
            </Link>
          </li>
        </ul>

        <div className="authDivMobile">
          <Button text="تسجيل الدخول" to="/login" primary={false} />
          <Button text="جرب مجاناً" to="/register" primary />
        </div>
      </div>

      <div className="authDiv">
        <Button text="تسجيل الدخول" to="/login" primary={false} />
        <Button text="جرب مجاناً" to="/register" primary />
      </div>
    </nav>
  );
}
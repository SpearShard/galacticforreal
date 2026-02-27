"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./team.module.css";
import MEMBERS from "./members";

export default function TeamPage() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 340;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Know Us Better</h1>

      <div className={styles.carouselWrapper}>
        <button 
          className={styles.arrowBtn} 
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <section ref={carouselRef} className={styles.carousel}>
          {MEMBERS.map((m) => (
            <Link key={m.id} href={`/team/${m.id}`} className={styles.cardLink}>
              <div className={styles.card}>
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className={styles.image}
                />

                <div className={styles.overlay}></div>

                <div className={styles.info}>
                  <p className={styles.role}>{m.role}</p>
                  <h3 className={styles.name}>{m.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <button 
          className={styles.arrowBtn} 
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  );
}

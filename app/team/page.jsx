"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./team.module.css";
import MEMBERS from "./members";
import INTERNS from "./interns";

export default function TeamPage() {
  const membersRef = useRef(null);
  const internsRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 340;
      ref.current.scrollBy({
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
          onClick={() => scroll(membersRef, "left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <section ref={membersRef} className={styles.carousel}>
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
          onClick={() => scroll(membersRef, "right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* interns section */}
      <h2 className={styles.subtitle}>Interns Working Here</h2>

      <div className={styles.carouselWrapper}>
        <button 
          className={styles.arrowBtn} 
          onClick={() => scroll(internsRef, "left")}
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        <section ref={internsRef} className={styles.carousel}>
          {INTERNS.map((i) => (
            <div key={i.id} className={styles.cardLink}>
              <div className={styles.card}>
                <Image
                  src={i.img}
                  alt={i.name}
                  fill
                  className={styles.image}
                />

                <div className={styles.overlay}></div>

                <div className={styles.info}>
                  <p className={styles.role}>{i.role}</p>
                  <h3 className={styles.name}>{i.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </section>

        <button 
          className={styles.arrowBtn} 
          onClick={() => scroll(internsRef, "right")}
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </main>
  );
}

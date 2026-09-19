import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logo = "/logo1_cropped.png";

// Duration of the exit animation. Keep the hand-off to the app in sync with it
// so the screen disappears the moment its fade-out completes.
const EXIT_MS = 580;

// "ZAYRON INFOTECH" split for staggered reveal
const WORD1 = "ZAYRON".split("");
const WORD2 = "INFOTECH".split("");

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  // Keep the latest onDone in a ref so the effect below can run exactly once.
  // (Previously the effect depended on `onDone`, an inline arrow recreated on
  //  every App render — any re-render during loading restarted the timer.)
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2700;

    const tick = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      // Ease-out that never saturates: the previous curve
      // (1-(1-t)^2.5) hit ~99% at t=0.87, so the bar appeared frozen for the
      // last ~0.9s. This keeps it visibly progressing until the final tick.
      const eased = Math.pow(t, 0.72);
      setProgress(t >= 1 ? 100 : Math.min(Math.round(eased * 100), 99));
      if (t >= 1) {
        clearInterval(tick);
        setExiting(true);
        window.setTimeout(() => onDoneRef.current(), EXIT_MS);
      }
    }, 16);

    const tagTimer = setTimeout(() => setTaglineVisible(true), 950);

    return () => { clearInterval(tick); clearTimeout(tagTimer); };
  }, []);

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -36 }}
          transition={{ duration: EXIT_MS / 1000, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "#FAFAF8", overflow: "hidden",
          }}
        >
          {/* ── TOP PROGRESS BAR ── */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 3, background: "rgba(0,0,0,0.06)",
            overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              background: "linear-gradient(90deg, #c9182f 0%, #E63946 55%, #ff7070 100%)",
              boxShadow: "0 0 14px rgba(230,57,70,0.65)",
              transform: `scaleX(${progress / 100})`,
              transformOrigin: "left",
              transition: "transform 0.09s linear",
              width: "100%",
            }} />
            {/* shimmer on the fill — pure transform, no layout */}
            <motion.div
              animate={{ x: ["-140%", "460%"] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.4 }}
              style={{
                position: "absolute", top: 0, left: 0,
                width: "22%", height: "100%",
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* ── LOGO + subtle ring ── */}
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }}
            style={{ position: "relative", marginBottom: 30 }}
          >
            {/* single slow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute", inset: -14, borderRadius: "50%",
                border: "1px solid rgba(230,57,70,0.18)",
                pointerEvents: "none",
              }}
            />
            {/* pulse glow */}
            <motion.div
              animate={{ scale: [1, 1.45, 1], opacity: [0.18, 0, 0.18] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: -6, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <img
              src={logo}
              alt="Zayron Infotech"
              style={{ height: 92, width: "auto", objectFit: "contain", display: "block", position: "relative", zIndex: 1 }}
            />
          </motion.div>

          {/* ── WORDMARK — letter-by-letter drop-in ── */}
          <div style={{
            display: "flex", alignItems: "baseline", gap: 0,
            fontFamily: "'Bodoni MT','Bodoni 72','Didot',serif",
            fontSize: "clamp(30px, 5.5vw, 52px)",
            fontWeight: 700,
            letterSpacing: "0.04em",
            marginBottom: 14,
            userSelect: "none",
          }}>
            {/* ZAYRON in black */}
            {WORD1.map((letter, i) => (
              <motion.span
                key={`w1-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.28 + i * 0.048, ease: [0.22, 1, 0.36, 1] }}
                style={{ color: "#111111", display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
            {/* spacer */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              style={{ display: "inline-block", width: "0.32em" }}
            />
            {/* INFOTECH in red */}
            {WORD2.map((letter, i) => (
              <motion.span
                key={`w2-${i}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.6 + i * 0.048, ease: [0.22, 1, 0.36, 1] }}
                style={{ color: "#E63946", display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* ── TAGLINE ── */}
          <AnimatePresence>
            {taglineVisible && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  margin: 0,
                  fontFamily: "'IBM Plex Mono','Courier New',monospace",
                  fontSize: 10,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: "#B0AFA8",
                }}
              >
                Products&nbsp;·&nbsp;Technology&nbsp;·&nbsp;Solutions
              </motion.p>
            )}
          </AnimatePresence>

          {/* ── BOTTOM RED ACCENT ── */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2.2, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
            style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              height: 2,
              background: "linear-gradient(90deg, transparent 0%, #E63946 35%, #ff7070 65%, transparent 100%)",
              transformOrigin: "left",
              pointerEvents: "none",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

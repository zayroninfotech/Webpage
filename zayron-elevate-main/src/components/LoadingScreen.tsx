import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logo = "/logo1_cropped.png";

export const LoadingScreen = ({ onDone }: { onDone: () => void }) => {
  const [loopKey, setLoopKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setLoopKey((k) => k + 1), 2200);
    const done = setTimeout(onDone, 2800);
    return () => {
      clearInterval(interval);
      clearTimeout(done);
    };
  }, [onDone]);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6"
      style={{ background: "#F7F7F5" }}
    >
      <style>{`
        @keyframes zlIfWipe { to { width: 100%; } }
        .zi-fill { animation: zlIfWipe 1.4s cubic-bezier(.65,0,.35,1) forwards; }
      `}</style>

      <motion.img
        src={logo}
        alt="Zayron Infotech"
        className="h-16 w-auto object-contain"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />

      {/* Ink-fill wordmark — re-mounts every 2.2 s to restart the wipe */}
      <div
        style={{
          position: "relative",
          fontFamily: "'Bodoni MT','Bodoni 72','Didot',serif",
          fontSize: "clamp(26px,4.5vw,44px)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          whiteSpace: "nowrap",
        }}
      >
        {/* Ghost base layer */}
        <span style={{ color: "#D3D3CF" }}>Zayron&nbsp;Infotech</span>

        {/* Ink fill layer */}
        <span
          key={loopKey}
          className="zi-fill"
          style={{
            position: "absolute",
            inset: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: 0,
          }}
        >
          <span style={{ color: "#111111" }}>Zayron&nbsp;</span>
          <span style={{ color: "#E63946" }}>Infotech</span>
        </span>
      </div>

      <p
        style={{
          fontFamily: "'IBM Plex Mono','Courier New',monospace",
          fontSize: "11px",
          letterSpacing: ".08em",
          textTransform: "uppercase",
          color: "#9B9B90",
          margin: 0,
        }}
      >
        Loading…
      </p>
    </motion.div>
  );
};

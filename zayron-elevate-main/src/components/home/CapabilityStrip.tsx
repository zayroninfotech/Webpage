const row1 = [
  "Application Development",
  "AI-Powered Platforms",
  "Quality Assurance",
  "Cybersecurity & Security Testing",
  "Digital Transformation",
  "SAP Solutions",
  "Enterprise Software",
  "Cloud Engineering",
];

const row2 = [
  "HRMS Software",
  "CSV Compliance",
  "Automation Testing",
  "Data Analytics",
  "Product Engineering",
  "Manual & Functional Testing",
  "IT Staffing & Consulting",
  "Software Architecture",
];

const Ticker = ({
  items,
  reverse = false,
  speed = 38,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) => {
  const doubled = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden">
      <div
        className="flex shrink-0 gap-0"
        style={{
          animation: `ticker-${reverse ? "rev" : "fwd"} ${speed}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0 gap-0">
            <span className="mx-4 px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-700 text-[13px] font-medium tracking-wide whitespace-nowrap hover:border-red-400 hover:text-red-600 hover:bg-red-50 transition-all duration-200 cursor-default select-none shadow-sm">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-red-400 shrink-0 opacity-50" />
          </div>
        ))}
      </div>

      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10" />

      <style>{`
        @keyframes ticker-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ticker-rev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export const CapabilityStrip = () => {
  return (
    <section className="bg-gray-50 py-10 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-7 px-4">
        <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase font-semibold text-red-500 mb-3">
          <span className="w-6 h-px bg-red-400" />
          Our Capabilities
          <span className="w-6 h-px bg-red-400" />
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Technology &amp; Business Solutions
        </h3>
        <p className="text-gray-500 text-[13px] leading-relaxed max-w-3xl mx-auto">
          We combine AI, enterprise technology, quality, security, and digital expertise to deliver scalable solutions that address complex business needs and accelerate digital transformation.
        </p>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-3">
        <Ticker items={row1} reverse={false} speed={36} />
      </div>

      {/* Row 2 — scrolls right */}
      <Ticker items={row2} reverse={true} speed={42} />
    </section>
  );
};

"use client";

export default function Logo() {
  return (
    <div className="logoWrapper">
      <svg
        width="42"
        height="42"
        viewBox="0 0 100 100"
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Hex */}
        <path
          d="M50 5 L90 27 L90 73 L50 95 L10 73 L10 27 Z"
          stroke="#00bfff"
          strokeWidth="2"
          fill="rgba(0,191,255,0.04)"
        />

        {/* Rotating Ring */}
        <circle
          cx="50"
          cy="50"
          r="28"
          stroke="#00bfff"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 6"
          opacity="0.9"
        />

        {/* Core Node */}
        <circle cx="50" cy="50" r="7" fill="#00bfff" />

        {/* Inner Cross */}
        <line x1="50" y1="15" x2="50" y2="40" stroke="#00bfff" strokeWidth="1" opacity="0.6" />
        <line x1="50" y1="60" x2="50" y2="85" stroke="#00bfff" strokeWidth="1" opacity="0.6" />
        <line x1="15" y1="50" x2="40" y2="50" stroke="#00bfff" strokeWidth="1" opacity="0.6" />
        <line x1="60" y1="50" x2="85" y2="50" stroke="#00bfff" strokeWidth="1" opacity="0.6" />

        {/* FIXED TEXT (VISIBLE NOW) */}
        <text
          x="50"
          y="54"
          textAnchor="middle"
          fontSize="10"
          fontWeight="bold"
          fill="#00bfff"
        >
          YC
        </text>
      </svg>

      <style jsx>{`
        .logoWrapper {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo {
          animation: spin 18s linear infinite;
          filter: drop-shadow(0 0 6px rgba(0, 191, 255, 0.5));
          cursor: pointer;
        }

        .logo:hover {
          filter: drop-shadow(0 0 14px rgba(0, 191, 255, 0.9));
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
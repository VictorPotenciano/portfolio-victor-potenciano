import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex" }}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" rx="6" fill="#0b0d10" />
          <polyline
            points="6,7 11,25 16,7"
            stroke="#e8e6e1"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <line
            x1="18.5"
            y1="7"
            x2="18.5"
            y2="25"
            stroke="#e8e6e1"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <rect
            x="18.5"
            y="7"
            width="7"
            height="10"
            rx="4"
            stroke="#e8e6e1"
            strokeWidth="3.5"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}

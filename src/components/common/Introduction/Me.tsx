import { useId, type SVGProps } from "react";
export default function Me(props: SVGProps<SVGSVGElement>) {
  const gradientId = useId();
  return (
    <svg
      width="258"
      height="259"
      viewBox="0 0 258 259"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse
        cx="129"
        cy="129.5"
        rx="129"
        ry="129.5"
        fill={"url(#" + gradientId + ")"}
      />
      <image
        href="/colnat-avatar.png"
        x="48"
        y="5.71826"
        width="165"
        height="223"
        preserveAspectRatio="xMidYMid meet"
      />
      <defs>
        <radialGradient
          id={gradientId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(129 129.5) rotate(90) scale(129.5 129)"
        >
          <stop offset="0.177083" stopColor="white" />
          <stop offset="1" stopColor="#434343" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

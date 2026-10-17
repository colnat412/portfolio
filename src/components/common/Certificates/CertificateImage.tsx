"use client";
import { useState } from "react";
import styles from "./Certificates.module.css";
interface CertificateImageProps {
  imageUrl?: string;
  title: string;
  note?: string;
}
function EmptyImage({
  title,
  note,
  unavailable = false,
}: {
  title: string;
  note?: string;
  unavailable?: boolean;
}) {
  return (
    <div
      className={styles.imageSlot + " " + styles.imageEmpty}
      role="img"
      aria-label={
        title +
        (unavailable
          ? ": image preview unavailable"
          : ": no certificate image added")
      }
    >
      <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
        <rect
          x="7"
          y="9"
          width="34"
          height="30"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="m9 33 10-9 7 6 6-5 7 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={styles.imageLabel}>Certificate image</span>
      <span className={styles.imageHint}>
        {unavailable ? "Preview unavailable." : note || "No image added yet."}
      </span>
    </div>
  );
}
function ImagePreview({
  imageUrl,
  title,
}: {
  imageUrl: string;
  title: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return <EmptyImage title={title} unavailable />;
  return (
    <a
      className={styles.imageSlot + " " + styles.preview}
      href={imageUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={"View " + title + " certificate image"}
    >
      <img
        src={imageUrl}
        alt={title + " certificate"}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
      <span className={styles.imageView}>
        View full image <span aria-hidden="true">&#8599;</span>
      </span>
    </a>
  );
}
export default function CertificateImage({
  imageUrl,
  title,
  note,
}: CertificateImageProps) {
  const source = imageUrl?.trim();
  return source ? (
    <ImagePreview key={source} imageUrl={source} title={title} />
  ) : (
    <EmptyImage title={title} note={note} />
  );
}

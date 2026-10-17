import CertificateImage from "./CertificateImage";
import { certificates } from "@/constants/data";
import { Reveal } from "../Motion";
import styles from "./Certificates.module.css";
function CertificateMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" fill="none">
      <path
        d="M12 8h24v25H12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M18 15h12M18 20h8M18 25h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="31"
        cy="31"
        r="6"
        fill="var(--portfolio-surface)"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m28 36-1 7 4-2 4 2-1-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default function Certificates() {
  return (
    <section
      className={"section-shell section-space " + styles.section}
      id="certificates"
      aria-labelledby="certificates-title"
    >
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / CERTIFICATES</p>
            <h2 id="certificates-title">
              Always learning.
              <br />
              <span>A little further.</span>
            </h2>
          </div>
          <p className="section-note">
            Certificates and credentials
            <br />
            from the things I keep learning.
          </p>
        </div>
        {certificates.length ? (
          <div className={styles.grid}>
            {certificates.map((certificate) => (
              <article className={styles.card} key={certificate.id}>
                <span className={styles.tape} aria-hidden="true" />
                <div className={styles.cardTop}>
                  <span className={styles.mark}>
                    <CertificateMark />
                  </span>
                  {certificate.score && (
                    <span className={styles.score}>{certificate.score}</span>
                  )}
                  {certificate.issuedAt && (
                    <p className={styles.date}>{certificate.issuedAt}</p>
                  )}
                </div>
                <h3>{certificate.title}</h3>
                {certificate.issuer && (
                  <p className={styles.issuer}>{certificate.issuer}</p>
                )}
                {certificate.credentialId && (
                  <dl className={styles.credential}>
                    <dt>Certification ID</dt>
                    <dd>{certificate.credentialId}</dd>
                  </dl>
                )}
                <CertificateImage
                  imageUrl={certificate.imageUrl}
                  title={certificate.title}
                  note={certificate.fileUrl ? undefined : certificate.note}
                />
                {(certificate.fileUrl || certificate.credentialUrl) && (
                  <div className={styles.actions}>
                    {certificate.fileUrl && (
                      <a
                        href={certificate.fileUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View certificate <span aria-hidden="true">&#8599;</span>
                      </a>
                    )}
                    {certificate.credentialUrl && (
                      <a
                        href={certificate.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Verify credential{" "}
                        <span aria-hidden="true">&#8599;</span>
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <span className={styles.emptyMark}>
              <CertificateMark />
            </span>
            <div>
              <p className={styles.emptyTitle}>Nothing pinned here yet.</p>
              <p>
                A small corner for my certificates, as the collection grows.
              </p>
            </div>
            <span className={styles.emptyDoodle} aria-hidden="true">
              &#10022;
            </span>
          </div>
        )}
      </Reveal>
    </section>
  );
}

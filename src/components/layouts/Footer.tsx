import { cn } from "@/libs/utils";
import { Reveal } from "../common/Motion";
export default function Footer({ className }: { className?: string }) {
  return (
    <footer id="contact" className={cn("site-footer", className)}>
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">04 / CONTACT</p>
          <h2>
            Your next build?
            <br />
            <a href="mailto:tanlocnguyendev@gmail.com">
              Let&apos;s team up <span aria-hidden="true">&#8599;</span>
            </a>
          </h2>
          <div className="contact-row">
            <p className="body-copy">
              Seeking remote, hybrid and on-site Software Engineer
              opportunities.
              <br />
              Let&apos;s discuss your team and the applications you are
              building.
            </p>
            <a
              className="contact-email"
              href="mailto:tanlocnguyendev@gmail.com"
            >
              tanlocnguyendev@gmail.com
            </a>
          </div>
        </Reveal>
        <div className="footer-bottom">
          <a className="wordmark" href="#home">
            colnat<span>.</span>
          </a>
          <p className="copyright">
            &#169; {new Date().getFullYear()} Colnat. All rights reserved.
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/tanlocnguyendev/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn &#8599;
            </a>
            <a
              href="https://github.com/colnat412"
              target="_blank"
              rel="noreferrer"
            >
              GitHub &#8599;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

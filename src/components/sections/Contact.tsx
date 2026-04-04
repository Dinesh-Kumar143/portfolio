import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/ui/ContactForm";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#f6f4f1]">
      <div className="max-w-[1200px] mx-auto px-13">
        <div className="grid grid-cols-2 gap-20 items-start max-md:grid-cols-1">

          {/* ── Left ── */}
          <div>
            <SectionLabel>06 — Get In Touch</SectionLabel>

            <h2 className="reveal font-serif text-[clamp(34px,4vw,54px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#0e0e0e] mb-4">
              Let&apos;s build
              <br />
              something great.
            </h2>

            <p className="reveal text-[15px] text-[#3a3a3a] leading-[1.8] mb-8">
              Currently open to work, including full-time opportunities, freelance projects, and collaborations. Feel free to reach out — I&apos;m always happy to connect.
            </p>

            {/* Contact info */}
            <div className="reveal flex flex-col gap-3 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-[15px] h-[15px]" fill="none" stroke="#c8622a" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  value: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: (
                    <svg className="w-[15px] h-[15px]" fill="none" stroke="#c8622a" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  value: personalInfo.phone,
                  href: `tel:${personalInfo.phone}`,
                },
                {
                  icon: (
                    <svg className="w-[15px] h-[15px]" fill="none" stroke="#c8622a" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  value: `${personalInfo.location} · Open to Remote`,
                  href: undefined,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3.5 text-[14px] text-[#3a3a3a]">
                  <div className="w-9 h-9 flex-shrink-0 bg-white border border-[#e4e0da] rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a href={item.href} className="hover:text-[#c8622a] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social buttons */}
            {/* <div className="reveal flex gap-2">
              {personalInfo.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] border border-[#e4e0da] rounded-md flex items-center justify-center text-[13px] font-bold font-serif text-[#6b6b6b] hover:bg-[#0e0e0e] hover:border-[#0e0e0e] hover:text-white transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.shortLabel}
                </a>
              ))}
            </div> */}
            <div className="reveal flex gap-2">
              {personalInfo.socials.map((s) => {
                // Icon mapping based on label
                const getIcon = () => {
                  switch (s.label.toLowerCase()) {
                    case 'github':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      );
                    case 'linkedin':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      );
                    case 'twitter':
                    case 'x':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      );
                    case 'email':
                      return (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      );
                    default:
                      return s.shortLabel; // Fallback to text
                  }
                };

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[38px] h-[38px] border border-[#e4e0da] rounded-md flex items-center justify-center text-[#6b6b6b] hover:bg-[#0e0e0e] hover:border-[#0e0e0e] hover:text-white transition-all duration-200"
                    aria-label={s.label}
                  >
                    {getIcon()}
                  </a>
                );
              })}
            </div>

          </div>

          {/* ── Right: Form ── */}
          <div className="reveal reveal-d1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
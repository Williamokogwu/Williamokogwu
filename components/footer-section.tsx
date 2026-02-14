import { Github, Linkedin, Mail, Twitter, Terminal } from "lucide-react"

export function FooterSection() {
  return (
    <footer id="contact" className="relative border-t border-border py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <div className="mb-16 text-center">
          <p className="font-mono text-sm text-primary mb-3">{"05. What's Next?"}</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4 text-balance">
            {"Let's Build Something Together"}
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground leading-relaxed mb-8">
            {"I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open."}
          </p>
          <a
            href="mailto:okogwuc@yahoo.com"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-mono text-sm font-medium text-primary-foreground transition-all hover:opacity-90 glow-sm"
          >
            <Mail className="h-4 w-4" />
            Say Hello
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-6 border-t border-border pt-8 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs">
              {/* {"William Okogwu © 2024. All rights reserved."} */}
              {/* {"Designed & Built by William Okogwu"} */}
            </span>
          </div>

          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: "https://github.com/Williamokogwu", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/chijioke-okogwu/", label: "LinkedIn" },
              // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              { icon: Mail, href: "mailto:okogwuc@yahoo.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <span className="font-mono text-[11px] text-muted-foreground/50">
            {"v2.0.26"}
          </span>
        </div>
      </div>
    </footer>
  )
}

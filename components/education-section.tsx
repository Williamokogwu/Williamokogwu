import { GraduationCap, Award, BookOpen } from "lucide-react"

const coursework = [
  "Data Structures and Algorithms",
  "Probability and Statistics",
  "Database Management Systems",
  "Software Engineering",
  "Assembly Language",
  "Cloud Computing",
  "Operating Systems",
]

const certifications = [
  {
    name: "COMPTIA Security+ (In Progress)",
    issuer: "COMPTIA",
    date: "Target: 2026",
  },
  {
    name: "COMPTIA A+ (In Progress)",
    issuer: "COMPTIA",
    date: "Target: 2026",
  },
  {
    name: "COMPTIA Windows Client Pro (In Progress)",
    issuer: "COMPTIA",
    date: "Target: 2026",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">{"04."}</span>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Education
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* University card */}
          <div className="glass rounded-xl p-8">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Massachusetts Institute of Technology
                </h3>
                <p className="mt-1 font-mono text-sm text-primary">
                  B.S. in Computer Science & Engineering
                </p>
              </div>
            </div>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary/50 px-4 py-3">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  GPA
                </p>
                <p className="mt-1 text-lg font-bold text-foreground">
                  3.12 / 4.0
                </p>
              </div>
              <div className="rounded-lg bg-secondary/50 px-4 py-3">
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  Graduation
                </p>
                <p className="mt-1 text-lg font-bold text-foreground">
                  May 2026
                </p>
              </div>
            </div>

            {/* Coursework */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Relevant Coursework
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications card */}
          <div className="glass rounded-xl p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  Certifications
                </h3>
                <p className="font-mono text-sm text-muted-foreground">
                  Professional credentials
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/30"
                >
                  <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {cert.issuer}
                      </span>
                      <span className="text-muted-foreground/30">|</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="mt-8 rounded-lg bg-primary/5 border border-primary/10 p-4">
              <p className="font-mono text-xs text-primary mb-2">
                {"// Notable achievements"}
              </p>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li>{"Dean's List"}</li>
                {/* <li>HackMIT Grand Prize Winner 2024</li>
                <li>Undergraduate Research Scholar</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

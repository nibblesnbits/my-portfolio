import React from "react";
import { softwareProjects } from "@/lib/data";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function SoftwareSection() {
  return (
    <section
      id="software"
      className="py-12 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-2xl font-bold text-center md:text-left">
              💻 Software
            </h2>
            <a
              href="https://github.com/junothreadborne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-blue-400 hover:underline text-center md:text-left"
            >
              github.com/junothreadborne
            </a>
          </div>
        </MotionWrapper>

        <div className="grid grid-cols-1 gap-6">
          {softwareProjects.map((project, index) => (
            <MotionWrapper key={project.title} delay={index * 0.15}>
              <GlassCard className="overflow-hidden dark:border-purple-500/10">
                <CardHeader className="bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-center md:text-left">
                      {project.title}
                    </CardTitle>
                    {project.featured ? (
                      <span className="text-xs uppercase tracking-wide text-[color:var(--accent)] bg-[color:var(--accent)]/10 px-3 py-1 rounded-full text-center md:text-left">
                        Featured Project
                      </span>
                    ) : null}
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Windows-native tools with a focus on clarity, speed, and
                    calm.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="list-disc ml-4 space-y-2 text-sm">
                    {project.description.map((line) => (
                      <li key={line} className="text-muted-foreground">
                        {line}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-t border-border/30 bg-gradient-to-r from-purple-500/5 to-pink-500/5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[color:var(--accent)] hover:text-[color:var(--foreground)] transition-colors"
                  >
                    {project.linkLabel}
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-[color:var(--foreground)] transition-colors"
                  >
                    View source on GitHub
                  </a>
                </CardFooter>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { mediumPosts } from "@/lib/data";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { GlassCard } from "./ui/glass-card";

export default function MediumSection() {
  return (
    <section
      id="medium"
      className="py-12 bg-gradient-to-b from-muted/10 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">
            📢 Published on Medium
          </h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {mediumPosts.map((post, index) => (
            <MotionWrapper key={post.title} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between h-full">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <div className="mr-2 text-xl">{post.icon}</div>
                    <h3 className="font-medium text-lg">{post.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {post.subtitle}
                  </p>
                </div>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-400 hover:underline mt-auto"
                >
                  Read on Medium →
                </a>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Project, projects } from '../app/lib/projects';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />

      {projects.map((project, index) => (
        <ProjectSection key={project.id} project={project} index={index} />
      ))}

      <footer className="py-20 bg-gray-50 text-center">
        <p className="text-sm text-gray-600">
          © 2024 Cole Uyematsu. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale }}
      className="h-screen flex flex-col items-center justify-center px-6 relative"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl font-bold text-gray-900 text-center mb-6"
      >
        Cole Uyematsu
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl text-gray-600 text-center max-w-2xl"
      >
        Full-Stack Developer
        <br />
        <span className="text-lg text-gray-500">CS & Math @ Pomona College &apos;26</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}

function ProjectSection({ project }: { project: Project; index: number }) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [showControls, setShowControls] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const videoScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.98, 1, 0.98]);

  useEffect(() => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = 2.0;

    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  const handleVideoClick = () => {
    setShowControls(true);
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity }}
      className="min-h-screen flex items-center py-10 px-6"
      transition={{ ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-8">
          <motion.div
            style={{ y }}
            transition={{ ease: "easeInOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {project.name}
            </h2>
          </motion.div>

          <motion.div
            style={{ scale: videoScale }}
            className="relative"
            transition={{ ease: "easeInOut" }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              {project.video ? (
                <video
                  ref={videoRef}
                  src={project.video}
                  className="w-full h-full object-contain cursor-pointer"
                  controls={showControls}
                  loop
                  muted
                  playsInline
                  autoPlay
                  poster={project.image}
                  onClick={handleVideoClick}
                />
              ) : project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Play className="w-5 h-5" />
                    <span className="text-sm">Video demo coming soon</span>
                  </div>
                </div>
              )}

              {!project.video && !project.image && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              )}
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>{project.duration}</span>
              {project.video && (
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Live demo</span>
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            transition={{ ease: "easeInOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                <span>Live</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl hover:border-gray-400 transition-colors font-semibold text-lg"
              >
                <Github className="w-5 h-5" />
                <span>Repo</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

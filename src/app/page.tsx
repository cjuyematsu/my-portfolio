"use client";

import { projects } from '../app/lib/projects';
import { ProjectCard } from '../components/ProjectCard';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-20 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Code2 className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
            Cole Uyematsu
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4">
            CS & Math @ Pomona College &apos;26
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Full-stack developer passionate about building intuitive, data-driven applications
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
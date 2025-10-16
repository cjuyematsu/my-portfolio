"use client";

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Calendar, Code2, Target, Lightbulb, Trophy } from 'lucide-react';
import { getProjectById } from '../../lib/projects';
import Link from 'next/link';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const project = getProjectById(params.id as string);

  if (!project) {
    return (
      <div className="pt-20 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl text-gray-600">Project not found</h1>
          <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = project.icon;

  return (
    <div className="pt-20 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          {/* Project Header */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{project.name}</h1>
                  <p className="text-gray-600 flex items-center space-x-2 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.duration}</span>
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all"
                  >
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all"
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600" />
                  </a>
                )}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Project Description */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
              <Code2 className="w-6 h-6 text-blue-600" />
              <span>Project Overview</span>
            </h2>
            <ul className="space-y-3">
              {project.description.map((desc, i) => (
                <li key={i} className="text-gray-700 flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span className="leading-relaxed">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Details if available */}
          {project.details && (
            <>
              {project.details.problem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Target className="w-6 h-6 text-blue-600" />
                    <span>Problem Statement</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{project.details.problem}</p>
                </motion.div>
              )}

              {project.details.solution && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                    <span>Solution</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{project.details.solution}</p>
                </motion.div>
              )}

              {project.details.features && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-blue-100 mb-8"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, i) => (
                      <li key={i} className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-3">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {project.details.outcome && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-blue-100"
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center space-x-2">
                    <Trophy className="w-6 h-6 text-blue-600" />
                    <span>Outcome</span>
                  </h2>
                  <p className="text-gray-700 leading-relaxed">{project.details.outcome}</p>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
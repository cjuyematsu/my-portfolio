"use client";

import Link from 'next/link';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '../app/lib/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon;
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <Icon className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-all duration-200"
            aria-label={`View ${project.name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-4 h-4 text-blue-600" />
          </a>
        )}
      </div>
      
      <p className="text-gray-600 text-sm mb-4 flex items-center space-x-2">
        <Calendar className="w-4 h-4" />
        <span>{project.duration}</span>
      </p>
      
      <ul className="space-y-2 mb-4 flex-grow">
        {project.description.slice(0, 2).map((desc, i) => (
          <li key={i} className="text-gray-700 text-sm leading-relaxed flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span>{desc}</span>
          </li>
        ))}
      </ul>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 4 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
            +{project.tech.length - 4} more
          </span>
        )}
      </div>
      
      <Link
        href={`/projects/${project.id}`}
        className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm group mt-auto"
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import { Project } from '../app/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {

  const borderColors = ['#00f0ff', '#ff00ff', '#ffff00'];
  const borderColor = borderColors[index % 3];

  const cornerColors = ['#00f0ff', '#ff00ff', '#ffff00', '#ff006e'];

  return (
    <div
      className="bg-[#1a1a2e] rounded-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:transform hover:scale-[1.02] relative"
      style={{
        border: `2px solid ${borderColor}`
      }}
    >
      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 z-20" style={{ backgroundColor: cornerColors[0] }}></div>
      <div className="absolute top-0.5 right-0.5 w-1.5 h-1.5 z-20" style={{ backgroundColor: cornerColors[1] }}></div>
      <div className="absolute bottom-0.5 left-0.5 w-1.5 h-1.5 z-20" style={{ backgroundColor: cornerColors[2] }}></div>
      <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 z-20" style={{ backgroundColor: cornerColors[3] }}></div>

      <div className="flex justify-between items-start p-5 pb-3">
        <div className="flex items-center space-x-2 flex-1">
          <h3 className="font-['Press_Start_2P'] text-xs text-[#f0f0f0] leading-tight">
            {project.name}
          </h3>
        </div>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 bg-[#0f0f1e] ml-2 flex-shrink-0 transition-opacity hover:opacity-70"
            style={{ border: `1px solid ${borderColor}` }}
            aria-label={`View ${project.name}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-3 h-3 text-[#a0a0b8]" />
          </a>
        )}
      </div>

      <div
        className="relative h-48 bg-gradient-to-br from-[#0f0f1e] to-[#252540] overflow-hidden"
        style={{
          borderBottom: `1px solid ${borderColor}`
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            className="object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : (
          <div></div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Duration */}
        <p className="font-['VT323'] text-base text-[#a0a0b8] mb-3 flex items-center space-x-2">
          <Calendar className="w-3 h-3" />
          <span>{project.duration}</span>
        </p>

        {/* View Project Link */}
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center justify-center space-x-2 font-['VT323'] text-base group mt-auto pt-3 transition-colors"
          style={{
            borderTop: `1px solid ${borderColor}`,
            color: borderColor
          }}
        >
          <span>View Project</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

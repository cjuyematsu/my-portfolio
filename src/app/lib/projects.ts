export interface Project {
  id: string;
  name: string;
  duration: string;
  description: string[];
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  video?: string;
  details?: {
    problem?: string;
    solution?: string;
    features?: string[];
    challenges?: string[];
    outcome?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'plottrip',
    name: 'PlotTrip',
    duration: 'July 2025 - August 2025',
    link: 'https://path-chronicle.vercel.app/login',
    image: '/projects/plottrip-preview.png',
    video: '/projects/plottrip-demo.mp4',
    github: 'https://github.com/cjuyematsu/PathChronicle',
    description: [
      'Building an interactive travel visualizer that plots trips on a 3D globe',
      'Supports multiple transportation modes (car, plane, train) with distance calculations',
      'Tracks countries visited and provides comprehensive trip statistics and analytics'
    ],
    tech: ['React', 'Three.js', 'TypeScript', 'Geospatial APIs'],
    details: {
      problem: 'Travelers lack a comprehensive way to visualize and track their journeys across different modes of transportation.',
      solution: 'Created an interactive 3D globe visualization that allows users to plot multi-modal trips and track travel statistics.',
      features: [
        '3D globe visualization using Three.js',
        'Multi-modal transportation support',
        'Automatic distance calculations',
        'Country tracking system',
        'Trip statistics dashboard'
      ],
      challenges: [
        'Implementing smooth 3D animations',
        'Calculating accurate geodesic distances',
        'Optimizing performance for complex trip data'
      ]
    }
  },
  {
    id: 'hoopsdata',
    name: 'Hoops Data',
    duration: 'May 2025 - July 2025',
    link: 'https://hoopsdata.net/',
    image: '/projects/hoopsdata-preview.png',
    video: '/projects/hoopsdata-demo.mp4',
    github: 'https://github.com/cjuyematsu/nbastats',
    description: [
      'Compiled career stats for all NBA players using Kaggle dataset of box scores',
      'Utilized BeautifulSoup to scrape additional online sources for complete database',
      'Built frontend with Next.js and hosted backend/database on Supabase',
      'Features include player comparison tool, all-time rankings, and trivia games'
    ],
    tech: ['Next.js', 'Supabase', 'TypeScript', 'Beautiful Soup', 'Tailwind CSS', 'SQL'],
    details: {
      problem: 'NBA statistics are scattered across multiple sources, making comprehensive player analysis difficult.',
      solution: 'Built a centralized platform aggregating all NBA player statistics with interactive tools.',
      features: [
        'Complete NBA player career statistics',
        'Player comparison tools',
        'All-time rankings system',
        'Interactive trivia games',
        'Advanced search and filtering'
      ],
      outcome: 'Successfully launched platform serving NBA statistics to fans with hundreds of monthly active users.'
    }
  },
  {
    id: 'aspc',
    name: 'ASPC Website',
    duration: 'Dec 2024 - Present',
    link: 'https://pomonastudents.org/',
    image: '/projects/ASPC-preview1.png',
    github: 'https://github.com/aspc/aspc-website-v2',
    description: [
      'Developing and maintaining the official website for Pomona College student government',
      'Building tools for academic planning and event management',
      'Implementing features to improve overall student experience'
    ],
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Express.js'],
    details: {
      problem: 'Students needed a centralized platform for academic planning and campus resources.',
      solution: 'Comprehensive web application serving the entire Pomona College student body.',
      features: [
        'Course planning tools',
        'Event management system',
        'Resource directory',
        'Student organization portal'
      ],
      outcome: 'Actively used by 1,700+ students for daily academic and campus life management.'
    }
  },
  {
    id: 'gittempo',
    name: 'GitTempo',
    duration: 'Apr 2025 - May 2025',
    link: 'https://gittempo.com/',
    image: '/projects/gittempo-preview.png',
    video: '/projects/gittempo-demo.mp4',
    github: 'https://github.com/cjuyematsu/GitTempo',
    description: [
      'Leveraged GitHub API to analyze commit patterns from public repositories',
      'Visualizes last 500 commits by contributor and recency',
      'Built with Next.js frontend and Chart.js for interactive data visualization'
    ],
    tech: ['Next.js', 'Chart.js', 'GitHub API', 'JavaScript'],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}
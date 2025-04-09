import { motion } from 'framer-motion';
import { Play, ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    role: string;
    description: string;
    techStack: string[];
    image?: string;
    videoUrl?: string;
    links?: {
      demo?: string;
      github?: string;
    };
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-8 rounded-xl hover:shadow-xl hover:shadow-primary-500/20 transition-all relative overflow-hidden"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-secondary-500/10 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.videoUrl && (
              <motion.a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors p-2 bg-gray-800/50 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
              </motion.a>
            )}
            {project.links?.demo && (
              <motion.a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors p-2 bg-gray-800/50 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
            {project.links?.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors p-2 bg-gray-800/50 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        )}

        <p className="text-primary-400 font-medium mb-3">{project.role}</p>
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium hover:bg-primary-500/20 transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
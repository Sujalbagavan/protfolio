import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Project {
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
}

interface ProjectCarouselProps {
  projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;
    if (newPage >= 0 && newPage < projects.length) {
      setPage([newPage, newDirection]);
    }
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="space-y-12"> {/* Added wrapper with spacing */}
      <div className="relative w-full h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-700/30 rounded-2xl overflow-hidden"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000) {
                paginate(1);
              } else if (swipe > 10000) {
                paginate(-1);
              }
            }}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
                >
                  {projects[page].title}
                </motion.h3>
                <div className="flex gap-3">
                  {projects[page].videoUrl && (
                    <motion.a
                      href={projects[page].videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors p-2 bg-gray-800/50 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-5 h-5" />
                    </motion.a>
                  )}
                  {projects[page].links?.demo && (
                    <motion.a
                      href={projects[page].links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors p-2 bg-gray-800/50 rounded-full"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>

              {projects[page].image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative h-64 mb-6 rounded-xl overflow-hidden"
                >
                  <img
                    src={projects[page].image}
                    alt={projects[page].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </motion.div>
              )}

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary-400 font-medium mb-3"
              >
                {projects[page].role}
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-300 mb-6 leading-relaxed"
              >
                {projects[page].description}
              </motion.p>

              <motion.div className="flex flex-wrap gap-2">
                {projects[page].techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-4 py-1.5 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          className="absolute left-4 p-3 rounded-full bg-gray-800/80 text-white border border-gray-700/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          style={{ opacity: page === 0 ? 0.5 : 1 }}
          disabled={page === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          className="absolute right-4 p-3 rounded-full bg-gray-800/80 text-white border border-gray-700/50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          style={{ opacity: page === projects.length - 1 ? 0.5 : 1 }}
          disabled={page === projects.length - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {projects.map((_, index) => (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full ${
                page === index ? 'bg-primary-400' : 'bg-gray-600'
              }`}
              onClick={() => setPage([index, index > page ? 1 : -1])}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>

     
    </div>
  );
}
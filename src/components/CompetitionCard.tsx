import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

interface CompetitionCardProps {
  competition: {
    title: string;
    date: string;
    achievement: string;
    details: string[];
    image?: string;
    reference?: string;
  };
  index: number;
}

export function CompetitionCard({ competition, index }: CompetitionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="group bg-gradient-to-br from-gray-800/50 to-gray-700/30 p-8 rounded-xl relative overflow-hidden"
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {competition.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-lg overflow-hidden"
          >
            <img
              src={competition.image}
              alt={competition.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        )}

        <h3 className="text-2xl font-bold text-primary-400 mb-3">{competition.title}</h3>
        
        <div className="flex items-center gap-2 text-gray-300 mb-2">
          <Calendar className="w-5 h-5" />
          <span>{competition.date}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-green-400 font-semibold mb-4"
        >
          <Award className="w-5 h-5" />
          <span>{competition.achievement}</span>
        </motion.div>

        <ul className="space-y-2 mb-4">
          {competition.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-2"
            >
              <CheckCircle className="w-5 h-5 text-primary-400 mt-1" />
              <span className="text-gray-300">{detail}</span>
            </motion.li>
          ))}
        </ul>

        {competition.reference && (
          <motion.a
            href={competition.reference}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mt-4 group"
            whileHover={{ x: 5 }}
          >
            <span>View Announcement</span>
            <ExternalLink className="w-4 h-4 transform group-hover:rotate-45 transition-transform" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
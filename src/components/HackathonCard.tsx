import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Users } from 'lucide-react';

interface HackathonCardProps {
  hackathon: {
    title: string;
    date: string;
    organizer: string;
    achievement?: string;
    achievements?: string[];
    team: string[];
    image?: string;
    reference?: string;
  };
  index: number;
}

export function HackathonCard({ hackathon, index }: HackathonCardProps) {
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
        {hackathon.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 rounded-lg overflow-hidden"
          >
            <img
              src={hackathon.image}
              alt={hackathon.title}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        )}

        <h3 className="text-2xl font-bold text-primary-400 mb-3">{hackathon.title}</h3>
        
        <div className="space-y-2 mb-4">
          <p className="text-gray-300">{hackathon.date}</p>
          <p className="text-gray-300">{hackathon.organizer}</p>
        </div>

        {hackathon.achievement && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-green-400 font-semibold mb-4"
          >
            <Trophy className="w-5 h-5" />
            <span>{hackathon.achievement}</span>
          </motion.div>
        )}

        {hackathon.achievements && (
          <ul className="space-y-2 mb-4">
            {hackathon.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <Trophy className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-gray-400 mb-4"
        >
          <Users className="w-5 h-5" />
          <span className="text-sm">Team: {hackathon.team.join(', ')}</span>
        </motion.div>

        {hackathon.reference && (
          <motion.a
            href={hackathon.reference}
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
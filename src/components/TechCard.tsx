import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  index: number;
  description?: string;
}

export function TechCard({ icon: Icon, name, index, description }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
        transition: { duration: 0.3, ease: "easeOut" } 
      }}
      className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl border border-gray-700/50 backdrop-blur-sm shadow-lg relative overflow-hidden group"
    >
      {/* Subtle background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon with subtle floating animation */}
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="relative z-10 bg-gray-800/80 p-4 rounded-xl shadow-inner mb-4 border border-gray-700/30"
      >
        <Icon className="w-12 h-12 text-primary-400" />
      </motion.div>
      
      {/* Name with highlight animation */}
      <motion.span 
        className="text-lg font-medium bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent mb-2"
        whileHover={{ 
          color: "#6ee7b7",
          transition: { duration: 0.2 }
        }}
      >
        {name}
      </motion.span>
      
      {/* Optional description */}
      {description && (
        <p className="text-sm text-gray-400 text-center mt-2 opacity-80">
          {description}
        </p>
      )}
    </motion.div>
  );
}
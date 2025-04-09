import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Play,
  Code2,
  Database,
  Globe,
  Trophy,
  User,
  Briefcase,
  GraduationCap,
  MapPin,
  ExternalLink,
  Award
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { TechCard } from './components/TechCard';
import { ProjectCarousel } from './components/ProjectCarousel';
import { HackathonCard } from './components/HackathonCard';
import { CompetitionCard } from './components/CompetitionCard';
import { Scene3D } from './components/Scene3D';
import { SplineBackground } from './components/SplineBackground';

const techStack = [
  { name: 'HTML', icon: Code2 },
  { name: 'CSS', icon: Code2 },
  { name: 'JavaScript', icon: Code2 },
  { name: 'React.js', icon: Code2 },
  { name: 'Node.js', icon: Code2 },
  { name: 'MongoDB', icon: Database },
  { name: 'Supabase', icon: Database },
  { name: 'Flutter', icon: Globe },
  { name: 'Automation', icon: Code2 }
];

const projects = [
  {
    title: 'NextIQz – Startup Buddy',
    role: 'MVP Developer (Internship)',
    description: 'Developed the Minimum Viable Product for a startup ecosystem platform offering news, events, and resources for aspiring founders.',
    techStack: ['flutter','adroied','ios'],
    image: '/nextiqz.png',
    videoUrl: 'https://drive.google.com/file/d/1EMyo0UP0o9tpirWLan6D4W1c-ivRLHEM/view?usp=sharing'
  },
  {
    title: 'CoinBoost',
    role: 'Developer',
    description: 'Built a game play and earn by reading news and completing samll task.',
    techStack:['flutter','adroied','ios'],
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://drive.google.com/file/d/1hMmI6BrJYFclbMNkZvewPCfD5TOps5Mv/view?usp=sharing'
  },
  {
    title: 'Weather App',
    role: 'Developer',
    description: 'Designed and developed a weather forecasting app showing real-time updates.',
    techStack: ['Flutter', 'OpenWeatherMap API'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://drive.google.com/file/d/1jiQXQBlNbIXj1-smjoRB4G32KvVGoqwQ/view?usp=sharing'
  },
  {
    title: 'full-stack Voting System',
    role: 'Team Member',
    description: 'Contributed to  intense 24-hour hackathon and built a full-stack Voting System from scratch, covering both admin and user panels—all deployed on Vercel.',
    techStack: ['MERN Stack', 'Gemini API', 'News Api'],
    image: '/voting.png',
    links: {
      demo: 'https://voting-system-app.vercel.app/',
      
    }
  }
];

const webDesignCompetitions = [
  {
    title: 'Intercollege Web Design Competition at KLE BCA Nipani',
    date: 'Approximately 8 months ago',
    achievement: '1st Place & General Championship',
    details: [
      'Team: One senior and one junior student',
      'Competed against 6 colleges (12 students each)',
      'First competition experience',
    ],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800',
    reference: '#'
  },
  {
    title: 'Web Design Competition at KLE BCA Mahalingpur',
    date: 'Approximately 8 months ago',
    achievement: '1st Place & General Championship',
    details: [
      'Round 1: 45 MCQs on web design',
      'Round 2: Built functional scholarship portal',
      'Enhanced practical web development skills'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
    reference: '#'
  }
];

const hackathons = [
  {
    title: 'CODEFIESTA 5.0 – National Level Hackathon',
    date: 'April 3-4, 2025',
    organizer: 'SKSV M. Angadi College of Engineering & Technology, Lakshmeshwar',
    achievement: 'Consolation Prize among 63 teams',
    team: ['Praveen Sadalagi', 'Sujal Bagavan', 'Darshan Jarale', 'Veeresh Hindiholi'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    reference: 'https://www.linkedin.com/posts/kle-bca-gokak-30747416b_klebcagokak-activity-7313904627735830528-0STR'
  },
  {
    title: 'TechNova IT Event',
    date: 'March 28-29, 2025',
    organizer: "KLE Society's College of BCA RLSI (Autonomous), Belagavi",
    achievements: [
      'General Championship (GC) – Overall Winners',
      'Hackathon – 2nd Place',
      'Multiple 2nd place wins in: Coding, Design, Tech Analysis'
    ],
    team: ['Ganesh Koparde', 'Prathamesh Renake', 'Praveen Sadalagi', 'Sujal Bagavan'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
  }
];

function App() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const subtitles = ['Web Developer', 'App Developer', 'MVP Builder', 'Hackathon Winner'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 text-white relative">
      <SplineBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15),transparent_50%)]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4 space-y-8 relative z-10"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-primary-400 bg-clip-text text-transparent animate-gradient">
            Hi, I'm Sujal
          </h1>
          <div className="h-12">
            <motion.p
              key={currentSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl text-primary-400"
            >
              {subtitles[currentSubtitle]}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/Sujalbagavan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={28} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/sujal-bagavan-186169297"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={28} />
            </motion.a>
            <motion.a
              href="mailto:sujalbagavan@gmail.com"
              className="p-3 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={28} />
            </motion.a>
            <motion.a
              href="tel:+919019844538"
              className="p-3 hover:text-primary-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={28} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <User className="text-primary-400" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                
              <p className="text-lg">Sujal Bagavan</p>
                <GraduationCap className="text-primary-400" size={24} />
                <p className="text-lg">KLE BCA College, Gokak</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary-400" size={24} />
                <p className="text-lg">Gokak, Karnataka, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Trophy className="text-primary-400" size={24} />
                <p className="text-lg">UiPath Developer Champion</p>
                <a href="/uipath.png" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary-400 hover:underline">
                  <ExternalLink size={16} />
                </a>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                A passionate Full Stack Developer with hands-on experience in building dynamic web and mobile applications.
                I've contributed to startups and freelanced on impactful projects, with a special focus on creating
                innovative solutions using modern technologies.
              </p>
            </div>
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className=" overflow-hidden border-4 border-primary-400/20"
              >
                <img
                  src="/uipath.png"
                  alt="UiPath Developer Champion"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Tech Stack Section */}
      <AnimatedSection className="py-20 px-4 md:px-20 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-primary-400" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <TechCard key={tech.name} {...tech} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection className="py-20 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-primary-400" />
            Projects
          </h2>
          <ProjectCarousel projects={projects} />
        </div>
      </AnimatedSection>

      {/* Web Design Competitions Section */}
      <AnimatedSection className="py-20 px-4 md:px-20 bg-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-primary-400" />
            Web Design Competitions
          </h2>
          <div className="grid gap-8">
            {webDesignCompetitions.map((competition, index) => (
              <CompetitionCard key={competition.title} competition={competition} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Hackathons Section */}
      <AnimatedSection className="py-20 px-4 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Trophy className="text-primary-400" />
            Hackathon Achievements
          </h2>
          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <HackathonCard key={hackathon.title} hackathon={hackathon} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Connection Section */}
      <AnimatedSection className="py-20 px-4 md:px-20 bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <p className="text-lg md:text-xl text-gray-300">
            Interested in collaborating? Let's connect and build something amazing together!{' '}
            <motion.a
              href="mailto:sujalbagavan@gmail.com"
              className="text-primary-400 hover:text-primary-300 inline-flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch <ExternalLink className="w-4 h-4" />
            </motion.a>
          </p>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default App;
import { motion } from "motion/react";
import FeaturedApp from "./FeaturedApp";
import MissionCard from "./MissionCard";
import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import DonateCard from "./DonateCard";
import SocialNewsletter from "./SocialNewsletter";
import { Zap, Globe, Layers, Sparkles } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function BentoGrid() {
  return (
    <main id="apps" className="px-6 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-5 gap-4"
      >
        <motion.div
          variants={itemVariants}
          className="md:col-span-4 md:row-span-2 bento-card flex flex-col md:flex-row gap-8 items-center overflow-hidden relative group"
        >
          <FeaturedApp />
        </motion.div>

        <motion.div variants={itemVariants} className="bento-card bg-brand-500/5 border-brand-500/20">
          <MissionCard />
        </motion.div>

        {/* <motion.div variants={itemVariants} className="bento-card">
          <StatsCard />
        </motion.div> */}

        {/* <motion.div variants={itemVariants} className="bento-card">
          <FeatureCard Icon={Zap} title="Lightweight" text="Zero bloat. Optimized for performance and battery life." />
        </motion.div> */}

        <motion.div variants={itemVariants} className="bento-card">
          <FeatureCard Icon={Globe} title="Cross-Platform" text="Consistent experience across macOS, Windows, and Linux." />
        </motion.div>

        <motion.div variants={itemVariants} className="bento-card">
          <FeatureCard Icon={Layers} title="Open Source" text="Transparent code. Contribute on GitHub anytime." />
        </motion.div>

        <motion.div variants={itemVariants} className="bento-card">
          <FeatureCard Icon={Sparkles} title="Ad-Free" text="No distractions. Just you and your productivity." />
        </motion.div>

        <motion.div variants={itemVariants} className="md:col-span-3 bento-card bg-brand-500/5 border-brand-500/20">
          <DonateCard />
        </motion.div>

        {/* <motion.div variants={itemVariants}>
          <SocialNewsletter />
        </motion.div> */}
      </motion.div>
    </main>
  );
}

import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Info = () => {
  // Optional: Use mouse position for subtle parallax (if desired)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden py-32 bg-black text-white">
      <Element name="How it works" className="container mx-auto px-6 relative">
        
        {/* Background Glow Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500 opacity-20 blur-3xl top-1/4 left-1/4 animate-pulse" />
          <div className="absolute w-80 h-80 bg-cyan-500 opacity-20 blur-3xl bottom-1/4 right-1/4 animate-pulse" />
        </div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-center mb-16 tracking-wide uppercase "
        >
          How <span className="text-blue-500 nav">Eagle Agents</span> Work
        </motion.h2>

        {/* Flowchart / Card Container */}
        <div className="relative flex flex-col items-center gap-12">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-6 bg-gray-900 rounded-lg shadow-lg border border-blue-500/50 w-3/4 text-center"
          >
            <h3 className="text-xl font-semibold text-blue-400"> Data Ingestion</h3>
            <p className="text-gray-300">
              Collects data from <strong>GSI portals, historical PDFs, satellite feeds</strong>.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-6 bg-gray-900 rounded-lg shadow-lg border border-cyan-500/50 w-3/4 text-center"
          >
            <h3 className="text-xl font-semibold text-cyan-400"> AI Processing</h3>
            <p className="text-gray-300">
              Runs <strong>OCR, NLP, and geoscience heuristics</strong> to extract insights.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-6 bg-gray-900 rounded-lg shadow-lg border border-purple-500/50 w-3/4 text-center"
          >
            <h3 className="text-xl font-semibold text-purple-400">Analyze</h3>
            <p className="text-gray-300">
              Analyzes data to <strong>generate probability maps</strong> for geological insights.
            </p>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative p-6 bg-gray-900 rounded-lg shadow-lg border border-green-500/50 w-3/4 text-center"
          >
            <h3 className="text-xl font-semibold text-green-400"> Real-time Refinement</h3>
            <p className="text-gray-300">
              Continuously updates insights as <strong>new data arrives</strong>.
            </p>
          </motion.div>
        </div>
      </Element>
    </section>
  );
};

export default Info;

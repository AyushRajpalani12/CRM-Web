import { motion } from "framer-motion";
import {Link} from "react-router-dom"
export default function BookDemoCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold"
        >
          Ready to See Nexa in Action?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-white/90"
        >
          Book a personalized demo and discover how our AI-powered modules can
          transform your business operations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
     <Link to="/bookdemo">
  <motion.button
    className="px-10 py-4 border-2 border-indigo-500 text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Request Demo
  </motion.button>
</Link>
        </motion.div>
      </div>
    </section>
  );
}

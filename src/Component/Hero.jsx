import { motion } from "framer-motion";
import heroVideo from "../assets/main.mp4"; // <-- your video
import { Link } from "react-router-dom";

const Button = ({ children, className = "", ...props }) => (
  <button
    {...props}
    className={`inline-flex items-center justify-center font-medium transition-all ${className}`}
  >
    {children}
  </button>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-14 px-6 py-28">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AI-Powered CRM <br /> for Retail & Service Businesses
          </h1>

          <p className="max-w-xl text-lg text-white/90">
            Manage customers, automate follow-ups, track sales, and grow your
            retail or service business faster with intelligent insights.
          </p>

          <div className="flex gap-4 pt-2">
            <Link to="/Bookdemo">
              <Button className="rounded-full bg-white px-8 py-3 text-slate-900 hover:scale-105 font-semibold">
                Book Demo
              </Button>
            </Link>

            <Button className="rounded-full border border-white/50 px-8 py-3 hover:bg-white hover:text-slate-900">
              Explore Features
            </Button>
          </div>
        </motion.div>

        {/* RIGHT VIDEO (replaces slider, UI unchanged) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
         <div className="relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.25)] h-[420px] md:h-[480px] overflow-hidden">

  {/* INNER WRAPPER (handles padding & clipping) */}
  <div className="absolute inset-4 rounded-2xl overflow-hidden bg-black">

    {/* VIDEO */}
    <video
      src={heroVideo}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-contain"
    />

    {/* OVERLAY CONTENT */}
    <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/40 backdrop-blur-md p-4 border border-white/10">
      <p className="text-sm text-white/90">
        Real-time dashboard · Smart follow-ups · AI insights
      </p>
    </div>

  </div>

</div>

        </motion.div>
      </div>
    </section>
  );
}

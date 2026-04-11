import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import { Link } from "react-router";
import BlogImg1 from "../assets/blog1.avif";
import BlogImg2 from "../assets/blog2.avif";

export const blogs = [
  {
    id: 1,
    title: "How high-end design boosts SaaS conversion by 200%",
    excerpt:
      "Discover the psychological triggers behind premium UI/UX and how they influence user decision-making.",
    image: BlogImg1,
    date: "April 10, 2026",
    readTime: "5 min read",
    category: "Design Strategy",
  },
  {
    id: 2,
    title: "Why React and Framer Motion are the duo for 2026",
    excerpt:
      "Explore why modern startups are ditching static sites for high-performance, animated web experiences.",
    image: BlogImg2,
    date: "April 08, 2026",
    readTime: "8 min read",
    category: "Development",
  },
];

const Blog = () => {
  return (
    <div className="pt-20 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block italic">
            Our Journal
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-none mb-8">
            Digital <span className="text-brand-blue">Insights.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[3rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900">
                  {post.category}
                </span>
              </div>
              <div className="p-10">
                <div className="flex gap-4 text-slate-400 text-[10px] font-bold uppercase mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 font-medium mb-8 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-3 font-black text-xs uppercase tracking-widest group/btn"
                >
                  Read More
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

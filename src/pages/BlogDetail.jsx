import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { blogs } from "./Blog";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogs.find((p) => p.id === Number(id));

  if (!post) return <div className="pt-40 text-center font-bold">Post not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#F8FAFF] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-xs uppercase tracking-widest mb-12 transition-all">
            <ArrowLeft size={16} /> Back to Journal
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-600 font-black text-xs uppercase tracking-[0.2em] mb-6 block italic">{post.category}</span>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-8">{post.title}</h1>
            <div className="flex items-center gap-6 border-t border-slate-200 pt-8">
               <div className="flex items-center gap-3">
                  <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full" alt="" />
                  <span className="text-sm font-black text-slate-900">Glowave Team</span>
               </div>
               <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                 <Calendar size={12} /> {post.date}
               </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.img 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          src={post.image} 
          className="w-full h-[500px] object-cover rounded-[3rem] mb-16 shadow-2xl shadow-blue-500/10" 
        />
        <article className="prose prose-lg max-w-none text-slate-600 font-medium leading-relaxed">
          <p className="text-xl text-slate-900 font-bold mb-8">{post.excerpt}</p>
          <div className="space-y-6">
            <p>High-end design is more than just aesthetics; it's a strategic tool for growth. When users encounter a premium interface, their trust in the brand increases instantly.</p>
            <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">Focus on User Experience</h2>
            <p>Modern SaaS companies are shifting towards interactive and motion-rich experiences. The combination of React and Framer Motion allows for fluid transitions that keep users engaged longer.</p>
          </div>
        </article>
        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-between items-center">
          <div className="flex gap-2">
            <span className="px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-400">#Design</span>
            <span className="px-4 py-2 bg-slate-50 rounded-full text-xs font-bold text-slate-400">#Growth</span>
          </div>
          <button className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest hover:text-blue-600 transition-colors">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Shreyasi,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happiest Birthday Shreyasi!!🎂
So actually this is the first tor bday te ami tor sathe tor pase achi.Haa hoyto ami kono gift dite parbona toke im very sorry for that but ei ta promise korte pari that your upma will always be with you at your side at your lowest he will always be there.. And i hope we will be making some great memories together 
Ar ha jai koris ar poris na jeno sobsomoy
Always stay blessed 💕 and bhalo thakis sobsomoy 

        </p>
        <p className="text-lg text-pink-600 font-semibold">
          ~Yours Upma
        </p>
      </motion.div>
    </div>
  );
};


export default Message;

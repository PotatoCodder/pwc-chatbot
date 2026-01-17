  'use client';

  import { useState, useRef, useEffect } from 'react';
  import { ArrowRight, Sparkles } from 'lucide-react';
  import { motion } from 'framer-motion';
  import { gsap } from 'gsap';
  import { useChatContext } from './chatContext';
  import Image from 'next/image';
  import logo from '../assets/images/logo.jpg';

  export default function HeroSection() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isAnimated, setIsAnimated] = useState(false);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const searchRef = useRef<HTMLDivElement | null>(null);
    const { openChatWithMessage } = useChatContext();

    useEffect(() => {
      // Prevent animation on repeated renders
      if (isAnimated) return;

      // Small delay to ensure DOM is ready
      const initTimeout = setTimeout(() => {
        const ctx = gsap.context(() => {
          const tl = gsap.timeline({ 
            defaults: { ease: 'power3.out' },
            onComplete: () => setIsAnimated(true)
          });

          // Set initial state immediately
          gsap.set(titleRef.current?.children || [], {
            y: 60,
            opacity: 0,
          });

          gsap.set(searchRef.current, {
            y: 30,
            opacity: 0,
          });

          // Animate
          tl.to(titleRef.current?.children || [], {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
          });

          tl.to(searchRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.6
          }, '-=0.3');
        });

        return () => ctx.revert();
      }, 50);

      return () => clearTimeout(initTimeout);
    }, []);

    const handleAskAI = () => {
      if (searchQuery.trim()) {
        openChatWithMessage(searchQuery.trim());
        setSearchQuery('');
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAskAI();
      }
    };

    return (
      <div className=" relative h-screen overflow-hidden bg-white flex items-center justify-center">
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 max-w-4xl">
          
          {/* Hero Content */}
          <div className="text-center">

            {/* Logo */}
            <Image src={logo} alt="PWC Logo" className="rounded-full mx-auto mb-6 w-32 h-32" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-red-50 text-red-700"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">24/7 AI-Powered Assistant</span>
            </motion.div>
            
            {/* Title */}
            <div ref={titleRef}>
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
                <div>Welcome to the</div>
                <div className="text-red-700 mt-2 font-bold">PWC Davao AI Assistant</div>
                <div className='text-black mt-2 font-bold'>YXA</div>
              </h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
            >
              Your intelligent guide to Philippine Women's College of Davao information, enrollment, and campus life.
            </motion.p>

            {/* Search Bar */}
            <div ref={searchRef} className="max-w-2xl mx-auto">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <input
                  type="text"
                  placeholder="Ask me anything about PWC Davao..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full px-6 py-5 pr-36 rounded-xl bg-gray-50 border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-700 transition-all text-base"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAskAI}
                  className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 rounded-lg bg-red-700 text-white font-medium flex items-center gap-2 hover:bg-red-800 transition-colors"
                >
                  Ask AI
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  }
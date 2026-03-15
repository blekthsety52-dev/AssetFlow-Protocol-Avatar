import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Shield, 
  Globe, 
  Code2, 
  Lock, 
  Zap, 
  ChevronDown, 
  ExternalLink,
  Layers,
  Terminal,
  Database
} from 'lucide-react';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Layers className="text-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-xl tracking-tighter text-white">ASSETFLOW</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
        <a href="#technical" className="hover:text-emerald-400 transition-colors">Technical</a>
        <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
      </div>
      <button className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-emerald-400 transition-colors">
        SECURE ACCESS
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6 tracking-widest uppercase">
          <Zap className="w-3 h-3" /> Genesis Beta Access Included
        </div>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9] mb-8">
          Own the Architecture of <span className="text-emerald-500">Future Liquidity.</span>
        </h1>
        <p className="text-xl text-white/60 mb-10 max-w-2xl leading-relaxed">
          The definitive cryptographic key for DeFi architects, Web3 developers, and cross-chain pioneers. Own the visual representation of the world's first polyglot DeFi engine.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
            Secure Your Genesis Avatar <ExternalLink className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 border border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            View Protocol Docs
          </button>
        </div>
      </motion.div>
    </div>
    
    {/* Glass Capsule Visualization Placeholder */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="absolute top-1/2 right-[-10%] translate-y-[-50%] hidden xl:block"
    >
      <div className="relative w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-emerald-500/20 blur-[120px] rounded-full" />
        <div className="relative w-full h-full border border-white/20 rounded-full backdrop-blur-3xl bg-white/5 flex items-center justify-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-48 h-48 bg-emerald-500 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.5)]">
              <Layers className="text-black w-24 h-24 -rotate-45" />
            </div>
            <div className="mt-12 font-mono text-emerald-400 text-lg tracking-[0.5em] font-bold">CORE_ENGINE</div>
          </div>
          {/* Decorative Lines */}
          <div className="absolute top-0 left-1/2 w-px h-full bg-white/10" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10" />
        </div>
      </div>
    </motion.div>
  </section>
);

const Transformation = () => (
  <section className="py-24 border-y border-white/5 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            From Static Art to <span className="text-emerald-500 italic">Protocol Power.</span>
          </h2>
          <p className="text-lg text-white/50 leading-relaxed mb-8">
            Most digital assets are just pixels. The AssetFlow Protocol Avatar is a high-utility, technical asset designed for those who build the future of finance.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {['Solidity', 'Rust', 'TypeScript', 'Python'].map((lang) => (
              <div key={lang} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/5">
                <Code2 className="w-5 h-5 text-emerald-500" />
                <span className="font-mono text-sm text-white/80">{lang}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-black group">
          <img 
            src="https://picsum.photos/seed/defi-tech/800/800" 
            alt="Protocol Visualization" 
            className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full border border-emerald-500/50 flex items-center justify-center bg-black/50 backdrop-blur">
                <Shield className="text-emerald-500 w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-bold">Glass Capsule Isolated</div>
                <div className="text-white/40 text-xs">Security Protocol v2.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Polyglot Core Visualization",
      description: "A high-fidelity 'glass capsule' render symbolizing the absolute isolation and security required for automated, cross-chain asset management."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Genesis Protocol Utility",
      description: "Holders gain immediate, exclusive access to the AssetFlow Protocol Beta. Your avatar acts as your unique identifier within our governance layer."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Chain Interoperability",
      description: "Designed for the architect who speaks EVM and the developer who builds in Rust. The visual bridge between liquidity pools and bridges."
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
            >
              <div className="text-emerald-500 mb-6">{f.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-white/50 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechnicalEdge = () => {
  const specs = [
    { label: "Protocol Type", value: "DeFi 2.0", icon: <Database className="w-4 h-4" /> },
    { label: "Engine", value: "Polyglot (Solidity, Rust, TS, Python)", icon: <Terminal className="w-4 h-4" /> },
    { label: "Security", value: "Glass Capsule Isolated", icon: <Lock className="w-4 h-4" /> },
    { label: "Rarity", value: "Genesis (001-500)", icon: <Zap className="w-4 h-4" /> },
    { label: "Utility", value: "Beta Access + Governance Weight", icon: <Layers className="w-4 h-4" /> }
  ];

  return (
    <section id="technical" className="py-24 bg-emerald-500/5 border-y border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">The Technical Edge</h2>
          <p className="text-white/40">Metadata & Attributes of the Genesis Collection</p>
        </div>
        <div className="grid gap-4 max-w-3xl mx-auto">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-center justify-between p-6 rounded-2xl border border-white/5 bg-black/40 backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="text-emerald-500">{spec.icon}</div>
                <span className="text-white/60 font-medium">{spec.label}</span>
              </div>
              <span className="text-white font-mono text-right">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <div className="text-emerald-500 mb-8 flex justify-center">
        {[1,2,3,4,5].map(i => <Zap key={i} className="w-6 h-6 fill-current" />)}
      </div>
      <blockquote className="text-3xl md:text-4xl font-medium text-white italic leading-tight mb-10">
        "The AssetFlow Avatar is the first time I've seen generative art actually represent the complexity of the code beneath it. It's a must-have for any serious Web3 architect."
      </blockquote>
      <div className="flex items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
          <Code2 className="text-emerald-500 w-6 h-6" />
        </div>
        <div className="text-left">
          <div className="text-white font-bold">Senior DeFi Engineer</div>
          <div className="text-white/40 text-sm">Lead Protocol Dev</div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "What is the \"Polyglot\" engine?",
      a: "It refers to our protocol's ability to execute smart contracts across multiple languages (Solidity, Rust, etc.), ensuring maximum interoperability between chains like Ethereum, Solana, and Cosmos."
    },
    {
      q: "How do I access the Beta?",
      a: "Once your purchase is verified via our License Service, you will receive a unique access token linked to your avatar's metadata."
    },
    {
      q: "Is there a secondary royalty?",
      a: "Yes, a 7.5% royalty (EIP-2981 compliant) is applied to all secondary sales to ensure the long-term funding and development of the AssetFlow Protocol."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/5">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                <ChevronDown className="w-5 h-5 text-emerald-500" /> {faq.q}
              </h3>
              <p className="text-white/50 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
          <Layers className="text-black w-5 h-5" />
        </div>
        <span className="font-mono font-bold text-xl tracking-tighter text-white uppercase">ASSETFLOW</span>
      </div>
      <p className="text-white/40 text-sm mb-8">
        © 2026 AssetFlow Protocol. All Rights Reserved. Built for the Decentralized Future.
      </p>
      <div className="flex justify-center gap-6 text-white/40 text-sm">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">Discord</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

const FinalCTA = () => (
  <section className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-emerald-500/10 blur-[150px] rounded-full translate-y-1/2" />
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
        Step Into the Core.
      </h2>
      <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
        Limited Genesis Mint: Only 500 Avatars Will Ever Be Created. Don't miss your chance to own a piece of DeFi history.
      </p>
      <button className="px-12 py-6 bg-white text-black text-xl font-bold rounded-2xl hover:bg-emerald-400 transition-all transform hover:scale-110 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
        Buy Now on Gumroad
      </button>
      <p className="mt-6 text-white/40 text-sm">
        Includes Instant License Verification & Beta Token Generation
      </p>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Transformation />
        <Features />
        <TechnicalEdge />
        <SocialProof />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

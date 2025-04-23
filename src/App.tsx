import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { getDefaultWallets, RainbowKitProvider, ConnectButton, darkTheme } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import './App.css';
import { motion } from 'framer-motion';

const projectId = 'YOUR_PROJECT_ID'; // You'll need to replace this with your WalletConnect project ID

const { chains, publicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Netto Mello',
  projectId,
  chains,
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors,
});

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          <main className="bg-black min-h-screen text-white">
            <div className="hero-grid min-h-screen w-full fixed inset-0 pointer-events-none" />
            {/* HERO */}
            <motion.section 
              className="relative text-center py-24 px-4 min-h-screen flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-8 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl -z-10" />
                <img 
                  src="https://res.cloudinary.com/dgyocpguk/image/upload/v1745381638/netto_____o9uhfs.png"
                  alt="Netto Mello Logo"
                  className="w-[488px] mx-auto drop-shadow-[0_0_25px_rgba(236,72,153,0.5)]"
                />
              </motion.div>
              
              <motion.h1 
                className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 title-glow mb-6"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Netto Mello
              </motion.h1>
              <motion.p 
                className="mt-6 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                >
                Web3. Estratégia. Automação.<br />A ponte entre o agora e o que vem depois.
              </motion.p>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="rainbow-btn"
              >
                <ConnectButton />
              </motion.div>

              <motion.div 
                className="mt-20 mb-10"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.img 
                  src="https://res.cloudinary.com/dgyocpguk/image/upload/v1744171421/pai_oficial_curvcd.png"
                  alt="Netto Mello Web3" 
                  className="w-64 mx-auto drop-shadow-[0_0_35px_rgba(236,72,153,0.4)]"
                  whileHover={{ 
                    scale: 1.05,
                    filter: "drop-shadow(0 0 40px rgba(236,72,153,0.6))"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </motion.section>

            {/* PROJETOS */}
            <section className="max-w-4xl mx-auto px-4 py-24">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    label: "FlowPay",
                    emoji: "⚡",
                    desc: "Pagamentos Web3 instantâneos",
                    link: "https://flowpay.cash",
                    img: "https://res.cloudinary.com/dgyocpguk/image/upload/v1741929004/FLOWPAY_g3yii4.png"
                  },
                  {
                    label: "Web3Brasil",
                    emoji: "⚡",
                    desc: "Canal de educação sobre descentralização e autocustódia",
                    link: "https://web3brasil.xyz/",
                    img: "https://res.cloudinary.com/dgyocpguk/image/upload/v1742176271/WEB_t5vblg.png"
                  },
                  {
                    label: "FlowHub",
                    emoji: "🧠",
                    desc: "Comunidade de marketing e automação",
                    link: "https://flowhub.space/",
                    img: "https://res.cloudinary.com/dgyocpguk/image/upload/v1744587467/hub2_bwvwov.png"
                  },
                  {
                    label: "FlowOFF",
                    emoji: "🎥",
                    desc: "Marketing na Web3",
                    link: "https://flowoff.xyz/",
                    img: "https://res.cloudinary.com/dgyocpguk/image/upload/v1742197795/avatar_i4k6hf.png"
                  }
                ].map((proj, i) => (
                  <motion.a
                    key={i}
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-black/50 backdrop-blur-sm border border-pink-500/30 rounded-xl p-6 hover:border-pink-500 transition-all shadow-[0_0_1rem_#ec489980] overflow-hidden relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * i }}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 2rem #ec4899' }}
                  >
                    {proj.img && (
                      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
                        <img src={proj.img} alt={proj.label} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {proj.emoji} {proj.label}
                      </h3>
                      <p className="text-gray-300">{proj.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>

            {/* RODAPÉ */}
            <motion.footer 
              className="text-center text-sm text-gray-600 pb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.img
                src="https://res.cloudinary.com/dgyocpguk/image/upload/v1742184224/NETTOFLOW293_o3ps8p.jpg"
                alt="Avatar ENS"
                className="w-14 h-14 rounded-full mx-auto mb-2 border-2 border-pink-500"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <p>@nettomello.eth — Powered by ENS & IPFS</p>
              <div className="mt-2 space-x-3 text-white/60">
                <a href="https://instagram.com/nettomello2" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://t.me/nettomello" target="_blank" rel="noreferrer">Telegram</a>
                <a href="https://x.com/nettomello" target="_blank" rel="noreferrer">X</a>
              </div>
            </motion.footer>
          </main>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiConfig>
  );
}

export default App;
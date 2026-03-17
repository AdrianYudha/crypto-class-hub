export interface Video {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  youtubeUrl?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Advanced";
  videos: Video[];
}

export const modulesData: Module[] = [
  {
    id: "mod-1",
    title: "Fundamental Blockchain",
    description: "Pahami dasar-dasar teknologi blockchain dari nol",
    level: "Beginner",
    videos: [
      { id: "v1", title: "Apa Itu Blockchain?", duration: "12:30", completed: true },
      { id: "v2", title: "Cara Kerja Konsensus", duration: "15:45", completed: true },
      { id: "v3", title: "Public vs Private Key", duration: "9:20", completed: false },
      { id: "v4", title: "Wallet & Keamanan Dasar", duration: "18:10", completed: false },
    ],
  },
  {
    id: "mod-2",
    title: "Trading Crypto 101",
    description: "Strategi entry dan exit untuk pemula",
    level: "Beginner",
    videos: [
      { id: "v5", title: "Membaca Candlestick Chart", duration: "20:00", completed: false },
      { id: "v6", title: "Support & Resistance", duration: "14:30", completed: false },
      { id: "v7", title: "Risk Management", duration: "16:45", completed: false },
      { id: "v8", title: "Stop Loss & Take Profit", duration: "11:20", completed: false },
    ],
  },
  {
    id: "mod-3",
    title: "DeFi Deep Dive",
    description: "Eksplorasi dunia Decentralized Finance",
    level: "Advanced",
    videos: [
      { id: "v9", title: "Apa Itu DeFi?", duration: "13:15", completed: false },
      { id: "v10", title: "Liquidity Pool Explained", duration: "22:00", completed: false },
      { id: "v11", title: "Yield Farming Strategy", duration: "19:30", completed: false },
      { id: "v12", title: "Impermanent Loss", duration: "17:40", completed: false },
    ],
  },
  {
    id: "mod-4",
    title: "NFT & Web3",
    description: "Memahami ekosistem NFT dan Web3",
    level: "Advanced",
    videos: [
      { id: "v13", title: "NFT Beyond Art", duration: "14:00", completed: false },
      { id: "v14", title: "Smart Contract Basics", duration: "25:10", completed: false },
      { id: "v15", title: "DAO & Governance", duration: "18:50", completed: false },
    ],
  },
  {
    id: "mod-5",
    title: "Technical Analysis Lanjutan",
    description: "Indikator dan pola chart profesional",
    level: "Advanced",
    videos: [
      { id: "v16", title: "Fibonacci Retracement", duration: "21:30", completed: false },
      { id: "v17", title: "Elliott Wave Theory", duration: "28:00", completed: false },
      { id: "v18", title: "Volume Profile Analysis", duration: "19:15", completed: false },
      { id: "v19", title: "Multi-Timeframe Strategy", duration: "23:45", completed: false },
    ],
  },
];

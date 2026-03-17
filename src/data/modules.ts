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
  {
    id: "mod-6",
    title: "Tokenomics & Valuasi",
    description: "Cara menilai value sebuah crypto project",
    level: "Advanced",
    videos: [
      { id: "v20", title: "Apa Itu Tokenomics?", duration: "14:20", completed: false },
      { id: "v21", title: "Supply & Demand Dynamics", duration: "17:30", completed: false },
      { id: "v22", title: "Vesting Schedule & Unlock", duration: "12:45", completed: false },
      { id: "v23", title: "Menilai Market Cap vs FDV", duration: "16:00", completed: false },
    ],
  },
  {
    id: "mod-7",
    title: "Keamanan Crypto",
    description: "Lindungi aset digital dari ancaman siber",
    level: "Beginner",
    videos: [
      { id: "v24", title: "Jenis-Jenis Scam Crypto", duration: "18:00", completed: false },
      { id: "v25", title: "Cara Amankan Wallet", duration: "13:30", completed: false },
      { id: "v26", title: "Hardware Wallet Guide", duration: "20:15", completed: false },
      { id: "v27", title: "Phishing & Social Engineering", duration: "11:40", completed: false },
    ],
  },
  {
    id: "mod-8",
    title: "Stablecoin & CBDC",
    description: "Memahami mata uang digital yang stabil",
    level: "Beginner",
    videos: [
      { id: "v28", title: "Apa Itu Stablecoin?", duration: "10:50", completed: false },
      { id: "v29", title: "USDT vs USDC vs DAI", duration: "15:20", completed: false },
      { id: "v30", title: "Algorithmic Stablecoin", duration: "19:00", completed: false },
      { id: "v31", title: "CBDC & Masa Depan Uang", duration: "14:10", completed: false },
    ],
  },
  {
    id: "mod-9",
    title: "Layer 2 & Scaling",
    description: "Solusi skalabilitas blockchain modern",
    level: "Advanced",
    videos: [
      { id: "v32", title: "Masalah Skalabilitas Blockchain", duration: "13:00", completed: false },
      { id: "v33", title: "Rollup: Optimistic vs ZK", duration: "22:30", completed: false },
      { id: "v34", title: "Lightning Network Bitcoin", duration: "16:45", completed: false },
      { id: "v35", title: "Polygon, Arbitrum & Optimism", duration: "18:20", completed: false },
    ],
  },
  {
    id: "mod-10",
    title: "Metaverse & GameFi",
    description: "Peluang di dunia virtual dan gaming blockchain",
    level: "Beginner",
    videos: [
      { id: "v36", title: "Apa Itu Metaverse?", duration: "12:00", completed: false },
      { id: "v37", title: "Play-to-Earn Explained", duration: "17:15", completed: false },
      { id: "v38", title: "In-Game NFT & Economy", duration: "14:50", completed: false },
    ],
  },
  {
    id: "mod-11",
    title: "Regulasi & Pajak Crypto",
    description: "Aspek hukum dan perpajakan aset kripto di Indonesia",
    level: "Beginner",
    videos: [
      { id: "v39", title: "Status Hukum Crypto di Indonesia", duration: "15:30", completed: false },
      { id: "v40", title: "Pajak atas Transaksi Crypto", duration: "13:20", completed: false },
      { id: "v41", title: "KYC & Compliance", duration: "10:45", completed: false },
      { id: "v42", title: "Regulasi Global Overview", duration: "18:00", completed: false },
    ],
  },
  {
    id: "mod-12",
    title: "On-Chain Analysis",
    description: "Analisis data blockchain untuk keputusan trading",
    level: "Advanced",
    videos: [
      { id: "v43", title: "Membaca Data On-Chain", duration: "20:00", completed: false },
      { id: "v44", title: "Whale Tracking", duration: "16:30", completed: false },
      { id: "v45", title: "Glassnode & Dune Analytics", duration: "22:15", completed: false },
      { id: "v46", title: "Network Value Indicators", duration: "14:40", completed: false },
    ],
  },
  {
    id: "mod-13",
    title: "Airdrop & Testnet Farming",
    description: "Strategi mendapatkan token gratis dari project baru",
    level: "Beginner",
    videos: [
      { id: "v47", title: "Apa Itu Airdrop?", duration: "9:30", completed: false },
      { id: "v48", title: "Cara Ikut Testnet", duration: "15:00", completed: false },
      { id: "v49", title: "Tools untuk Airdrop Hunter", duration: "12:20", completed: false },
      { id: "v50", title: "Menghindari Airdrop Scam", duration: "11:10", completed: false },
    ],
  },
  {
    id: "mod-14",
    title: "Portfolio Management",
    description: "Kelola portofolio crypto secara profesional",
    level: "Advanced",
    videos: [
      { id: "v51", title: "Diversifikasi Aset Crypto", duration: "14:00", completed: false },
      { id: "v52", title: "Rebalancing Strategy", duration: "17:45", completed: false },
      { id: "v53", title: "Dollar Cost Averaging (DCA)", duration: "11:30", completed: false },
      { id: "v54", title: "Tracking Tools & Dashboard", duration: "13:15", completed: false },
    ],
  },
  {
    id: "mod-15",
    title: "Crypto Psychology",
    description: "Menguasai mental dan emosi dalam trading",
    level: "Beginner",
    videos: [
      { id: "v55", title: "FOMO & FUD Explained", duration: "12:00", completed: false },
      { id: "v56", title: "Disiplin Trading", duration: "16:30", completed: false },
      { id: "v57", title: "Mengatasi Loss & Drawdown", duration: "14:20", completed: false },
      { id: "v58", title: "Mindset Investor Jangka Panjang", duration: "18:45", completed: false },
    ],
  },
];

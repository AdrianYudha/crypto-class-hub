import { motion } from "framer-motion";
import { Search, Menu, X, BookOpen, TrendingUp } from "lucide-react";
import { useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import ModuleSidebar from "@/components/ModuleSidebar";
import { modulesData as initialModules, type Video } from "@/data/modules";

const Index = () => {
  const [modules, setModules] = useState(initialModules);
  const [activeVideo, setActiveVideo] = useState<Video>(modules[0].videos[0]);
  const [activeModuleTitle, setActiveModuleTitle] = useState(modules[0].title);
  const [filter, setFilter] = useState<"all" | "Beginner" | "Advanced">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleVideoSelect = (video: Video, moduleTitle: string) => {
    setActiveVideo(video);
    setActiveModuleTitle(moduleTitle);
    setSidebarOpen(false);
  };

  const handleYoutubeUrlChange = (url: string) => {
    setModules((prev) =>
      prev.map((mod) => ({
        ...mod,
        videos: mod.videos.map((v) =>
          v.id === activeVideo.id ? { ...v, youtubeUrl: url } : v
        ),
      }))
    );
    setActiveVideo((prev) => ({ ...prev, youtubeUrl: url }));
  };

  const totalVideos = modules.reduce((sum, m) => sum + m.videos.length, 0);
  const completedVideos = modules.reduce(
    (sum, m) => sum + m.videos.filter((v) => v.completed).length, 0
  );
  const overallProgress = Math.round((completedVideos / totalVideos) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 z-50 bg-background/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 lg:px-6 h-14">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BookOpen size={16} className="text-primary" />
            </div>
            <h1 className="text-lg font-semibold tracking-tight">Vault Academy</h1>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <TrendingUp size={14} className="text-primary" />
              <span className="text-muted-foreground">Progress:</span>
              <span className="text-foreground font-medium tabular-nums">{overallProgress}%</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-xs text-muted-foreground tabular-nums">
              {completedVideos}/{totalVideos} video selesai
            </span>
          </div>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row h-[calc(100vh-3.5rem)]">
        {/* Video Area */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <VideoPlayer videoTitle={activeVideo.title} moduleTitle={activeModuleTitle} />

            {/* Video Info */}
            <div className="mt-6">
              <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                {activeModuleTitle}
              </p>
              <h2 className="text-2xl lg:text-4xl font-semibold text-foreground text-balance">
                {activeVideo.title}
              </h2>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-sm text-muted-foreground tabular-nums">
                  Durasi: {activeVideo.duration}
                </span>
                {activeVideo.completed && (
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    ✓ Selesai
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </main>

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:static inset-0 top-14 z-40 lg:z-auto
            w-full lg:w-80 xl:w-96 border-l border-border/50
            bg-background lg:bg-transparent
            transform transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]
            ${sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"}
            flex flex-col overflow-hidden
          `}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-border/50 space-y-3">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari video..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-secondary/50 border border-border/50 rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="flex gap-1">
              {(["all", "Beginner", "Advanced"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-all duration-200 ${
                    filter === f
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {f === "all" ? "Semua" : f}
                </button>
              ))}
            </div>
          </div>

          {/* Module List */}
          <div className="flex-1 overflow-y-auto scrollbar-hide p-2">
            <ModuleSidebar
              modules={modulesData}
              activeVideoId={activeVideo.id}
              onVideoSelect={handleVideoSelect}
              filter={filter}
              searchQuery={searchQuery}
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Index;

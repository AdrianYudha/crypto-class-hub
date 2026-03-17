import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Play, CheckCircle2, Clock } from "lucide-react";
import { useState } from "react";
import type { Module, Video } from "@/data/modules";

const transition = { type: "spring" as const, stiffness: 300, damping: 30 };

interface ModuleSidebarProps {
  modules: Module[];
  activeVideoId: string;
  onVideoSelect: (video: Video, moduleTitle: string) => void;
  filter: "all" | "Beginner" | "Advanced";
  searchQuery: string;
}

const ModuleSidebar = ({ modules, activeVideoId, onVideoSelect, filter, searchQuery }: ModuleSidebarProps) => {
  const [expandedModules, setExpandedModules] = useState<string[]>([modules[0]?.id]);

  const toggleModule = (id: string) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const filteredModules = modules.filter((mod) => {
    const matchesFilter = filter === "all" || mod.level === filter;
    const matchesSearch =
      !searchQuery ||
      mod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.videos.some((v) => v.title.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getModuleProgress = (mod: Module) => {
    const completed = mod.videos.filter((v) => v.completed).length;
    return Math.round((completed / mod.videos.length) * 100);
  };

  return (
    <div className="flex flex-col gap-1">
      {filteredModules.map((mod) => {
        const isExpanded = expandedModules.includes(mod.id);
        const progress = getModuleProgress(mod);

        return (
          <div key={mod.id} className="rounded-lg overflow-hidden">
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors duration-200 text-left"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                    mod.level === "Beginner" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-accent/10 text-accent"
                  }`}>
                    {mod.level}
                  </span>
                  <span className="text-muted-foreground text-xs tabular-nums">{mod.videos.length} video</span>
                </div>
                <h3 className="text-sm font-medium text-foreground truncate">{mod.title}</h3>
                {progress > 0 && (
                  <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                  </div>
                )}
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="ml-2 text-muted-foreground"
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={transition}
                  className="overflow-hidden"
                >
                  <div className="pb-2">
                    {mod.videos.map((video) => {
                      const isActive = video.id === activeVideoId;
                      return (
                        <motion.button
                          key={video.id}
                          onClick={() => onVideoSelect(video, mod.title)}
                          className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 relative ${
                            isActive
                              ? "bg-primary/5"
                              : "hover:bg-secondary/30"
                          }`}
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.15 }}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary"
                              transition={transition}
                            />
                          )}
                          <div className="flex-shrink-0">
                            {video.completed ? (
                              <CheckCircle2 size={16} className="text-accent" />
                            ) : isActive ? (
                              <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                                <Play size={8} className="text-primary ml-0.5" />
                              </div>
                            ) : (
                              <div className="w-4 h-4 rounded-full border border-muted-foreground/30" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm truncate ${
                              isActive ? "text-primary font-medium" : "text-foreground/80"
                            }`}>
                              {video.title}
                            </p>
                          </div>
                          <span className="text-xs text-muted-foreground tabular-nums flex items-center gap-1">
                            <Clock size={10} />
                            {video.duration}
                          </span>
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default ModuleSidebar;

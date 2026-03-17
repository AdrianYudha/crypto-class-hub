import { motion } from "framer-motion";
import { Play, Pause, Volume2, Maximize, SkipForward, SkipBack } from "lucide-react";
import { useState } from "react";

interface VideoPlayerProps {
  videoTitle: string;
  moduleTitle: string;
}

const VideoPlayer = ({ videoTitle, moduleTitle }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(35);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full aspect-video bg-card rounded-lg overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => !isPlaying && setShowControls(true)}
    >
      {/* Video placeholder with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center">
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/20 mb-4 mx-auto"
          >
            {isPlaying ? (
              <Pause size={32} className="text-primary" />
            ) : (
              <Play size={32} className="text-primary ml-1" />
            )}
          </motion.button>
          <p className="text-muted-foreground text-sm">Upload video Anda untuk mulai</p>
        </div>
      </div>

      {/* Controls overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: showControls ? 1 : 0 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-4 pt-16 backdrop-blur-[2px]"
      >
        {/* Progress bar */}
        <div className="mb-3 group/progress cursor-pointer">
          <div className="h-1 bg-muted rounded-full overflow-hidden group-hover/progress:h-1.5 transition-all">
            <motion.div
              className="h-full bg-primary rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg shadow-primary/30" />
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button className="text-foreground/60 hover:text-foreground transition-colors">
              <SkipBack size={18} />
            </button>
            <button className="text-foreground/60 hover:text-foreground transition-colors">
              <SkipForward size={18} />
            </button>
            <button className="text-foreground/60 hover:text-foreground transition-colors">
              <Volume2 size={18} />
            </button>
            <span className="text-xs text-muted-foreground tabular-nums">4:23 / 12:30</span>
          </div>
          <button className="text-foreground/60 hover:text-foreground transition-colors">
            <Maximize size={18} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VideoPlayer;

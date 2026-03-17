import { motion } from "framer-motion";
import { Play, Pause, Youtube, Link } from "lucide-react";
import { useState } from "react";

interface VideoPlayerProps {
  videoTitle: string;
  moduleTitle: string;
  youtubeUrl?: string;
  onYoutubeUrlChange?: (url: string) => void;
}

const extractYoutubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?\s]+)/,
    /youtube\.com\/shorts\/([^&?\s]+)/,
  ];
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
};

const VideoPlayer = ({ videoTitle, moduleTitle, youtubeUrl, onYoutubeUrlChange }: VideoPlayerProps) => {
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInput, setUrlInput] = useState("");

  const youtubeId = youtubeUrl ? extractYoutubeId(youtubeUrl) : null;

  const handleSubmitUrl = () => {
    if (urlInput.trim() && onYoutubeUrlChange) {
      onYoutubeUrlChange(urlInput.trim());
      setShowUrlInput(false);
      setUrlInput("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="relative w-full aspect-video bg-card rounded-lg overflow-hidden group"
    >
      {youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
          title={videoTitle}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center">
          <div className="text-center space-y-4">
            {showUrlInput ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center gap-3 px-4"
              >
                <Youtube size={40} className="text-primary/60" />
                <p className="text-sm text-muted-foreground">Paste link YouTube di bawah</p>
                <div className="flex gap-2 w-full max-w-md">
                  <input
                    type="text"
                    placeholder="https://youtube.com/watch?v=..."
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmitUrl()}
                    className="flex-1 bg-secondary/50 border border-border/50 rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
                    autoFocus
                  />
                  <button
                    onClick={handleSubmitUrl}
                    className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                  >
                    Simpan
                  </button>
                </div>
                <button
                  onClick={() => setShowUrlInput(false)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Batal
                </button>
              </motion.div>
            ) : (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowUrlInput(true)}
                  className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/20 mx-auto"
                >
                  <Play size={32} className="text-primary ml-1" />
                </motion.button>
                <button
                  onClick={() => setShowUrlInput(true)}
                  className="flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors mx-auto"
                >
                  <Link size={14} />
                  Tambahkan link YouTube
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Change URL button when video is loaded */}
      {youtubeId && (
        <button
          onClick={() => { setShowUrlInput(true); setUrlInput(youtubeUrl || ""); }}
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm text-foreground text-xs px-3 py-1.5 rounded-lg border border-border/50 hover:bg-background"
        >
          Ganti Video
        </button>
      )}
    </motion.div>
  );
};

export default VideoPlayer;

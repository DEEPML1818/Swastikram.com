// src/components/Media.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ✅ Local images must sit in src/components (or adjust path)
import media1 from "./media1.jpeg";
import media2 from "./media2.jpg";
import media3 from "./media3.jpeg";

type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  image?: string;
  platform: string;
  tags?: string;
};

export default function Media() {
  /** Static press clippings */
  const mediaArticles = [
    {
      title: "What hackathons really are",
      description: "Exploring the true nature and impact of hackathons.",
      publication: "The Star",
      image: media1,
      link: "https://www.thestar.com.my/news/education/2025/02/09/what-hackathons-really-are",
    },
    {
      title: "All for one",
      description: "Collaborative approaches and teamwork.",
      publication: "The Star",
      image: media2,
      link: "https://www.thestar.com.my/news/education/2025/05/04/all-for-one",
    },
    {
      title: "Secondary students say yes to ASEAN languages",
      description: "The importance of multilingual education in ASEAN.",
      publication: "The Star",
      image: media3,
      link: "https://www.thestar.com.my/news/nation/2025/05/01/secondary-students-say-yes-to-asean-languages",
    },
  ];

  const [posts, setPosts] = useState<MediumPost[]>([]);

  /** Medium RSS → JSON via rss2json */
  useEffect(() => {
    (async () => {
      try {
        const rssUrl = "https://medium.com/feed/@deepml1818";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
            rssUrl
          )}`
        );
        const data = await response.json();

        const mapped: MediumPost[] = data.items.map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          description: item.description?.replace(/<[^>]+>/g, "").slice(0, 200),
          image: item.thumbnail,
          platform: "Medium",
          tags: Array.isArray(item.categories)
            ? item.categories.join(" • ")
            : "",
        }));

        // clamp to first 12
        setPosts(mapped.slice(0, 9));
      } catch (err) {
        console.error("RSS fetch error:", err);
      }
    })();
  }, []);

  return (
    <section id="media" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            As Featured In
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Media coverage and publications
          </p>
        </motion.div>

        {/* Static Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 px-4">
          {mediaArticles.map((article, index) => (
            <motion.div
              key={article.title}
              className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <span className="text-primary font-bold text-base sm:text-lg">
                  {article.publication}
                </span>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {article.description}
                </p>
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                  whileHover={{ x: 5 }}
                >
                  Read Article
                  <ExternalLink className="ml-1 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Medium Feed */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 gradient-text px-4">
            Latest on Medium
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {posts.map((article, index) => (
              <motion.div
                key={article.link}
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {article.image && (
                  <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                        {article.platform}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <span className="text-xs text-muted-foreground bg-muted/20 rounded px-2 py-1 mb-2 inline-block">
                    {article.pubDate}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  {article.tags && (
                    <p className="text-xs text-secondary/80 mb-4 font-mono bg-secondary/10 rounded px-2 py-1 inline-block">
                      {article.tags}
                    </p>
                  )}
                  <motion.a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Read Article
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Media() {
  const mediaArticles = [
    {
      title: "What hackathons really are",
      description: "Exploring the true nature and impact of hackathons in the technology ecosystem.",
      publication: "The Star",
      image: "https://www.swastikram.com/images/media1.jpeg",
      link: "https://www.thestar.com.my/news/education/2025/02/09/what-hackathons-really-are",
    },
    {
      title: "All for one",
      description: "Collaborative approaches and teamwork in modern technology development.",
      publication: "The Star",
      image: "https://www.swastikram.com/images/media2.jpg",
      link: "https://www.thestar.com.my/news/education/2025/05/04/all-for-one",
    },
    {
      title: "Secondary students say yes to ASEAN languages",
      description: "The importance of multilingual education in the ASEAN region.",
      publication: "The Star",
      image: "https://www.swastikram.com/images/media3.jpeg",
      link: "https://www.thestar.com.my/news/nation/2025/05/01/secondary-students-say-yes-to-asean-languages",
    },
  ];

  const blogArticles = [
    {
      title: "Building an AI-Powered Honeypot Log Analyzer",
      description: "Transforming raw cybersecurity logs into compelling security narratives through advanced AI analysis and machine learning techniques.",
      platform: "Medium",
      link: "https://medium.com/@deepml1818/building-an-ai-powered-honeypot-log-analyzer-from-raw-logs-to-compelling-security-narratives-fae534fff9e1",
      tags: "AI • Cybersecurity • Python",
    },
    {
      title: "The Digital Dojo: AI-Powered Python Cyber Ranges",
      description: "Mastering offensive security through artificial intelligence and automated penetration testing environments.",
      platform: "Medium", 
      link: "https://medium.com/@deepml1818/the-digital-dojo-mastering-offensive-security-with-ai-powered-python-cyber-ranges-980ea317d4f9",
      tags: "AI • Security • Python",
    },
    {
      title: "Stock Buy-Sell-Hold Prediction Using CNN",
      description: "Deep dive into convolutional neural networks versus recurrent neural networks for financial market prediction and algorithmic trading.",
      platform: "Substack",
      link: "https://deepml1818.substack.com/p/stock-buy-sell-hold-prediction-using",
      tags: "ML • Finance • TensorFlow",
    },
  ];

  return (
    <section id="media" className="py-20 px-6 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">As Featured In</h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Media coverage and publications</p>
        </motion.div>

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
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3">
                  <span className="text-primary font-bold text-base sm:text-lg">{article.publication}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{article.description}</p>
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm touch-manipulation"
                  whileHover={{ x: 5 }}
                  data-testid={`link-media-${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Read Article
                  <ExternalLink className="ml-1 h-4 w-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 gradient-text px-4">Latest Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4">
            {blogArticles.map((article, index) => (
              <motion.div
                key={article.title}
                className="bg-card rounded-xl p-4 sm:p-6 border border-border touch-manipulation"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-base sm:text-lg font-bold mb-2">{article.title}</h4>
                <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{article.description}</p>
                {article.tags && (
                  <p className="text-xs text-secondary/80 mb-4 font-mono bg-secondary/10 rounded px-2 py-1 inline-block">
                    {article.tags}
                  </p>
                )}
                <motion.a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium text-sm touch-manipulation"
                  whileHover={{ x: 5 }}
                  data-testid={`link-blog-${article.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  Read on {article.platform} →
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="a-propos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              {t.about.title1}<br /><span className="text-accent">{t.about.title2}</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              {t.about.p1}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t.about.p2}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { value: "15+", label: t.about.stat1 },
              { value: "500+", label: t.about.stat2 },
              { value: "98%", label: t.about.stat3 },
            ].map((stat, i) => (
              <div key={i} className={`bg-background rounded-2xl p-8 text-center shadow-soft ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <div className="font-serif text-4xl text-accent mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-background rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow"
              >
                <h3 className="font-serif text-lg mb-3 text-primary">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

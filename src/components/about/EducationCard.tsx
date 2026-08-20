import { motion, Variants } from "framer-motion";
import { TranslationKeys } from "../../../typing";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  cardVariants: Variants;
  t: TranslationKeys;
}

const EducationCard = ({ cardVariants, t }: EducationCardProps) => {
  return (
    <motion.div variants={cardVariants}>
      <div className="max-w-6xl mx-auto bg-surface rounded-xl border border-line p-6 sm:p-10">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-5 h-5 text-accent" />
          <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
            {t.about.education.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.about.education.degrees.map((degree, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -3 }}
              className="relative rounded-lg bg-ink border border-line p-6 transition-colors duration-300 hover:border-accent/40"
            >
              <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2 border-accent rounded-tl-md" />
              <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-accent rounded-br-md" />

              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent mb-3">
                {degree.type}
              </p>
              <p className="font-display font-semibold text-foreground text-lg mb-2">
                {degree.name}
              </p>
              <p className="text-muted text-sm">{degree.institution}</p>
              <p className="font-mono text-xs text-muted mt-3">
                {degree.period}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;

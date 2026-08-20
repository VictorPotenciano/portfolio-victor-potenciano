import { motion, Variants } from "framer-motion";
import { CardContent } from "../ui/card";
import { TranslationKeys } from "../../../typing";

interface DescriptionCardProps {
  cardVariants: Variants;
  t: TranslationKeys;
}

const DescriptionCard = ({ cardVariants, t }: DescriptionCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="lg:col-span-2 bg-surface rounded-xl border border-line hover:border-accent/40 transition-colors duration-300 h-full"
    >
      <CardContent className="p-8 lg:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-6">
          # whoami
        </p>
        <div className="space-y-5">
          <p className="text-foreground/90 leading-relaxed text-base sm:text-lg first-letter:text-4xl first-letter:font-display first-letter:font-semibold first-letter:text-accent first-letter:float-left first-letter:mr-3">
            {t.about.description1}
          </p>
          <p className="text-muted leading-relaxed text-base">
            {t.about.description2}
          </p>
          <p className="text-muted leading-relaxed text-base">
            {t.about.description3}
          </p>
        </div>
      </CardContent>
    </motion.div>
  );
};

export default DescriptionCard;

import { motion, Variants } from "framer-motion";
import { CardContent } from "../ui/card";
import { CircleStar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { TranslationKeys } from "../../../typing";

interface CertificateCardProps {
  cardVariants: Variants;
  t: TranslationKeys;
}

const CertificateCard = ({ cardVariants, t }: CertificateCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-surface rounded-xl border border-line hover:border-accent/40 transition-colors duration-300 h-full flex flex-col"
    >
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex items-center gap-2 mb-6">
          <CircleStar className="w-5 h-5 text-accent" />
          <h3 className="font-display text-lg font-semibold text-foreground">
            {t.about.certificates.title}
          </h3>
        </div>
        <div className="space-y-4 flex-1">
          {t.about.certificates.items.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-2 text-foreground/90 hover:text-accent font-medium transition-colors duration-300"
              >
                <ExternalLink className="w-4 h-4 mt-1 shrink-0 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>{certificate.name}</span>
              </Link>
              <p className="font-mono text-xs text-muted mt-1 pl-6">
                {certificate.page}
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </motion.div>
  );
};

export default CertificateCard;

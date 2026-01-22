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
      className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-shadow duration-300 h-full"
    >
      <CardContent className="p-8 lg:p-10">
        <div className="prose prose-lg max-w-none">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-700 leading-relaxed text-lg mb-6 first-letter:text-5xl first-letter:font-bold first-letter:text-purple-600 first-letter:float-left first-letter:mr-3"
          >
            {t.about.description1}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-700 leading-relaxed text-lg mb-6"
          >
            {t.about.description2}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-gray-700 leading-relaxed text-lg"
          >
            {t.about.description3}
          </motion.p>
        </div>
      </CardContent>
    </motion.div>
  );
};

export default DescriptionCard;

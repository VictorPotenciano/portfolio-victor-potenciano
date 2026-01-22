import { motion, Variants } from "framer-motion";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { CircleStar } from "lucide-react";
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
      className="bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
    >
      <CardHeader className="mt-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CircleStar className="w-8 h-8 filter brightness-0 invert" />
          </div>
          <CardTitle className="text-xl lg:text-2xl font-bold text-gray-800">
            {t.about.certificates.title}
          </CardTitle>
        </motion.div>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <div className="text-center">
          {t.about.certificates.items.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="mb-4"
            >
              <Link
                href={certificate.url}
                className="text-purple-600 hover:text-purple-800 font-semibold hover:underline transition-colors duration-300"
              >
                {certificate.name}
              </Link>
              <p className="text-gray-600 mt-2">{certificate.page}</p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </motion.div>
  );
};

export default CertificateCard;

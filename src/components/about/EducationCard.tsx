import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { TranslationKeys } from "../../../typing";
import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  cardVariants: Variants;
  t: TranslationKeys;
}

const EducationCard = ({ cardVariants, t }: EducationCardProps) => {
  return (
    <motion.div variants={cardVariants}>
      <Card className="max-w-6xl mx-auto rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
        <CardHeader>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.4 }}
            viewport={{ amount: 0.3 }}
            className="text-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 filter brightness-0 invert" />
            </div>
            <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-800">
              {t.about.education.title}
            </CardTitle>
          </motion.div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.about.education.degrees.map((degree, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                viewport={{ amount: 0.3 }}
                className={`border-l-4 ${
                  index % 2 === 0
                    ? "border-purple-500 hover:bg-purple-50"
                    : "border-blue-500 hover:bg-blue-50"
                } pl-6 p-4 rounded-r-lg transition-colors duration-300`}
              >
                <p className="font-semibold text-gray-800 mb-1">
                  {degree.type}
                </p>
                <p
                  className={`font-bold ${
                    index % 2 === 0 ? "text-purple-600" : "text-blue-600"
                  } text-lg mb-2`}
                >
                  {degree.name}
                </p>
                <p className="text-gray-600 mb-1">{degree.institution}</p>
                <p className="text-sm text-gray-500">{degree.period}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationCard;

import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Briefcase, ChevronDown } from "lucide-react";
import { TranslationKeys } from "../../../typing";
import { useState } from "react";

interface ExperienceCardProps {
  cardVariants: Variants;
  t: TranslationKeys;
}

const ExperienceCard = ({ cardVariants, t }: ExperienceCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className="max-w-6xl mx-auto bg-gradient-to-br from-purple-600/10 to-blue-600/5 rounded-3xl shadow-2xl border border-gray-100/50 overflow-hidden">
        <CardHeader className="pt-8 sm:pt-10 pb-6 sm:pb-8 px-4 sm:px-8 md:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 180, delay: 0.3 }}
              viewport={{ once: false, amount: 0.4 }}
              className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg mb-4 sm:mb-6 ring-4 sm:ring-8 ring-purple-100/40"
            >
              <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </motion.div>

            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-700 via-blue-700 to-pink-700 bg-clip-text text-transparent px-4">
              {t.about.experience.title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="px-4 sm:px-6 md:px-12 lg:px-16 pb-8 md:pb-12 pt-6 md:pt-10 relative">
          {/* Línea vertical de timeline */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-purple-200 via-blue-200 to-pink-200 rounded-full transform md:-translate-x-1/2" />

          <div className="space-y-3 sm:space-y-4 relative">
            {t.about.experience.jobs.map((job, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    duration: 0.5,
                    type: "spring",
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative group"
                >
                  {/* Círculo en la línea */}
                  <div
                    className={`
                      absolute left-[19px] sm:left-[27px] md:left-1/2 
                      top-5 sm:top-6 
                      w-3 h-3 sm:w-4 sm:h-4 
                      rounded-full border-2 sm:border-4 border-white shadow-md 
                      transform -translate-x-1/2 
                      z-10 transition-all duration-300
                      ${index % 3 === 0 ? "bg-purple-500" : ""}
                      ${index % 3 === 1 ? "bg-blue-500" : ""}
                      ${index % 3 === 2 ? "bg-pink-500" : ""}
                    `}
                  />

                  <div
                    className={`bg-white rounded-2xl shadow-md border border-gray-100/80 transition-all duration-300 cursor-pointer
                      ${isExpanded ? "shadow-xl" : "hover:shadow-lg"}
                      ${
                        index % 2 === 0
                          ? "md:mr-[52%] md:pr-12"
                          : "md:ml-[48%] md:pl-12"
                      }`}
                    onClick={() => toggleExpand(index)}
                  >
                    {/* Header siempre visible */}
                    <div className="p-6 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col md:items-baseline md:gap-3 gap-2 mb-2">
                            <h3 className="font-bold text-lg md:text-xl text-gray-800">
                              {job.position}
                            </h3>
                            <span
                              className={`font-semibold text-sm whitespace-nowrap px-3 py-1 rounded-full w-fit
                                ${
                                  index % 3 === 0
                                    ? "bg-purple-100 text-purple-700"
                                    : index % 3 === 1
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-pink-100 text-pink-700"
                                }`}
                            >
                              {job.period}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap">
                            <p
                              className={`font-extrabold text-base tracking-tight
                              ${
                                index % 3 === 0
                                  ? "text-purple-600"
                                  : index % 3 === 1
                                  ? "text-blue-600"
                                  : "text-pink-600"
                              }`}
                            >
                              {job.company}
                            </p>
                            <span className="text-gray-500">•</span>
                            <p className="text-gray-600 text-sm">
                              {job.location}
                            </p>
                          </div>
                        </div>

                        {/* Icono de expansión */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                            ${
                              index % 3 === 0
                                ? "bg-purple-100"
                                : index % 3 === 1
                                ? "bg-blue-100"
                                : "bg-pink-100"
                            }`}
                        >
                          <ChevronDown
                            className={`w-5 h-5
                              ${
                                index % 3 === 0
                                  ? "text-purple-600"
                                  : index % 3 === 1
                                  ? "text-blue-600"
                                  : "text-pink-600"
                              }`}
                          />
                        </motion.div>
                      </div>
                    </div>

                    {/* Descripción expandible */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? "auto" : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {job.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;

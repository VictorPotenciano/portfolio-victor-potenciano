import { BadgeCheck, Bolt, LayoutDashboard, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { TechnologyCategory } from "../../../typing";
import { useLanguage } from "@/context/LanguajeContext";

interface TechnologiesCardProps {
  technology: TechnologyCategory;
  containerVariants: Variants;
  cardItemVariants: Variants;
}

const TechnologiesCard = ({
  technology,
  containerVariants,
  cardItemVariants,
}: TechnologiesCardProps) => {
  const { language } = useLanguage();
  // Función para mapear el nivel a color
  const getLevelColor = (level: string) => {
    if (language === "es") {
      switch (level) {
        case "Intermedio":
          return "text-purple-600";
        case "Básico":
          return "text-blue-600";
        case "Experto":
          return "text-emerald-600";
        default:
          return "text-gray-600";
      }
    }
    // Niveles en inglés
    else {
      switch (level) {
        case "Intermediate":
          return "text-purple-600";
        case "Beginner":
          return "text-blue-600";
        case "Expert":
          return "text-emerald-600";
        default:
          return "text-gray-600";
      }
    }
  };
  // Función para mapear el icono segun la tecnologia
  const getTechnologyAvatar = (avatar: string) => {
    switch (avatar) {
      case "layout":
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="w-8 h-8 text-white" />
          </div>
        );
      case "server":
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Server className="w-8 h-8 text-white" />
          </div>
        );
      case "tools":
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Bolt className="w-8 h-8 text-white" />
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <LayoutDashboard className="w-8 h-8 text-white" />
          </div>
        );
    }
  };
  return (
    <Card className="flex flex-col h-full bg-white rounded-2xl shadow-xl border border-gray-100 bg-gradient-to-br from-purple-600/10 to-blue-600/5 hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="text-center"
        >
          {getTechnologyAvatar(technology.avatar)}
          <motion.div variants={cardItemVariants}>
            <CardTitle className="text-2xl font-bold text-gray-800">
              {technology.title}
            </CardTitle>
          </motion.div>
        </motion.div>
      </CardHeader>
      <CardContent>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {technology.items.map((tech, techIndex) => (
            <motion.article
              key={techIndex}
              variants={cardItemVariants}
              whileHover={{ scale: 1.03 }}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring" }}
              >
                <BadgeCheck className="w-6 h-6 mr-3 flex-shrink-0" />
              </motion.div>
              <div>
                <h3 className="font-semibold text-gray-800">{tech.name}</h3>
                <p className={`text-sm ${getLevelColor(tech.level)}`}>
                  {tech.level}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default TechnologiesCard;

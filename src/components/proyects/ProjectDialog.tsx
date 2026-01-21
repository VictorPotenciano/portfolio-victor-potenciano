import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  LayoutDashboard,
  Sparkles,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TranslationKeys } from "../../../typing";
import { Button } from "../ui/button";

interface ProjectCardProps {
  selectedProject: number | null;
  setSelectedProject: React.Dispatch<React.SetStateAction<number | null>>;
  t: TranslationKeys;
}

const ProjectDialog = ({
  selectedProject,
  setSelectedProject,
  t,
}: ProjectCardProps) => {
  return (
    <Dialog
      open={selectedProject !== null}
      onOpenChange={() => setSelectedProject(null)}
    >
      <DialogContent
        className="max-w-4xl max-h-[85vh] overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 border-2 border-purple-200/50 shadow-2xl p-0"
        aria-describedby={undefined}
      >
        {selectedProject !== null && (
          <div className="overflow-y-auto max-h-[calc(85vh-2rem)] px-1">
            <DialogHeader className="sticky top-0 backdrop-blur-sm z-10 pb-6 mb-2">
              <div className="flex items-start gap-5 pt-5 px-5">
                <motion.div
                  className="relative w-16 h-16 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0"
                  whileHover={{ rotate: 8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LayoutDashboard className="w-8 h-8 text-white" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </motion.div>

                <div className="flex-1">
                  <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 bg-clip-text text-transparent mb-2">
                    {t.projects.projects[selectedProject].name}
                  </DialogTitle>

                  {t.projects.projects[selectedProject].inDevelopment && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge className="bg-gradient-to-r from-yellow-500 via-orange-500 to-orange-600 text-white shadow-md hover:shadow-lg transition-shadow border-0 px-3 py-1">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {t.projects.inDevelopment || "En desarrollo"}
                      </Badge>
                    </motion.div>
                  )}
                </div>
                <DialogClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-black hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-700 hover:to-blue-600 cursor-pointer"
                    onClick={() => setSelectedProject(null)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </DialogClose>
              </div>
            </DialogHeader>

            <motion.div
              className="space-y-8 pb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {/* Descripción */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-purple-100/50">
                <div className="space-y-4">
                  <p className="text-gray-800 leading-relaxed text-lg font-medium">
                    {t.projects.projects[selectedProject].description1}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {t.projects.projects[selectedProject].description2}
                  </p>
                </div>
              </div>

              {/* Tecnologías */}
              <div className="bg-gradient-to-br from-purple-50/50 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-purple-100/50">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-1 h-6 bg-gradient-to-b from-purple-600 to-blue-600 rounded-full"></div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {t.projects.techUsed}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {t.projects.projects[selectedProject].technologies.map(
                    (technology, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          className={`${technology.color} text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-default border-0`}
                        >
                          {technology.name}
                        </Badge>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                {t.projects.projects[selectedProject].url && (
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={t.projects.projects[selectedProject].url!}
                      className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:from-purple-700 hover:via-purple-800 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-purple-400/30"
                    >
                      <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      {t.projects.button}
                    </Link>
                  </motion.div>
                )}

                {t.projects.projects[selectedProject].code && (
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={t.projects.projects[selectedProject].code!}
                      className="group inline-flex items-center justify-center w-full bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white px-8 py-4 rounded-xl font-bold hover:from-gray-900 hover:via-black hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-gray-700/50"
                    >
                      <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                      {t.projects.code}
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, LayoutDashboard } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { TranslationKeys } from "../../../typing";

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
        className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gradient-to-br from-purple-600/10 to-blue-600/5 bg-white"
        aria-describedby={undefined}
      >
        {selectedProject !== null && (
          <>
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <LayoutDashboard className="w-7 h-7 text-white" />
                </motion.div>
                <DialogTitle className="text-3xl font-bold text-gray-800">
                  {t.projects.projects[selectedProject].name}
                </DialogTitle>
              </div>
            </DialogHeader>

            <div className="space-y-6">
              {t.projects.projects[selectedProject].inDevelopment && (
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  {t.projects.inDevelopment || "En desarrollo"}
                </Badge>
              )}

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  {t.projects.projects[selectedProject].description1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.projects.projects[selectedProject].description2}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  {t.projects.techUsed}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {t.projects.projects[selectedProject].technologies.map(
                    (technology, techIndex) => (
                      <Badge
                        key={techIndex}
                        className={`${technology.color} text-white px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {technology.name}
                      </Badge>
                    )
                  )}
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 pt-4">
                {t.projects.projects[selectedProject].url && (
                  <Link
                    href={t.projects.projects[selectedProject].url!}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {t.projects.button}
                  </Link>
                )}

                {t.projects.projects[selectedProject].code && (
                  <Link
                    href={t.projects.projects[selectedProject].code!}
                    className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    {t.projects.code}
                  </Link>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDialog;

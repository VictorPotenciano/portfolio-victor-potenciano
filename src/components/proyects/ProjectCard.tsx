import { ExternalLink, Github, LayoutDashboard } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project, TranslationKeys } from "../../../typing";

interface ProjectCardProps {
  project: Project;
  t: TranslationKeys;
}

const ProjectCard = ({ project, t }: ProjectCardProps) => {
  return (
    <Card className="bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-600/10 to-blue-600/5">
      {/* Movil/Tablet: Layout vertical */}
      <div className="flex flex-col lg:hidden p-6 gap-4">
        {/* Header con icono y título */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0 hover:rotate-12 hover:scale-110 transition-transform duration-300">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-gray-800 mb-2 break-words">
              {project.name}
            </h3>
            {project.inDevelopment && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                {t.projects.inDevelopment || "En desarrollo"}
              </Badge>
            )}
          </div>
        </div>

        {/* Descripción completa */}
        <p className="text-gray-700 leading-relaxed break-words">
          {project.description1}
        </p>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-3">
          {project.url && (
            <Link
              href={project.url}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {t.projects.button}
            </Link>
          )}

          {project.code && (
            <Link
              href={project.code}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Github className="w-4 h-4 mr-2" />
              {t.projects.code}
            </Link>
          )}
        </div>
      </div>

      {/* Desktop: Layout horizontal */}
      <div className="hidden lg:flex items-center justify-between p-6 gap-4">
        {/* Información básica */}
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0 hover:rotate-12 hover:scale-110 transition-transform duration-300">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 break-words">
              {project.name}
            </h3>
            <p className="text-gray-700 leading-relaxed break-words">
              {project.description1}
            </p>
            {project.inDevelopment && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mt-2">
                {t.projects.inDevelopment || "En desarrollo"}
              </Badge>
            )}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-3 shrink-0">
          {project.url && (
            <Link
              href={project.url}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {t.projects.button}
            </Link>
          )}

          {project.code && (
            <Link
              href={project.code}
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-4 h-4 mr-2" />
              {t.projects.code}
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

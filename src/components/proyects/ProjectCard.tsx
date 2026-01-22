import {
  ExternalLink,
  Github,
  LayoutDashboard,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Project, TranslationKeys } from "../../../typing";

interface ProjectCardProps {
  project: Project;
  t: TranslationKeys;
  onClick?: () => void;
}

const ProjectCard = ({ project, t, onClick }: ProjectCardProps) => {
  return (
    <Card
      className="relative bg-white border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-600/10 to-blue-600/5 group cursor-pointer hover:border-purple-300 hover:-translate-y-1 active:translate-y-0"
      onClick={onClick}
    >
      {/* Indicador de click para móvil/tablet */}
      <div className="absolute top-4 right-4 lg:hidden flex items-center justify-center w-10 h-10 rounded-full md:bg-gradient-to-r md:from-purple-500 md:to-blue-500 text-purple-500 md:text-white md:shadow-lg">
        <ChevronRight className="w-5 h-5" />
      </div>

      {/* Movil/Tablet */}
      <div className="flex flex-col lg:hidden p-6 gap-4">
        {/* Header con icono y título */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0 hover:rotate-12 hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2 break-words group-hover:text-purple-700 transition-colors">
                {project.name}
              </h3>
            </div>
            {project.inDevelopment && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                {project.inDevelopment}
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
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              <Github className="w-4 h-4 mr-2" />
              {t.projects.code}
            </Link>
          )}
        </div>
      </div>

      {/* Ordenador */}
      <div className="hidden lg:flex items-center justify-between p-6 gap-4">
        {/* Información básica */}
        <div className="flex items-start gap-4 flex-1">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shrink-0 hover:rotate-12 hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold text-gray-800 mb-2 break-words group-hover:text-purple-700 transition-colors flex items-center gap-2">
                {project.name}
                <ChevronRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed break-words">
              {project.description1}
            </p>
            {project.inDevelopment && (
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white mt-2">
                {project.inDevelopment}
              </Badge>
            )}
          </div>
        </div>

        {/* Botones */}
        <div className="flex gap-3 shrink-0">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
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
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-700 text-white px-4 py-2 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Github className="w-4 h-4 mr-2" />
              {t.projects.code}
            </Link>
          )}

          <button
            onClick={onClick}
            className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-700 px-6 py-2 rounded-full font-semibold hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 border border-purple-200 group-hover:border-purple-300 cursor-pointer"
          >
            <span>Ver detalles</span>
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Efecto overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-transparent to-transparent group-hover:from-purple-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />

      {/* Indicador de borde animado */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-purple-200 transition-all duration-300 pointer-events-none" />
    </Card>
  );
};

export default ProjectCard;

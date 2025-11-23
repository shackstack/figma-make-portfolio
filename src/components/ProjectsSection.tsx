"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { useState } from "react";
import { PROJECTS_DATA } from "./data/projects";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS_DATA)[0] | null
  >(null);

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);
  const otherProjects = PROJECTS_DATA.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for web development
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                className="group bg-black/50 border-white/10 overflow-hidden hover:border-emerald-500/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <motion.a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    {project.company && (
                      <p className="text-gray-500 text-sm mt-1">
                        {project.company} • {project.period}
                      </p>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.achievements && (
                    <div className="mb-4 space-y-2">
                      <p className="text-emerald-400 text-sm">주요 성과</p>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-gray-400 text-sm flex items-start"
                          >
                            <span className="text-emerald-400 mr-2 mt-1">
                              •
                            </span>
                            <span className="flex-1">
                              {typeof achievement === "string"
                                ? achievement
                                : achievement.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl text-white text-center mb-8">
            Other Projects
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className="group bg-black/30 border-white/10 hover:border-white/30 transition-all duration-300 h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center text-white hover:bg-emerald-500 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-3"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-900 border-white/20">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <DialogTitle className="text-3xl text-white">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedProject.company} • {selectedProject.period}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg text-emerald-400 mb-3">
                    프로젝트 개요
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Achievements */}
                {selectedProject.achievements &&
                  selectedProject.achievements.length > 0 && (
                    <div>
                      <h4 className="text-lg text-emerald-400 mb-4">
                        주요 성과 및 기여
                      </h4>
                      <div className="space-y-6">
                        {selectedProject.achievements.map(
                          (achievement, idx) => {
                            if (typeof achievement === "string") {
                              return (
                                <div
                                  key={idx}
                                  className="text-gray-300 flex items-start"
                                >
                                  <span className="text-emerald-400 mr-3 mt-1 text-lg">
                                    •
                                  </span>
                                  <span className="flex-1">{achievement}</span>
                                </div>
                              );
                            }

                            return (
                              <div
                                key={idx}
                                className="bg-gray-800/50 rounded-lg p-5 border border-white/10"
                              >
                                <h5 className="text-white mb-3">
                                  {achievement.title}
                                </h5>
                                <div className="space-y-3">
                                  <div>
                                    <p className="text-red-400 text-sm mb-1">
                                      문제 상황
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                      {achievement.problem}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-blue-400 text-sm mb-1">
                                      해결 방법
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                      {achievement.solution}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="text-emerald-400 text-sm mb-1">
                                      결과
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                      {achievement.result}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}

                {/* Technologies */}
                <div>
                  <h4 className="text-lg text-emerald-400 mb-3">기술 스택</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <Button
                    asChild
                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
                  >
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

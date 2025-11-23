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

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const projects = [
    {
      title: "크리에이터 클럽",
      company: "라텔앤드파트너즈",
      period: "2025.01 ~ 진행중",
      description:
        '예술업계 종사자들을 위한 채용 플랫폼 앱인 "크리에이터클럽" 개발에 WebView 개발을 담당하였습니다. 개발 환경 설정, 기능 개발, 배포 파이프라인 구축 등의 작업을 했습니다.',
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Tanstack Query",
        "Vite",
        "OpenAPI TS",
        "Emotion",
        "Swiper",
        "Storybook",
      ],
      achievements: [
        {
          title:
            "쿼리파라미터, 브릿지, 스킴 등을 활용한 앱과 웹뷰 간 통신 방식 설계 및 개발",
          problem:
            "웹뷰 마운트 방식에 따라 화면이 달라지는 문제가 있었고, 앱과 웹 간 데이터 통신을 위한 표준화된 방식이 필요했습니다.",
          solution:
            "브릿지 구조를 직접 설계하여 인가 코드 및 이미지 등의 데이터를 안정적으로 주고받을 수 있도록 구현했습니다. 쿼리 파라미터를 활용한 렌더링 로직으로 마운트 방식 문제를 해결했고, 외부 웹브라우저에서 앱으로 이동해야 하는 경우에는 스킴 기반 라우팅 체계를 도입했습니다.",
          result:
            "네이티브(Android/iOS) 개발자와 웹 개발자가 공통 규약을 바탕으로 협업할 수 있게 되었고, 신규 기능 추가 시 개발 속도와 유지보수 효율이 크게 향상되었습니다.",
        },
        {
          title: "OpenAPI TypeScript을 활용한 타입 동기화 자동화 시스템 구축",
          problem:
            "백엔드 API 스키마 업데이트 시 백엔드 팀에서 알려주지 않는 이상 변경점을 감지하기 어려웠고, 매번 수동으로 타입을 수정해야 하는 비효율이 있었습니다.",
          solution:
            "OpenAPI 스키마 기반의 타입 자동 생성 시스템을 구축했습니다. 주기적으로 배치를 돌려 타입을 동기화하도록 설정했습니다.",
          result:
            "스키마 변경 시 PR 리드 타임을 평균 30분에서 9분으로 단축(약 70%)했습니다.",
        },
        {
          title:
            "Google Spreadsheet API를 활용한 스크립트 개발로 카피라이트 수정 자동화",
          problem:
            "사업 초기 단계에서 마케팅 카피 문구가 자주 변경되어, 매번 수동으로 배포를 반복해야 하는 비효율이 있었습니다.",
          solution:
            "Google Spreadsheet API를 활용해 스프레드 시트에서 관리되는 문구를 동기화하는 스크립트를 구현했습니다.",
          result:
            "기획팀이 직접 문구를 관리할 수 있어 개발 리소스 투입이 80% 이상 절감되었습니다.",
        },
        {
          title:
            "sendBeacon API를 활용한 웹뷰 인스턴스 제거 시 유저 체류시간 로깅",
          problem:
            "sendBeacon API를 활용해 웹뷰 종료 시점을 서버에 기록하도록 구현했으나, iOS 환경에서는 visibilitychange 이벤트가 발생하기 전에 인스턴스가 메모리에서 해제되어 요청의 90% 이상이 실패했습니다.",
          solution:
            "인스턴스 해제 시점에 약 1초의 지연(grace period)을 두는 방식을 적용했습니다.",
          result: "요청 성공률을 100%까지 개선할 수 있었습니다.",
        },
        {
          title: "S3 + CloudFront 배포 환경 및 Bitbucket Pipelines 자동화 구축",
          problem:
            "앱 내 브라우저 캐싱 정책 때문에 캐시 무효화 후에도 최신 컨텐츠가 반영되지 않는 문제가 있었습니다.",
          solution:
            "max-age=0 설정으로 브라우저 캐시를 차단하고, s-maxage=1년으로 설정하여 CDN에서 최신 컨텐츠를 빠르게 전달하도록 조정했습니다. Bitbucket Pipelines 기반 배포 자동화 프로세스를 구축했습니다.",
          result: "배포 속도와 안정성을 크게 향상시켰습니다.",
        },
      ],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "아큐브 웹 서비스 운영 및 개발",
      company: "라텔앤드파트너즈 (외주)",
      period: "2024.07 ~ 2024.12",
      description:
        "외국계 클라이언트의 웹 서비스를 운영하고 신규 기능 및 웹 서비스를 개발했습니다. Canvas API, 웹 컴포넌트, TypeScript 유틸리티 타입, Figma MCP 등 다양한 기술을 활용하여 개발 생산성과 서비스 품질을 향상시켰습니다.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "JSP",
        "Tanstack Query",
        "Vite",
        "Emotion",
        "Storybook",
      ],
      achievements: [
        "Canvas와 Media API를 활용한 웹 기반 카메라 촬영 기능 구현",
        "웹 컴포넌트 API(Shadow DOM)를 활용한 캡슐화된 재사용 가능한 컴포넌트 개발",
        "TypeScript 유틸리티 타입 활용으로 파생 타입 생성 40% 감소",
        "Figma MCP를 활용한 컴포넌트 생성 자동화로 UI 개발 속도 50% 단축",
        "Sentry-Slack 연동 및 에러 메시지 커스터마이징으로 대응 시간 단축",
      ],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "셀럽잇",
      company: "우아한테크코스",
      period: "2023.06 ~ 2023.10",
      description:
        "셀럽들이 다녀간 맛집 정보를 한눈에 파악할 수 있는 맛집 탐색 서비스입니다. 기획부터 개발, 배포, 운영까지 전 과정을 경험하며 WAU 2000명을 달성했습니다. 프론트엔드 3명, 백엔드 4명으로 구성된 팀에서 프론트엔드 개발 및 기획을 담당했습니다.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "React-Query",
        "Zustand",
        "Styled-Components",
        "Cypress",
        "MSW",
        "Storybook",
      ],
      achievements: [
        "CloudFront CDN 구축으로 LCP 14.2초 → 2.4초 개선 (83% 향상)",
        "Lighthouse Performance 점수 72점 → 89점 개선 (번들 최적화, 이미지 최적화)",
        "Cypress E2E 테스트 자동화로 QA 비용 50% 절감",
        "Google Analytics 기반 UX 개선으로 평균 참여 시간 37초 → 1분 40초 증가",
        "PWA 적용 및 Next.js 오픈그래프 pre-rendering으로 SEO 최적화",
      ],
      github: "#",
      live: "#",
      featured: false,
    },
    {
      title: "맘마미아 - 충무로 맛집 추천",
      company: "개인 프로젝트",
      period: "2025.08 ~ 진행중",
      description:
        "충무로역 1km 반경 내의 식당을 소개하여 직장인들의 점심 맛집을 추천해주는 서비스입니다. 개인 프로젝트로 최신 기술 스택과 자동화 도구를 활용하여 개발 생산성을 극대화했습니다.",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Tanstack Query",
        "Vite",
        "OpenAPI TS",
        "Emotion",
        "Storybook",
        "AWS S3",
      ],
      achievements: [
        "OpenAPI TypeScript을 활용한 스키마 동기화 및 타입 생성 자동화",
        "Figma MCP를 활용한 UI 작업 자동화로 개발 생산성 향상",
        "Github MCP를 활용한 PR 생성 등 워크플로우 자동화",
        "S3 + CloudFront 배포 환경 구축 및 Github Actions CI/CD 파이프라인 구축",
      ],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

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

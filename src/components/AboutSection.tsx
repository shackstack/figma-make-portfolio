"use client";

import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Code, Gauge, Smartphone, Cloud } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: "React, TS, Vanilla JS",
      description:
        "React, Typescript, Vanilla JS를 이용한 다수의 프로젝트를 개발한 경험이 있습니다.",
    },
    {
      icon: Smartphone,
      title: "WebView",
      description:
        "크리에이터클럽 프로젝트의 컨트리뷰터로서 React 기반 WebView 개발을 담당하고 있습니다.",
    },
    {
      icon: Cloud,
      title: "AWS CloudFront, S3",
      description:
        "AWS S3와 CloudFront를 활용한 CDN 배포 환경 구축할 수 있습니다. CI/CD 파이프라인을 통해 배포 자동화, 캐싱 전략 수립을 통해 로딩 속도 개선 경험이 있습니다.",
    },
    {
      icon: Gauge,
      title: "Optimization",
      description:
        "웹사이트 성능 최적화 경험이 있습니다. 번들 사이즈 최적화를 주제로 우아한테크코스에서 10분 테크톡을 진행한 경험이 있습니다.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-6">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl text-white mb-4">
              사용자 중심의 웹 경험을 만들어가는 개발자
            </h3>
            <p className="text-gray-300 leading-relaxed">
              2년차 프론트엔드 개발자로서 라텔앤드파트너즈에서 React와
              TypeScript를 주력으로 다양한 프로젝트를 개발해왔습니다. WebView
              환경에서의 네이티브-웹 통신, API 타입 자동화, 배포 파이프라인 구축
              등 실무에서 직접 문제를 해결하며 성장해왔습니다.
            </p>
            <p className="text-gray-300 leading-relaxed">
              단순히 기능을 구현하는 것을 넘어, 개발 생산성을 높이고 유지보수가
              쉬운 코드를 작성하는 것을 중요하게 생각합니다. OpenAPI를 활용한
              타입 동기화 시스템 구축으로 PR 리드타임을 70% 단축하고, sendBeacon
              API 최적화로 iOS 환경에서의 로깅 성공률을 100%로 개선한 경험이
              있습니다.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-6"
            >
              {["문제 해결", "타입 안정성", "성능 최적화", "협업 중시"].map(
                (trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm border border-emerald-500/30"
                  >
                    {trait}
                  </span>
                )
              )}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-black/50 border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-white text-lg mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import celuveatThumbnail from "./images/celuveat_thumbnail.jpg";
import cre8orclubThumbnail from "./images/cre8orclub_thumbnail.jpeg";
import acuvueThumbnail from "./images/acuvue_thumbnail.jpg";

export interface Achievement {
  title: string;
  problem: string;
  solution: string;
  result: string;
  link?: string;
}

export interface Project {
  title: string;
  company: string;
  period: string;
  description: string;
  image: string;
  technologies: string[];
  achievements: Achievement[];
  homepage?: string;
  live?: string;
  github?: string;
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    title: "크리에이터 클럽",
    company: "라텔앤드파트너즈",
    period: "2025.01 ~ 진행중",
    description:
      '예술업계 종사자들을 위한 채용 플랫폼 앱인 "크리에이터클럽" 개발에 WebView 개발을 담당하였습니다. 개발 환경 설정, 기능 개발, 배포 파이프라인 구축 등의 작업을 했습니다.',
    image: cre8orclubThumbnail,
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
    homepage: "https://cre8orclub.com/",
    live: "https://apps.apple.com/kr/app/cre8orclub/id6737261549",
    featured: true,
  },
  {
    title: "충무로 맛집은 여기, 맘마미아",
    company: "개인 프로젝트",
    period: "2025.08 ~ 진행중",
    description:
      "충무로역 1km 반경 내의 식당을 소개하여, 직장인들의 점심 맛집을 추천해주는 서비스입니다. 개인 프로젝트로 최신 기술 스택과 자동화 도구를 활용하여 개발 생산성을 극대화했습니다.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    technologies: [
      "React",
      "TypeScript",
      "Tanstack Query",
      "Vite",
      "Emotion",
      "Storybook",
      "OpenAPI TypeScript",
      "S3",
      "CloudFront",
    ],
    achievements: [
      {
        title: "OpenAPI TypeScript을 활용한 스키마 동기화 및 타입 생성 자동화",
        problem:
          "백엔드 API 스키마가 변경될 때마다 수동으로 타입을 업데이트해야 하여 개발 효율성이 떨어지고 타입 불일치 오류가 발생할 수 있었습니다.",
        solution:
          "OpenAPI TypeScript를 활용하여 API 스키마에서 타입을 자동으로 생성하고 동기화하는 시스템을 구축했습니다.",
        result:
          "타입 생성 과정이 자동화되어 개발 속도가 향상되었고, 타입 불일치로 인한 런타임 오류를 사전에 방지할 수 있게 되었습니다.",
      },
      {
        title: "Figma, Github MCP를 활용한 업무(UI 작업 및 PR 생성 등) 자동화",
        problem:
          "UI 컴포넌트 개발과 PR 생성 등 반복적인 작업에 많은 시간이 소요되어 개발 생산성이 저하되었습니다.",
        solution:
          "Figma MCP를 활용하여 디자인에서 컴포넌트 코드를 자동 생성하고, Github MCP를 활용하여 PR 생성 등 워크플로우를 자동화했습니다.",
        result:
          "반복적인 작업이 자동화되어 개발 생산성이 크게 향상되었고, 개발자가 핵심 기능 개발에 더 집중할 수 있게 되었습니다.",
      },
      {
        title:
          "S3, CloudFront를 이용한 배포환경 구축 및 Github Action을 통해 배포 자동화",
        problem:
          "수동 배포 과정이 번거롭고 실수로 인한 배포 오류가 발생할 수 있었으며, 배포 속도가 느렸습니다.",
        solution:
          "S3와 CloudFront를 활용한 CDN 배포 환경을 구축하고, Github Actions를 통해 CI/CD 파이프라인을 구축하여 배포를 자동화했습니다.",
        result:
          "배포 과정이 자동화되어 배포 속도와 안정성이 크게 향상되었고, 개발자가 배포에 소요되는 시간을 절약할 수 있게 되었습니다.",
        link: "https://github.com/Mamma-miaa/Mamma-Mia-Frontend/pull/8",
      },
      {
        title: "접근 편의성 및 더 나은 모바일 경험 제공을 위해 PWA 개발",
        problem:
          "모바일 환경에서 웹사이트 접근성이 떨어지고, 네이티브 앱과 같은 사용자 경험을 제공하기 어려웠습니다.",
        solution:
          "Progressive Web App(PWA)을 개발하여 모바일에서 앱처럼 설치하고 사용할 수 있도록 구현했습니다.",
        result:
          "사용자 접근성이 향상되었고, 모바일에서 더 나은 사용자 경험을 제공할 수 있게 되었습니다.",
        link: "https://github.com/Mamma-miaa/Mamma-Mia-Frontend/pull/18",
      },
    ],
    github: "https://github.com/Mamma-miaa/Mamma-Mia-Frontend",
    live: "https://mamma-mia.site",
    homepage: "https://mamma-mia.site",
    featured: true,
  },
  {
    title: "아큐브 웹 서비스 운영 및 개발",
    company: "라텔앤드파트너즈 (외주)",
    period: "2024.07 ~ 2024.12",
    description:
      "외국계 클라이언트의 웹 서비스를 운영하고 신규 기능 및 웹 서비스를 개발했습니다. Canvas API, 웹 컴포넌트, TypeScript 유틸리티 타입, Figma MCP 등 다양한 기술을 활용하여 개발 생산성과 서비스 품질을 향상시켰습니다.",
    image: acuvueThumbnail,
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
      {
        title: "Canvas와 Media API를 활용한 웹 기반 카메라 촬영 기능 구현",
        problem:
          "카메라 기능을 웹에서도 지원해야 하는 요구사항이 있었지만, 브라우저 환경에서는 파일 업로드 기반 접근만 가능해 사용자 경험이 제한적이었습니다.",
        solution:
          "HTML5 Canvas와 Media API를 활용해 웹 기반 카메라 촬영 기능을 구현했습니다. 사용자는 브라우저 환경에서 프레임 가이드가 보이는 커스텀 화면으로 촬영을 할 수 있게 되었습니다.",
        result:
          "웹 환경에서도 네이티브 앱과 유사한 카메라 촬영 경험을 제공할 수 있게 되어 사용자 만족도가 향상되었습니다.",
      },
      {
        title:
          "웹 컴포넌트 API를 활용해 스타일과 동작을 캡슐화·분리하여 재사용가능한 컴포넌트 개발",
        problem:
          "프로젝트에서 특정 UI 요소가 여러 페이지와 모듈에서 반복적으로 사용되었지만, 외부 스타일에 영향을 받지않고 일관된 동작과 스타일을 유지할 수 있는 방법이 필요했습니다.",
        solution:
          "웹 컴포넌트 API(Shadow DOM, Custom Elements 등)를 활용하여 캡슐화된 재사용 가능한 컴포넌트를 개발했습니다. Shadow DOM을 통해 스타일과 동작을 외부와 격리시켜 CSS 충돌이나 스크립트 간섭을 방지했으며, 또한 컴포넌트가 수행해야 하는 동작을 명확히 분리하여 기능별로 관리할 수 있도록 설계했습니다.",
        result:
          "컴포넌트 재사용성이 향상되었고, 외부 스타일 영향 없이 일관된 UI를 유지할 수 있게 되었습니다.",
      },
      {
        title: "유틸리티 타입을 활용하여 파생 타입 생성 최소화",
        problem:
          "프로젝트가 커지면서 동일 데이터 구조에 대해 변형 타입을 반복 정의하는 문제가 있었습니다.",
        solution:
          "TypeScript 유틸리티 타입(Partial, Pick 등)을 적극 활용해 파생 타입 생성 과정을 최소화했습니다.",
        result:
          "타입 정의 중복이 40% 이상 줄었고, 타입 수정 시 전체 영향 범위를 빠르게 파악할 수 있었습니다. 이를 통해 타입 시스템을 활용한 유지보수 효율성 극대화 방법을 체득했습니다.",
      },
      {
        title:
          "Figma MCP를 활용해 코드 컨벤션·디자인 시스템 기반의 컴포넌트 생성 자동화",
        problem:
          "컴포넌트 UI 개발 작업을 자동화하고, 팀의 코드 컨벤션과 디자인 시스템 상수를 적용할 수 있는 방법이 필요했습니다.",
        solution:
          "Figma MCP를 활용해 컴포넌트 UI 개발 작업을 자동화했으며, 이 과정에서 팀의 코드 컨벤션과 디자인 시스템 상수를 적용할 수 있도록 rules를 작성했습니다.",
        result:
          "유지보수가 용이한 형태로 컴포넌트를 생성할 수 있었고, UI 개발 속도를 약 50% 단축할 수 있었습니다.",
      },
      {
        title: "Sentry Slack 연동 및 에러 메세지 가독성 개선",
        problem:
          "서비스 운영 과정에서 발생하는 에러를 실시간으로 확인하기 위해 Sentry를 Slack 채널과 연동하여 모니터링 시스템을 구축했습니다. 단순 알림만 전달되는 기본 설정은 중요한 정보를 빠르게 파악하기 어려웠습니다.",
        solution:
          "에러 메시지를 커스터마이징하여 발생 지점, 사용자 환경, 주요 스택 트레이스가 한눈에 들어오도록 구성했습니다.",
        result:
          "팀원들이 Slack 알림만으로도 문제의 원인을 빠르게 파악하고 대응 시간을 단축할 수 있었으며, 운영 효율성과 협업 속도도 향상되었습니다.",
      },
    ],
    featured: false,
  },
  {
    title: "셀럽잇",
    company: "우아한테크코스",
    period: "2023.06 ~ 2023.10",
    description:
      "셀럽들이 다녀간 맛집에 대한 정보를 탐색하는 과정이 번거롭고 한 눈에 파악하기 어렵다는 문제에 착안하여 시작한 프로젝트입니다. 셀럽들이 다녀간 맛집, 인기 지역의 셀럽 맛집 정보, 지도를 통한 탐색 기능, 위시리스트, 그리고 사진 리뷰 등의 서비스를 제공하며 사용자 경험을 최적화했습니다. 프론트엔드 3명과 백엔드 4명으로 구성된 팀에서 진행되었으며, 주간 활성 사용자 수(WAU) 2000명을 달성하는 성과를 이루었습니다.",
    image: celuveatThumbnail,
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
      {
        title: "S3와 CloudFront를 활용한 CDN 구축으로 로딩 속도 개선",
        problem:
          "초기 로딩 속도가 느려 LCP(Largest Contentful Paint)가 14.2초로 측정되어 사용자 경험이 저하되고 있었습니다.",
        solution:
          "S3와 CloudFront를 활용한 CDN 구축을 통해 정적 자산을 전 세계 엣지 서버에 분산 배치했습니다.",
        result:
          "LCP를 14.2초에서 2.4초로 대폭 개선(83% 향상)하여 사용자 경험을 크게 향상시켰습니다.",
        link: "https://github.com/woowacourse-teams/2023-celuveat/blob/main/.github/workflows/frontend-prod-cd.yml",
      },
      {
        title:
          "Tree-shaking, Code-splitting 및 이미지 최적화를 통한 번들 사이즈 최적화",
        problem:
          "번들 사이즈가 커서 초기 로딩 속도가 느렸고, 이미지 포맷이 비효율적이어서 Lighthouse Performance 점수가 72점으로 낮았습니다.",
        solution:
          "Tree-shaking과 code-splitting을 활용하여 번들 사이즈를 최적화했고, JPEG에서 WebP로의 점진적 향상 및 gzip 압축을 적용하여 이미지 최적화를 달성했습니다. 또한 font-preload를 사용하여 폰트 로딩 지연 문제를 해결했습니다.",
        result:
          "Lighthouse Performance 점수를 72점에서 89점으로 향상시켰습니다.",
        link: "https://www.youtube.com/watch?si=IdUrBx7fHf2d8849&v=ut10rvh1vug&feature=youtu.be",
      },
      {
        title: "Github Action을 이용한 Cypress E2E 테스트 자동화",
        problem:
          "수동 QA 테스트에 많은 시간과 비용이 소요되어 개발 효율성이 떨어졌습니다.",
        solution:
          "Github Action을 이용한 Cypress E2E 테스트 자동화를 구현하여 CI/CD 파이프라인에 통합했습니다.",
        result: "QA 비용을 50% 절감하여 개발 효율성을 크게 향상시켰습니다.",
        link: "https://github.com/woowacourse-teams/2023-celuveat/blob/main/frontend/cypress/e2e/desktop/like.cy.ts",
      },
      {
        title: "Google Analytics 기반 UX 개선",
        problem:
          "사용자 행동 데이터가 부족하여 UX 개선 방향을 파악하기 어려웠고, 평균 참여 시간이 37초로 짧았습니다.",
        solution:
          "Google Analytics를 활용해 탈출률을 분석하고 사용자 행동 패턴을 파악하여 UX 개선 포인트를 도출했습니다.",
        result:
          "평균 참여 시간을 37초에서 1분 40초로 늘려 사용자 참여도를 크게 향상시켰습니다.",
      },
      {
        title: "PWA 적용 및 Next.js 오픈그래프 pre-rendering을 통한 SEO 최적화",
        problem:
          "다양한 브라우저에서의 접근성이 부족했고, SNS 공유 시 미리보기 정보가 제대로 표시되지 않아 SEO와 사용자 경험이 저하되었습니다.",
        solution:
          "Progressive Web App(PWA)을 적용하여 다양한 브라우저에서의 접근성과 일관된 사용자 경험을 제공했고, Next.js의 오픈그래프 pre-rendering을 활용한 공유하기 기능을 구현하여 SEO를 최적화했습니다.",
        result:
          "크로스 브라우징 지원이 향상되었고, SNS 공유 시 적절한 미리보기 정보가 표시되어 사용자 유입이 개선되었습니다.",
      },
      {
        title:
          "비즈니스 로직 관심사 분리 및 useQueries 적용으로 네트워크 효율 개선",
        problem:
          "네트워크 요청이 순차적으로 발생하는 waterfall 현상으로 인해 전체 로딩 시간이 길어졌습니다.",
        solution:
          "비즈니스 로직의 관심사를 분리하고 React Query의 useQueries를 적용하여 병렬 데이터 페칭을 구현했습니다.",
        result:
          "네트워크 waterfall을 개선하여 전체 데이터 로딩 시간을 단축했습니다.",
      },
      {
        title: "MSW와 Storybook 도입으로 개발 생산성 향상",
        problem:
          "백엔드 API가 준비되기 전까지 프론트엔드 개발이 지연되고, 컴포넌트 개발 시 소통 비용이 발생했습니다.",
        solution:
          "MSW(Mock Service Worker)를 도입하여 백엔드 API 없이도 프론트엔드 개발을 진행할 수 있도록 했고, Storybook을 도입하여 컴포넌트를 독립적으로 개발하고 문서화했습니다.",
        result: "소통 비용을 줄이고 개발 생산성을 크게 증가시켰습니다.",
        link: "https://github.com/woowacourse-teams/2023-celuveat/pull/538",
      },
      {
        title: "Zustand와 React-Query를 활용한 상태 관리 최적화",
        problem:
          "클라이언트 상태와 서버 상태가 혼재되어 있어 상태 관리가 복잡하고 비효율적이었습니다.",
        solution:
          "Zustand를 클라이언트 상태 관리에, React-Query를 서버 상태 관리에 활용하여 관심사를 효과적으로 분리했습니다.",
        result: "상태 관리가 명확해지고 유지보수성이 향상되었습니다.",
      },
    ],
    github: "https://github.com/woowacourse-teams/2023-celuveat",
    featured: false,
  },
];

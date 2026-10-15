# 🌟 이강신 교수 (Prof. Gangshin Lee, Ph.D.) - Academic & Executive Portfolio

> 한성대학교 융합보안학과 교수 이강신 박사의 공식 포트폴리오 웹사이트입니다.  
> 25년간의 정보보호 및 개인정보보호(ISMS-P, ISO27001) 정책·현장 총괄, KISA 단장, 김앤장 전문위원, 4개 정부·공공기관(국민건강보험공단, 법원행정처, 국가보훈처, 방위사업청) CIO/CISO 경력과 학술 연구 논문 및 자문 이력을 제공합니다.

---

## 🎨 주요 특징 (Key Features)

- **딥 다크 & 글래스모피즘 디자인**: 심도 있는 다크 테마 배경에 은은한 앰비언트 글로우(Ambient Glow)와 블러 효과가 적용된 최고급 글래스 패널 UI
- **반응형 웹 디자인**: 모바일, 태블릿, 데스크톱 등 모든 디바이스 화면 크기에 최적화된 유연한 그리드 및 플렉스 레이아웃
- **상세 섹션 구성**:
  - **Hero & Profile**: 공직/학계 대표 리더십 헤드라인, 핵심 통계 수치(보안 전문 25년+, CIO/CISO 13년, 논문/저서 18편+, 정부표창 5회), 프로필 사진 카드 및 플로팅 배지
  - **About Me**: 고려대학교 정보보호 박사(DDoS 방어 동적 경로 식별 메커니즘) 및 한양대 수학과 석·학사 학력, ISMS-P 인증심사원 자격, 3대 핵심 연구 영역
  - **Career Experience**: 한성대, 건국대, 중앙대 교수 이력 및 국민건강보험공단, 법원행정처, 국가보훈처, 방위사업청, 김앤장, KISA, NIA, 데이콤 등 35년 종합 경력 타임라인
  - **Publications & Books**: 《개인정보보호의 기초와 활용》 단행본, 전자금융거래 보안통제, 클라우드 보안, i-PIN 2.0, DDoS 방어 메커니즘(LNCS 3391) 등 실제 발표 논문 및 BibTeX 인용 정보
  - **Advisory & Leadership**: 개인정보보호위원회(PIPC) 평가위원 및 결합전문위원, 한국정보보호학회·ISACA 부회장, 금융위 F-ISMS TF 등 자문 경력
  - **Awards & Honors**: 국무총리 표창(2010), 정보통신부 장관 표창 3회, 내무부 장관 표창, 세계 3대 인명사전(Marquis Who's Who) 알버트 넬슨 평생공로상
  - **Contact Form**: 자문, 공동 연구, 초빙 강연 등을 위한 인터랙티브 문의 폼 및 이력서(DOCX) 직접 다운로드 연동
- **순수 바닐라 스택**: 외부 무거운 프레임워크 없이 빠르고 가벼운 순수 HTML, CSS, JavaScript로 구현

---

## 📂 프로젝트 구조

```plaintext
my-homepage/
├── index.html           # 메인 페이지 마크업 및 시맨틱 태그
├── styles.css           # 다크 테마 디자인 시스템 및 반응형 스타일
├── script.js            # 필터링, 모달, 폼 유효성 검사, 토스트 알림 등 인터랙션
├── server.ps1           # 로컬 테스트용 경량 웹서버 스크립트
├── assets/
│   └── profile.jpg      # 프로필 사진
└── README.md            # 프로젝트 문서
```

---

## 🚀 로컬 실행 방법

### 방법 1. 웹 브라우저에서 직접 열기
`index.html` 파일을 브라우저(Chrome, Edge 등)에서 더블클릭하여 바로 확인하실 수 있습니다.

### 방법 2. 로컬 웹 서버 실행 (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1
```
실행 후 웹 브라우저에서 `http://localhost:8080/` 으로 접속합니다.

---

## 🌐 GitHub Pages 배포 방법

이 저장소는 GitHub Pages를 통해 무료로 손쉽게 정적 웹사이트로 배포할 수 있습니다:

1. GitHub 저장소의 **Settings** 탭으로 이동합니다.
2. 좌측 메뉴에서 **Pages**를 선택합니다.
3. **Build and deployment > Source** 항목에서 `Deploy from a branch`를 선택합니다.
4. **Branch** 설정을 `main` 브랜치의 `/ (root)`로 지정하고 **Save**를 누릅니다.
5. 약 1~2분 후 제공되는 URL (`https://<username>.github.io/my-homepage/`)을 통해 전 세계에 공개됩니다.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

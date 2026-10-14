# 🌟 김도현 (Dohyun Kim) - Portfolio Landing Page

> 반응형 HTML5 / CSS3 / Vanilla JavaScript 기반의 모던 다크 모드 포트폴리오 랜딩 페이지입니다.  
> 인공지능 연구원 & 수석 소프트웨어 엔지니어의 프로필, 경력, 연구 논문, 수상 내역 및 인터랙티브 문의 폼을 제공합니다.

---

## 🎨 주요 특징 (Key Features)

- **딥 다크 & 글래스모피즘 디자인**: 심도 있는 다크 테마 배경에 은은한 앰비언트 글로우(Ambient Glow)와 블러 효과가 적용된 글래스 패널 UI
- **반응형 웹 디자인**: 모바일, 태블릿, 데스크톱 등 모든 디바이스 화면 크기에 최적화된 유연한 그리드 및 플렉스 레이아웃
- **상세 섹션 구성**:
  - **Hero & Profile**: 인상적인 헤드라인, 핵심 통계 수치(논문 6+, 경력 5+, 피인용 1.2k+), 스튜디오 림 라이팅 프로필 사진 카드 및 플로팅 배지
  - **About Me**: 연구 비전과 철학, KAIST 학력 타임라인, 3대 핵심 연구 분야, 기술 스택 태그 칩
  - **Career Experience**: 인터랙티브 세로 타임라인과 주요 성과 및 기여점
  - **Publications**: 학술대회(Conference) / 국제저널(Journal) / 특허(Patent) 카테고리 필터링 탭, 초록(Abstract) 토글 아코디언, BibTeX 인용 모달 및 원클릭 복사
  - **Awards & Honors**: 과학기술정보통신부 장관 표창, IEEE AI Conference 최우수 논문상 등 수상 내역
  - **Contact Form & Direct Channels**: 실시간 유효성 검사, 글자수 카운터, 전송 스피너, 성공 토스트(Toast) 알림 및 이메일 주소 복사 기능
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

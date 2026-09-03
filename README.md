# Fastly Modern CDN - Web Presentation

16페이지 PDF를 고객 배포용 HTML 프레젠테이션으로 재구성한 버전입니다.

## 주요 기능
- 16페이지 전체 웹 프레젠테이션
- 각 페이지 주요 영역의 순차 객체 애니메이션
- 키보드 좌/우, 화면 클릭, 모바일 Swipe 탐색
- 모바일/태블릿/PC 반응형
- 썸네일 목차
- 전체 화면 모드
- 애니메이션 ON/OFF
- 원본 PDF 다운로드
- WebP 이미지 + 다음/이전 페이지 preload

## 로컬 실행
```bash
python -m http.server 8080
```
브라우저에서 http://localhost:8080 접속.

## GitHub Pages 배포
1. 새 GitHub Repository 생성
2. 이 폴더 내용을 Repository root에 업로드
3. Repository Settings → Pages
4. Deploy from a branch
5. Branch main, Folder / (root) 선택
6. 저장 후 Pages URL 공유

## 구현 메모
원본 디자인 보존을 위해 각 페이지를 고해상도 WebP로 사용하고, 주요 콘텐츠 영역을 같은 페이지 이미지에서 클리핑해 순차 애니메이션을 적용했습니다. 텍스트·도형을 완전히 개별 DOM으로 재작성한 버전은 아닙니다.


## 추가 적용 사항
- 접속 비밀번호: `fastly2026`
- 한 번 인증하면 같은 브라우저 탭에서는 다시 묻지 않음(sessionStorage)
- 우측 하단 `문의` 버튼
- 문의 팝업: SK(주) AX / 황용대 부장 / ydhwang@sk.com

> 주의: GitHub Pages에서 구현한 HTML/JavaScript 비밀번호는 소스 코드를 볼 수 있는 사용자가 우회할 수 있으므로 강한 보안 수단은 아닙니다.

- 신규 13페이지: Fastly 미디어 고객(Spotify) 사례
- 16페이지 전체 구성으로 업데이트

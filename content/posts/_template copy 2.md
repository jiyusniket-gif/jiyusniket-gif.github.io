---
title: Experience 피드에 표시되는 제목
detail-title: 아티클 상세 페이지의 제목 (생략하면 title 사용)
date: 2025.01.18
tags: branding, web
excerpt: Experience 피드 카드에 나타나는 한두 줄 설명.
thumbnail: content/posts/images/폴더명/thumb.jpg
gradient: g-splatter
---

> 핵심 메시지나 인상적인 인용구를 여기에.

---## 프로젝트: 한국어 음성인식 엔진 개발

### 개요
FastConformer 기반 한국어 STT 엔진 개발. 기존 상용 API 대비 비용 90% 절감,
정확도 동등 수준 달성.

### 역할
- 팀 규모: 3명 중 ML 리드
- 기여도: 모델 아키텍처 설계 70%, 학습 파이프라인 100%, 서빙 50%
## 접근 방식

어떻게 문제를 풀었는지 기술합니다. 리스트로 핵심 결정을 정리해도 좋습니다.

- **결정 1** — 그 이유
- **결정 2** — 그 이유
- **결정 3** — 그 이유
### 기술 스택
- 모델: PyTorch, NeMo, FastConformer-CTC
- 데이터: KsponSpeech (1000h) + 자체 데이터 (500h)
- 서빙: Triton, TensorRT, FastAPI
- 인프라: K8s, Prometheus, Grafana

### 주요 성과

| 지표 | Before | After | 개선율 |
|------|--------|-------|--------|
| CER (한국어) | 8.2% | 3.1% | 62% ↓ |
| Latency (P99) | 350ms | 120ms | 66% ↓ |
| 비용/시간 | $0.024 | $0.002 | 92% ↓ |
| 동시 처리량 | 10 req/s | 100 req/s | 10x |

### 기술적 도전과 해결

**문제 1: 한국어 받침 인식 오류 높음**
- 원인: 기존 토크나이저가 한국어 자모 구조를 무시
- 해결: 자모 분리 기반 커스텀 토크나이저 구현
- 결과: 받침 오류율 15% → 3%

**문제 2: 긴 오디오에서 메모리 부족**
- 원인: Self-attention의 O(n²) 메모리 복잡도
- 해결: Chunked attention 구현 + 스트리밍 추론
- 결과: 1시간 오디오도 8GB GPU에서 처리 가능

**문제 3: 프로덕션 latency 목표 미달**
- 원인: FP32 추론, Python GIL
- 해결: TensorRT FP16 변환, Triton 배치 처리
- 결과: 350ms → 120ms

### 코드 샘플
GitHub: github.com/username/korean-stt (오픈소스화 불가시 private)

## 작성 팁

- `##` 제목으로 섹션을 나눕니다 (자동으로 스타일 적용)
- `**굵게**`, `*기울임*` 사용 가능
- `>` 로 시작하면 인용 블록으로 표시됩니다
- `-` 또는 `1.` 으로 목록 작성
- 일반 링크: `[텍스트](URL)`
- 이미지는 현재 지원하지 않습니다 (추후 추가 가능)

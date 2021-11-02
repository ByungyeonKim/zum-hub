# ZUM 허브 클론 코딩 | Vanilla JS로 SPA 만들기

> ⚠️ 해당 프로젝트는 ZUM 인터넷의 기술과제였습니다. ZUM 기술 블로그에도 기술되어 있습니다. 깃허브로 제출하는 과제였기도 했고 기한 내에 제출하지 못해서 개인적인 욕심으로 더 진행해보는 프로젝트입니다.

![zumhub](https://user-images.githubusercontent.com/66554164/139859225-0468ea9a-b123-4432-8701-282761f9e10a.png)

## 기술 스택 🛠

- Front-end

  - Vanilla JS(ES6)
  - HTML5, CSS3
  - Axios

- Back-end
  - Node.js
  - Express.js
  - Cheerio
  - Axios

## 중요 구현 사항들 🧐

- ✅ 컴포넌트 기반 설계
  - 상태(State)를 기반으로 렌더링
- ✅ 전역 상태관리를 위한 Store
  - Vuex 또는 Redux 등과 같은 라이브러리를 왜 사용할까?
    - 관심사 분리?
  - 직접 만들어보고 사용해보기
- ✅ 페이지간에 이동이 발생할 때 새로고침이 발생하지 않도록 하기
  - 상세 페이지 진입
  - (미완성) 서브페이지 진입
- ✅ 상세 페이지는 원본 URL을 크롤링하여 렌더링
  - 3개의 크롤링 라이브러리 비교 후 예제와 문법이 익숙한 cheerio로 구현
- ✅ Image lazy loading 구현하기
  - 웹 성능을 위해 상세 페이지의 이미지를 lazy loading하기
  - Intersection Observer API를 사용하여 구현했다.
- ✅ 제공된 JSON을 토대로 API End-point 만들기
  - 처음 서버쪽을 구현해보았다. 동작은 하지만 좋은 코드인지, 좋은 설계인지는 모르겠다 그래도 처음보다 리팩토링을 해서 보기에 나쁘진 않다.
- 🔼 Router 만들기
  - 내가한 게 맞는지 잘 모르겠다.
    - history API의 pushState 메서드를 사용해서 뒤로가기, 앞으로가기를 구현했다.
- 💡 공통 사항
  - 좋은 코드인지 항상 고민하고 유지보수 하자.

---

## 프로젝트 실행 방법

1. 프로젝트 Fork 하기

```
오른쪽 상단 Fork 버튼
```

2. 가져온 프로젝트 Clone 하기( Clone or download 버튼 )

```shell
git clone 복사한 url
```

3. 의존성 모듈 설치하기

```shell
npm install
```

4. 로컬 서버 켠 후 살펴보기

```shell
npm start
```

## 10월 21일(목) 업데이트

- 컴포넌트, 상태, API 통신별로 모듈화
- 콘텐츠 통신 API 리팩토링
- 스타일 추가

## 10월 25일(월) 업데이트

- 기사 클릭 시 상세 페이지 진입
- 상세 페이지 원본 URL 크롤링
- 상세 페이지 엔드 포인트 추가
- axios, cheerio 추가

## 10월 26일(화) 업데이트

- 상세 페이지 이미지 레이지 로딩 구현
- 상세 페이지 스타일 추가

## 10월 31(일) 업데이트

- 상세 페이지 진입 시 history push, 뒤로 가기 클릭 시 홈화면 렌더

## 11월 1일(월) 업데이트

- 클라이언트 사이드도 Fetch API에서 Axios로 변경

## 11월 2일(화) 업데이트

- Store의 상태(State) 리팩토링
- 서버, 라우터 리팩토링

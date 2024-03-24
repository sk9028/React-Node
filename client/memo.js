// npm vs npx 차이점

/* npm
 0. 노드 패키지 매니저. 
 1. 레지스트리 라이브러리를 담고있음(바디 파서 쿠키 파서 등) 
 2. 빌드, 배포를 담당함 
 3. 경로를 지정하지 않으면 노드모듈(node_modules)에 알아서 저장됨
 */

 /* npx 
 0. 따로 다운받지 않고도 노드 레지스트리에 있는걸 가져다 쓸 수 있음
 1. disk 낭비 없음
 2. 항상 최신 버전 사용 가능
 */



 // 리액트 앱 실행
 /*
 0. npm run start로 실행 가능 ( package.json 파일 스크립트에 start가 정의돼있음 )
 1. index.html에 root라는 id를 가진 녀석이 index.js에 정의돼있음 )
 2. index.js에서 App.js를 import함 ( index.js에 ReactDOM에 app이 렌더링 돼있음 )
 3. app.js에서 app.css를 import함
 4. webpack이 src폴더 안에만 관리해주고 public은 관리 안해줌 ( 이미지 같은 건 public이 아니라 src부분에 넣어줘야 함 )
 */


 // 폴더 구조
 /*
 0. _actions , _reducer => Redux를 위한 폴더들
 1. components/views => 이 안에는 page들을 넣는다.
 2. components/views/sections => 이 안에는 해당 페이지에 관련된 css 파일이나, component 들을 넣는다.
 3. app.js => Routing 관련 일을 처리한다.
 4. Config.js => 환경 변수같은 것들을 정하는 곳이다.
 5. hoc => Higher Order Component의 약자로 Auth(HOC) 같이 인증된 사용자만 접근할 수 있게 구분하는 폴더 ( 인증되면 1번 컴포넌트 안되면 2번 컴포넌트 이런 식.. )
 6. utils => 여러 군데에서 쓰일 수 있는 것을을 이곳에 넣어둬서 어디서든 쓸 수 있게 해줌 ( 공통 기능이라고 생각하기 )
 */

 // 리액트에서 페이지 이동
 /*
 0. 페이지 이동 시 React Router Dom 이라는 것을 사용한다.
 1. npm install react-router-dom --save
 */


 // 프로젝트 연결 방식
 /*
0. 프론트 리액트
1. 백엔드 노드, 몽고디비
2. 프론트에서 백엔드로 보내는 신호 AXIOS => npm install axios --save    ajax 같은거임
3. 보낼때 서버랑 프론트랑 포트가 달라서 맞춰줘야함. ( CORS 정책 때문에 막힘 보안이슈(아무나 막 서비스 요청을 하면 안되니까..) )
4. 개발자 도구를 이용하거나 , PROXY를 사용하면 서로 통신할 수 있음. => npm install http-proxy-middleware --save
5. proxy 미들웨어가 통신을 도와주는 api라고 생각하면 될 듯.
6. proxy 사용 방법은 https://create-react-app.dev/docs/proxying-api-requests-in-development/ 여기에서 하라는대로 하면 됨.
7. 그래서 src/setupProxy.js 만들어서 코드 복사해서 씀
*/
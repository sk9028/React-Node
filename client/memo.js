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


// proxy란?
/**
 * 0. 유저 <=> 프록시 서버 <=> 인터넷
 * 1. 아이피를 프록시 서버에서 임의로 바꿔 버릴 수 있다.
 * 2. 그래서 인터넷에서 접근하는 사람의 ip를 모르게 된다.
 * 3. 보내는 데이터도 임의로 바꿀수 있다.
 * 4. 방화벽, 웹 필터, 캐쉬 데이터, 공유 데이터 제공 기능
 * 5. 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어
 * 6. 캐쉬를 이용해 더 빠른 인터넷 이용 제공
 * 7. 더 나은 보안 제공
 * 8. 이용 제한된 사이트 접근 가능
 */

// Concurrently를 이용해서 프론트, 백 서버 한번에 켜기
/**
 * 0. 여러개의 commands를 동시에 작동 시킬 수 있게 해주는 툴
 * 1. npm install concurrently
 * 2. package.json에 정의 "dev" : "concurrently \"npm run backend\" \"npm run start --prefix client"
 * 3. npm run dev 로 실행
 */


// css 프레임 워크
/**
 * 0. Material UI
 * 1. React Bootstrap
 * 2. Semantic UI
 * 3. Ant Design - https:ant.design/ - npm install antd - index.js에 이거 추가 => import 'antd/dist/antd.css'
 * 4. Materialize
 */


// Redux 상태 관리 라이브러리
/**
 * 0. Props(properties의 줄임, 컴포넌트간의 연관, 부모 자식 간의 소통때 사용, 부모가 자식한테 1이라는 값을 보내주면 자식은 1밖에 못씀 값을 바꿀려면 부모에서 다시 보내줘야 함.)
 * 1. State(컴포넌트 안에서 데이터를 교환 또는 전달할 때 사용, 1이라는 값을 계속 바꿔서 사용할 수 있음 , 자동리렌더링 )
 * 
 * 이게 Props방식
 * <ChatMessages
 *      messages={messages}
 *      currentMember={member}
 * >
 * 
 * 이게 State 방식
 * state = {
 *      message: '',
 *      attachFile: undefined,
 *      openMenu : false
 * }
 * 
 * 그래서 Redux는 State를 관리하는 라이브러리임.
 * 컴포넌트가 여러개면 관리하기 힘든것을 Redux Store에 보관해서 쉽게 관리할 수 있음
 * 
 * 한방향 흐름
 * React Component -> ACTION -> REDUCER -> STORE
 * 
 * Redux 사용하기 위한 디펜던시 4가지
 * npm install redux react-redux redux-promise redux-thunk
 * 1. redux
 * 2. react-redux
 * 3. redux-promise ( dispatch한테 받는 방법이 promise인 경우 필요한 디펜던시-미들웨어)
 * 4. redux-thunk ( dispatch한테 받는 방법이 funtions인 경우 필요한 디펜던시-미들웨어)
 */


// React vs Reach Hooks
/**
 * 리액트는 클래스 컴포넌트와 펑셔날 컴포넌트가 있다.
 * 클래스는 코드가 길어지고 복잡하고 성능적인 면에서 느리지만 기능을 많이 쓸수있고,
 * 펑셔날 컴포넌트는 코드가 짧고 간단하고 성능이 클래스보다는 좋지만, 기능은 클래스보다 많이 못씀.
 * 
 * 하지만, 리액트 16.8 버전에서 Hooks 업데이트 이후 클래스 컴포넌트 기능들을 펑셔날 컴포넌트에서 쓸 수 있게 됨
 * 
 * 훅사용으로 인해서
 * constructor => const
 * componentDidMount => useEffect
 * render => 없어진듯? 그냥 return 쓰면 되는 듯
 */
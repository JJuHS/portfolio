import { create } from 'zustand';
import { moviewImgStore, cosmosImgStore, whiteboxImgStore, bugtopiaImgStore, portfolioImgStore } from './ImageStore.jsx';

// 프로젝트
const projectListData = [
    // 1. MOVIEW - 완료
    {
        id:0,
        title:"MOVIEW",
        description:{
            planningIntention:"영화 탐색, 추천부터 커뮤니티까지 이용하는 플랫폼",
            serviceContents:{
                "유저 기능":[
                    "화원가입 및 로그인", "좋아요한 영화 및 리뷰 확인, 작성한 게시글 및 리뷰확인", "쓴 댓글 확인", "프로필이미지, 닉네임, 좋아하는 장르 변경"
                ],
                "영화 검색 기능":[
                    "이름으로 영화 검색", "영화 상세페이지에서 영화 상세정보 확인", "리뷰 및 좋아요 기능"
                ],
                "영화 추천 기능":[
                    "사용자가 좋아요한 영화와 비슷한 영화 추천", "사용자가 좋아하는 장르와 비슷한 영화 추천", "성별, 나이대가 비슷한 사용자들이 좋아하는 영화 추천", "날씨와 시간을 고려한 AI의 영화추천", "사용자가 선택한 상황 및 기분에 맞는 영화추천"
                ],
                "커뮤니티 기능":[
                    "영화관 정보, 영화 뒷 이야기 등에 대한 커뮤니티 기능"
                ],
                "영화 리뷰요약 기능":[
                    "생성형 AI의 리뷰요약"
                ]
            },
            expectEffect:"영화 검색 및 커뮤니티 이용을 편하게 할 수 있고, 다양한 방식의 추천을 받을 수 있다."
        },
        startDate: "24.05.16",
        endDate: "24.05.23",
        url: "",
        github: "https://github.com/JJuHS/Moview",
        technologies: ["Django", "Vue.js", "MySQL", "Axios", "Bootstrap"],
        team:["김혜민", "정호성"],
        images: Object.values(moviewImgStore.getState()),
        role:["Backend"],
        myImplementation:[
            "서비스 기획",
            "Django Framework를 통한 Backend서버 구축",
            "사용자 인증 시스템 구현 (jwt token)",
            "MySQL 데이터베이스 설계 및 관리 (유저, 영화, 리뷰, 커뮤니티 등 데이터 모델링",
            "RESTful API 설계 및 구현 (영화 검색, 추천, 리뷰, 커뮤니티 기능 등)",
            "AI를 활용한 영화 추천 알고리즘 개발 및 통합 (사용자 기반, 콘텐츠 기반, 상황 기반 추천)",
            "외부 영화 데이터 API 연동 및 데이터 처리",
            "Axios를 활용한 프론트엔드와의 API 통신 설정"
        ],
        review:[
            "아쉬운 점 : 촉박한 일정 때문에 여러 다른 기능 구현에 시간을 쏟지 못했다.",
            "개선점 : 협업능력 및 코드 다이어트, 성능 최적화를 해보고 싶다.",
            "배운점 : RESTful한 API연동을 설계 및 구현하여 백서버와 프론트서버의 통신을 배웠다. 또한 외부 API를 연동하여 다양한 데이터를 활용하였으며, 영화 추천알고리즘을 개발하여 데이터 분석 기법에 대하여 익혔다."
        ],
        experienceResolvingProblem:[
            "처음에는 협업 도구인 Git의 사용법을 잘 몰라 협업에 어려움을 겪었다. 이 문제를 해결하기 위해 Git 관련 문서를 철저히 공부하고, 여러 테스트 프로젝트를 통해 실습했다. 이 과정을 통해 Git을 능숙하게 사용하게 되었고, 팀 프로젝트의 효율성이 크게 향상되었다.",
            "영화 데이터를 로드하는 과정에서 처리 시간이 오래 걸리는 문제가 발생했다. 이를 해결하기 위해 일부 데이터는 실시간으로 axios를 통해 불러오고, 나머지 데이터는 데이터베이스에서 관리하는 방식으로 시스템을 분산시켰다. 이러한 분산 처리 방식은 데이터 로딩 시간을 크게 단축시켜 사용자 경험을 개선했다.",
            "프로젝트는 단 두 명의 팀원이 6일 동안 진행해야 했기 때문에 시간과 자원이 매우 제한적이었다. 이에 불구하고 우리는 각자의 역할에 집중하고 효율적으로 시간을 관리하여 프로젝트에서 목표한 모든 기능을 성공적으로 완성할 수 있었다. 이 과정에서 팀워크의 중요성과 집중력이 가져다주는 결과를 몸소 체험하게 되었다."
        ],
        completeDataCreation:true,
    },

    // 2. COSMOS - 완료
    {
        id:1,
        title:"COSMOS",
        description:{
            planningIntention:"화상회의를 이용한 코딩스터디 서비스",
            serviceContents:{
                "유저 기능":["일반/소셜 회원가입 및 로그인", "프로필 수정", "내가 푼 코드목록 확인 기능"],
                "그룹 관련 기능":["그룹 초대, 참여, 탈퇴기능", "그룹 내부 일정을 관리할 수 있는 기능", "스터디 생성 및 삭제 기능", "사이트와 번호로 문제를 불러오는 기능", "문제에 대한 그룹원의 제출 여부 확인 기능", "문제에 대한 그룹원의 풀이를 확인할 수 있는 기능", "풀이 페이지에서 풀이를 수정하고 입력값을 넣어 컴파일할 수 있는 기능", "그룹원의 풀이를 자동으로 불러오는 기능"],
                "화상회의 관련 기능":["내가 풀었던 코드를 불러오는 기능", "코드를 공유 및 동시 편집할 수 있는 기능", "공유 그림판 기능", "실시간 채팅 기능", "화면공유기능", "화상회의기능"],
            },
            expectEffect:"Notion + Discord + 공유그림판의 서비스를 이용할 수 있다."
        },
        startDate: "24.07.05",
        endDate:"24.08.16",
        url: "",
        github: "https://github.com/JJuHS/COSMOS",
        technologies:["Nginx", "EC2", "Docker", "Jenkins", "Spring", "MySQL", "JPA", "QueryDSL", "React", "Node.js", "Zustand", "Axios", "Openvidu", "Websocket"],
        team:["김도한", "김효준", "곽지혁", "정예은", "정호성", "지경근"],
        images: Object.values(cosmosImgStore.getState()),
        role:["FrontEnd", "FrontEnd-Leader", ],
        myImplementation:[
            "그룹 관련 모든 페이지의 UI/UX 설계 및 React를 활용한 구현",
            "그룹 초대, 참여, 탈퇴 기능의 프론트엔드 로직 개발 및 API 연동",
            "그룹 내부 일정 관리 및 스터디 생성/삭제 페이지 구현",
            "문제를 사이트 및 번호로 불러오는 기능 개발",
            "그룹원의 문제 제출 여부 및 풀이 확인 기능 구현",
            "풀이 페이지에서 코드 편집 및 컴파일 기능 개발",
            "그룹원의 풀이를 자동으로 불러오는 기능 구현",
            "내가 푼 코드 목록을 불러오는 페이지 개발",
            "React Zustand로 상태 관리 및 Axios를 통한 API 통신 설정",
            "코드 컴파일 및 실행 결과를 반환받는 기능 구현"
        ],
        review:[
            "아쉬운 점: 실시간 문서 동시작업을 구현하는 데에 너무 오랜시간을 사용했다.",
            "개선점: 공식문서를 통해 공부하는 습관을 익히고, 새로운 기술에 대한 두려움을 없애고 도전하는 정신이 중요하다고 생각했다.",
            "배운점: git과 jira에 대한 사용법을 완벽하게 숙지하고, 에자일방식의 프로젝트 경험을 쌓았다.",
        ],
        experienceResolvingProblem:[
            "코드나 문서를 수정하게 되면 그 수정한 코드가 그 페이지를 보고 있는 다른 사용자에게 적용될 때, 글자의 Doubling이 일어나는 현상이 있었다. 문서 및 코드 수정시에 작성자의 userId를 같이 전송하여 충돌을 해결했다.",
        ],
        completeDataCreation:true,
    },

    // 3. WhiteBox
    // TODO: 문제해결경험, 이미지
    {
        id:2,
        title:"WhiteBox",
        description:{
            planningIntention:"증가하는 교통사고와 고통사고 분쟁을 해결하기 위한 AI 과실판단서비스",
            serviceContents:{
                "유저기능":["로그인/회원가입", "변호사협회 DB를 이용한 변호사인증", "프로필보기 - 자신의 사고내역, 참여한 투표, 쓴 글 확인"],
                "교통사고분석기능":["교통사고 영상 과실 비율 판단 - RCNN과 ResNet50", "LLM을 통한 관련 판례 및 법률 제공"],
                "커뮤니티기능":["교통관련 주제를 다루는 커뮤니티 기능"],
                "투표기능":["AI판독결과를 바탕으로 사용자들이 과실비율을 투표하는 기능", "변호사인증사용자의 경우 변호사 인증마크표시","투표결과를 댓글에 함께 표시"],
                "정보제공기능":["교통사고 관련 법률 및 개정법 정보 제공", "과실상계 및 절차에 대한 정보 제공", "교통사고 관련 용어 정보 제공", "교통사고 관련 사이트 정보 제공"]
            },
            expectEffect:"교통사고 과실비율을 산정하기 위해 소요되는 시간과 비용을 절감할 수 있다. 보험사 및 법률전문기관의 업무 부담을 완하시키며 교통사고의 통계자료로서 활용할 수 있다."
        },
        startDate: "24.08.26",
        endDate:"24.10.11",
        url: "",
        github: "https://github.com/JJuHS/WhiteBox",
        technologies:["Nginx", "EC2", "Docker", "Jenkins", "Spring", "Springsecurity", "FastAPI", "MySQL", "React", "Node.js", "Axios", "PyTorch", "langChain", "OpenAI"],
        team:["김근욱", "민호", "송인범", "신우호", "정호성", "차재훈"],
        images: Object.values(whiteboxImgStore.getState()),
        role:["FrontEnd", "FrontEnd-Leader"],
        myImplementation:[
            "메인 페이지 UI/UX 설계 및 React를 활용한 구현",
            "유저 관련 페이지 (회원가입, 로그인, 프로필 보기, 사고내역, 투표, 게시글 확인) 개발 및 API 연동",
            "AI 분석 결과를 시각화하는 교통사고 분석 페이지 개발",
            "AI 기반 과실 비율 판단 결과를 투표로 연결하는 기능 구현",
            "커뮤니티 기능 관련 페이지 개발 (글 작성, 댓글, 투표 기능 통합)",
            "교통사고 관련 법률, 용어, 절차 및 사이트 정보를 제공하는 정보 게시판 페이지 개발",
            "Axios를 통한 백엔드 API 통신 설정 및 상태 관리 로직 구현",
            "React Router를 활용한 페이지 네비게이션 및 구조 설계",
            "페이지 성능 최적화를 위해 코드 다이어트 및 컴포넌트 분리"
        ],
        review:[
            "아쉬운 점: 충분히 컴포넌트화 시킬 수 있던 것들을 컴포넌트로 만들지 못했던 코드가 일부 있었고, 코드가 길어지고 가독성이 떨어졌던 것 같다. 구현하기 전에 컴포넌트의 구조화에 대해 좀 더 신경쓰고 문서화를 할 필요가 있다고 느꼈다.",
            "배운점: React를 이용한 반응형 디자인과 스토어 관리를 통한 화면 구현, axios를 이용한 백엔드 서버와의 통신에 많은 경험치가 쌓인 것 같다. tailwindCSS를 사용해 보았고, 더 많은 프레임워크를 사용해 보고 싶다.",
        ],
        experienceResolvingProblem:[
            "",
        ],
        completeDataCreation:true,
    },

    // 4. Bugtopia
    // TODO: 후기, 문제해결경험, 이미지
    {
        id:3,
        title:"Bugtopia",
        description:{
            planningIntention:"아이들이 곤충을 관찰하고 돌보며 곤충 생태계를 학습할 수 있는 교육용 애플리케이션",
            serviceContents:{
                "채집기능":["실제 곤충을 촬영해서 불러오는 기능", "AI를 활용해 곤충의 종류를 파악하는 기능"],
                "AR기능":["카메라 화면에 곤충을 불러오는 기능", "먹이주기 - 곤충에게 먹이를 주면 곤충이 다가와서 먹이를 먹는 기능", "놀아주기 - 나무를 놓아주면 곤충이 나무로 날아가는 기능"],
                "도감기능":["키웠던, 잡았던 곤충을 모아볼 수 있는 기능"],
            },
            expectEffect:"아이들에게 곤충 체험의 교육적 가치를 제공하며, 인지 기능을 향상시키고 자연과의 정서적 연결을 가능하게 해준다."
        },
        startDate: "24.10.14",
        endDate:"24.11.29",
        url: "",
        github: "https://github.com/JJuHS/bugtopia",
        technologies:["Nginx", "EC2", "Docker", "Jenkins", "Spring", "Unity", "ARFoundation", "PyTorch", "OpenAI", "Yolo11-cls"],
        team:["강민서", "김민채", "서지흔", "서희", "정호성", "조원우"],
        images: Object.values(bugtopiaImgStore.getState()),
        role:["AI", "UnityScene"],
        myImplementation:[
            "곤충 채집 AI 구현 - YOLO",
            "앱 진입화면 및 닉네임 설정화면 구현 및 API 연결",
            "곤충 채집화면 구현 및 API 연결",
        ],
        review:[
            "아쉬운 점: Unity 기술에 대한 첫 경험으로써 미리 공부하지 못하고 프로젝트를 시작하게 되어 완전한 구현을 하지 못했다.",
            "개선점: ",
            "배운점: 새로운 기술을 익히고 구현해나가는 과정이 재밌었고, 또 처음 사용해보는 C#언어를 다루었다.",
        ],
        experienceResolvingProblem:[],
        completeDataCreation:true,
    },
    // 5. Portfolio
    {
        id:4,
        title:"Portfolio",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "24.11.22",
        endDate:"",
        url: "https://jjuhs-portfolio.com",
        github: "https://github.com/JJuHS/portfolio",
        technologies:["React", "tailwind", "JavaScript"],
        team:["정호성"],
        images: Object.values(portfolioImgStore.getState()),
        role:[],
        myImplementation:[],
        review:[],
        experienceResolvingProblem:[],
        completeDataCreation:false,
    },
]

const projectTitleToIndex = {
    'moview':0,
    'cosmos':1,
    'whitebox':2,
    'bugtopia':3,
    'portfolio':4,
}

// 기술스택
const techStacks = [
    {
        name: "Python",
        degree: 4,
        explanation: {
            en: "Skilled at manipulating data structures and implementing advanced algorithms in Python.",
            kr: "파이썬의 자료구조를 자유롭게 사용할 수 있고, 고급 수준의 알고리즘을 구현할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "JavaScript",
        degree: 4,
        explanation: {
            en: "Proficient in using JavaScript for DOM manipulation tasks.",
            kr: "JavaScript를 사용하여 DOM 조작 작업을 수행할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "React",
        degree: 4,
        explanation: {
            en: "Experienced in component-based architecture and state management, with extensive project experience.",
            kr: "컴포넌트 기반 아키텍처와 상태 관리를 경험하며, 다양한 프로젝트 경험을 보유하고 있습니다.",
        },
        image: "",
    },
    {
        name: "Java",
        degree: 3,
        explanation: {
            en: "Adept at managing data structures and crafting advanced algorithms in Java.",
            kr: "자바에서 자료구조를 다룰 수 있으며 고급 알고리즘을 작성할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "HTML5",
        degree: 3,
        explanation: {
            en: "Skilled in structuring and creating web page content using HTML5, with expertise in leveraging modern HTML5 features to build responsive and accessible designs.",
            kr: "HTML5를 사용하여 웹 페이지 콘텐츠를 구조화하고 작성하는 데 능숙하며, 최신 HTML5 기능을 활용하여 반응형 및 접근 가능한 디자인을 구축할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "Spring",
        degree: 2,
        explanation: {
            en: "Capable of performing basic CRUD operations and managing authentication with Spring.",
            kr: "Spring을 사용하여 기본 CRUD 작업을 수행하고 인증 관리를 할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "Deep Learning",
        degree: 2,
        explanation: {
            en: "Understands the basic structure of machine learning models and can adjust parameters and hyperparameters for training.",
            kr: "기계 학습 모델의 기본 구조를 이해하고 매개변수와 하이퍼파라미터를 조정하여 훈련을 수행할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "Unity",
        degree: 2,
        explanation: {
            en: "Knowledgeable in creating 3D scenes and has a fundamental understanding of scripting in Unity.",
            kr: "3D 씬을 제작하는 데 익숙하며 Unity에서 스크립팅에 대한 기본적인 이해를 가지고 있습니다.",
        },
        image: "",
    },
    {
        name: "TypeScript",
        degree: 2,
        explanation: {
            en: "Proficient in basic TypeScript usage, focusing on writing stable and secure code.",
            kr: "기본적인 TypeScript 사용에 능숙하며, 안정적이고 안전한 코드를 작성하는 데 중점을 둡니다.",
        },
        image: "",
    },
    {
        name: "Vue.js",
        degree: 2,
        explanation: {
            en: "Familiar with Vue.js framework, skilled in building interactive and performant front-end applications using its reactive components and ecosystem.",
            kr: "Vue.js 프레임워크에 익숙하며, 반응형 컴포넌트와 생태계를 활용하여 인터랙티브하고 성능이 뛰어난 프론트엔드 애플리케이션을 구축할 수 있습니다.",
        },
        image: "",
    },
    {
        name: "Django",
        degree: 2,
        explanation: {
            en: "Proficient in using Django for developing robust web applications, with an emphasis on writing clean, maintainable code and utilizing Django’s ORM and class-based views.",
            kr: "Django를 사용하여 견고한 웹 애플리케이션을 개발할 수 있으며, 깨끗하고 유지보수 가능한 코드를 작성하고 Django의 ORM과 클래스 기반 뷰를 활용할 수 있습니다.",
        },
        image: "",
    },
];



const useDataStore = create((set) => ({
    projectList: projectListData,
    projectTitleToIndex: projectTitleToIndex,
    techStacks: techStacks,
}))

export default useDataStore;



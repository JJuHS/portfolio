import { create } from 'zustand';
import { moviewImgStore, cosmosImgStore, whiteboxImgStore, bugtopiaImgStore, portfolioImgStore } from './ImageStore.jsx';

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
        review:[
            "아쉬운 점: 실시간 문서 동시작업을 구현하는 데에 너무 오랜시간을 사용했다.",
            "개선점: 공식문서를 통해 공부하는 습관을 익히고, 새로운 기술에 대한 두려움을 없애고 도전하는 정신이 중요하다고 생각했다.",
            "배운점: git과 jira에 대한 사용법을 완벽하게 숙지하고, 에자일방식의 프로젝트 경험을 쌓았다.",
        ],
        experienceResolvingProblem:[
            "코드나 문서를 수정하게 되면 그 수정한 코드가 그 페이지를 보고 있는 다른 사용자에게 적용될 때, 글자의 Doubling이 일어나는 현상이 있었다. 문서 및 코드 수정시에 작성자의 userId를 같이 전송하여 충돌을 해결했다.",
        ],
    },

    // 3. WhiteBox
    // TODO: 기능소개, 기대효과, 후기, 문제해결경험, 이미지
    {
        id:2,
        title:"WhiteBox",
        description:{
            planningIntention:"증가하는 교통사고와 고통사고 분쟁을 해결하기 위한 AI 과실판단서비스",
            serviceContents:{
                "":[],
            },
            expectEffect:""
        },
        startDate: "24.08.26",
        endDate:"24.10.11",
        url: "",
        github: "https://github.com/JJuHS/WhiteBox",
        technologies:["Nginx", "EC2", "Docker", "Jenkins", "Spring", "Springsecurity", "FastAPI", "MySQL", "React", "Node.js", "Axios", "PyTorch", "langChain", "OpenAI"],
        team:["김근욱", "민호", "송인범", "신우호", "정호성", "차재훈"],
        images: Object.values(whiteboxImgStore.getState()),
        role:["FrontEnd", "FrontEnd-Leader"],
        review:[
            "아쉬운 점: ",
            "개선점: ",
            "배운점: ",
        ],
        experienceResolvingProblem:[],
    },

    // 4. Bugtopia
    // TODO: 기능소개, 기대효과, 후기, 문제해결경험, 이미지
    {
        id:3,
        title:"Bugtopia",
        description:{
            planningIntention:"아이들이 곤충을 관찰하고 돌보며 곤충 생태계를 학습할 수 있는 교육용 애플리케이션",
            serviceContents:{
                "회원기능":[],
                "채집기능":[],
                "AR기능":[],
                "도감기능":[],
            },
            expectEffect:""
        },
        startDate: "24.10.14",
        endDate:"24.11.29",
        url: "",
        github: "https://github.com/JJuHS/bugtopia",
        technologies:["Nginx", "EC2", "Docker", "Jenkins", "Spring", "Unity", "ARFoundation", "PyTorch", "OpenAI", "Yolo11-cls"],
        team:["강민서", "김민채", "서지흔", "서희", "정호성", "조원우"],
        images: Object.values(bugtopiaImgStore.getState()),
        role:["AI", "UnityScene"],
        review:[
            "아쉬운 점: ",
            "개선점: ",
            "배운점: ",
        ],
        experienceResolvingProblem:[],
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
        startDate: "",
        endDate:"",
        url: "",
        github: "https://github.com/JJuHS/portfolio",
        technologies:[],
        team:["정호성"],
        images: Object.values(portfolioImgStore.getState()),
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
]

const useDataStore = create((set) => ({
    projectList: projectListData
}))

export default useDataStore;



import { create } from 'zustand';

const projectListData = [
    {
        title:"MOVIEW",
        description:{
            planningIntention:"",
            serviceContents:[
                "프로필 기능",
                "영화 검색 기능",
                "영화 추천 기능",
                "영화 좋아요 및 커뮤니티 기능",
                "영화 리뷰요약 기능"
            ],
            expectEffect:"영화 검색 및 커뮤니티 이용을 편하게 할 수 있고, 다양한 방식의 추천을 받을 수 있다."
        },
        startDate: "24.05.16",
        endDate: "24.05.23",
        url: "",
        github: "https://github.com/JJuHS/Moview",
        technologies: ["Django", "Vue.js", "MySQL"],
        team:["김혜민", "정호성"],
        images:[],
        role:["Backend"],
        review:[
            "아쉬운 점 : 촉박한 일정 때문에 여러 다른 기능 구현에 시간을 쏟지 못했다.",
            "개선점 : 협업능력 및 코드 다이어트, 성능 최적화를 해보고 싶다.",
            "배운점 : RESTful한 API연동을 설계 및 구현하여 백서버와 프론트서버의 통신을 배웠다. 또한 외부 API를 연동하여 다양한 데이터를 활용하였으며, 영화 추천알고리즘을 개발하여 데이터 분석 기법에 대하여 익혔다."
        ],
        experienceResolvingProblem:[],
    },
    {
        title:"COSMOS",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "https://github.com/JJuHS/COSMOS",
        technologies:[],
        team:["김도한", "김효준", "곽지혁", "정예은", "정호성", "지경근"],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
    {
        title:"WhiteBox",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "https://github.com/JJuHS/WhiteBox",
        technologies:[],
        team:["김근욱", "민호", "송인범", "신우호", "정호성", "차재훈"],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
    {
        title:"Bugtopia",
        description:{
            planningIntention:"",
            serviceContents:[],
            expectEffect:""
        },
        startDate: "",
        endDate:"",
        url: "",
        github: "https://github.com/JJuHS/bugtopia",
        technologies:[],
        team:["강민서", "김민채", "서지흔", "서희", "정호성", "조원우"],
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
    {
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
        images:[],
        role:[],
        review:[],
        experienceResolvingProblem:[],
    },
]

const useDataStore = create((set) => ({
    projectList: projectListData
}))

export default useDataStore;



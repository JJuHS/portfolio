import React from "react";
import { create } from "zustand";
// ----------------------------------
// 이미지 import 구역
// ----------------------------------

// MOVIEW
import moviewHomeDescription from '../Assets/projects/moview/home/description.png';
import moviewHomeNowPlaying from '../Assets/projects/moview/home/now_playing.png';
import moviewHomeUpcoming from '../Assets/projects/moview/home/upcoming.png';
import moviewCommunityBest from '../Assets/projects/moview/community/community_best.png';
import moviewCommunityDetail from '../Assets/projects/moview/community/community_detail.png';
import moviewCommunity from '../Assets/projects/moview/community/community.png';
import moviewMovieDetail01 from '../Assets/projects/moview/movie/movie_detail_1.png';
import moviewMovieDetail02 from '../Assets/projects/moview/movie/movie_detail_2.png';
import moviewMovieDetail03 from '../Assets/projects/moview/movie/movie_detail_3.png';
import moviewMovieDetail04 from '../Assets/projects/moview/movie/movie_detail_4.png';
import moviewMovieWhole from '../Assets/projects/moview/movie/whole_movie/whole.png';
import moviewMovieWholeKorean from '../Assets/projects/moview/movie/whole_movie/korean.png';
import moviewMovieWholeKoreanAction from '../Assets/projects/moview/movie/whole_movie/korean_action.png';
import moviewMovieWholeKoreanActionDate from '../Assets/projects/moview/movie/whole_movie/korean_action_date.png';
import moviewProfile from '../Assets/projects/moview/profile/profile.png';
import moviewProfileUpdate from '../Assets/projects/moview/profile/profile_update.png';
import moviewRecommendAgeGender from '../Assets/projects/moview/recommend/rec_age&gender.png';
import moviewRecommendGenre from '../Assets/projects/moview/recommend/rec_genres.png';
import moviewRecommendMovie from '../Assets/projects/moview/recommend/rec_movie.png';
import moviewRecommendTag from '../Assets/projects/moview/recommend/rec_tag.png';
import moviewRecommendWeatherTime from '../Assets/projects/moview/recommend/rec_weather&time.png';
// COSMOS
import cosmosGroupCode from '../Assets/projects/cosmos/group-code.png';
import cosmosGroupInvite from '../Assets/projects/cosmos/group-invite.png';
import cosmosGroupMain from '../Assets/projects/cosmos/group-main.png';
import cosmosGroupOverview from '../Assets/projects/cosmos/group-overview.png';
import cosmosGroupSetting from '../Assets/projects/cosmos/group-setting.png';
import cosmosGroupTimeoverview from '../Assets/projects/cosmos/group-time-overview.png';
import cosmosConference from '../Assets/projects/cosmos/conferencepage.png';
import cosmosAuthLogin from '../Assets/projects/cosmos/login.png';
import cosmosAuthMycodepage from '../Assets/projects/cosmos/mycodepage.png';
import cosmosAuthPasswordchange from '../Assets/projects/cosmos/passwordchange.png';
import cosmosAuthPasswordfind from '../Assets/projects/cosmos/passwordfind.png';
import cosmosAuthSignup from '../Assets/projects/cosmos/signup.png';
import cosmosAuthUserinfo from '../Assets/projects/cosmos/userinfo.png';
import cosmosAuthUserinfochange from '../Assets/projects/cosmos/userinfochange.png';
// Whitebox
import whiteboxmain from '../Assets/projects/whitebox/whiteboxmain.png';
// Bugtopia
import bugtopiaMain from '../Assets/projects/bugtopia/bugtopiaMain.png';
import bugtopiaInsectDetail from '../Assets/projects/bugtopia/bugtopiaInsectDetail.png';

// Portfolio TODO: 이미지 넣자

// skill icons
// 1. 기술스택
import DjangoIcon from '../Assets/stacks/DjangoIcon.ico';
import Html5Icon from '../Assets/stacks/Html5Icon.ico';
import JavaIcon from '../Assets/stacks/JavaIcon.ico';
import ReactIcon from '../Assets/stacks/ReactIcon.ico';
import SpringBootIcon from '../Assets/stacks/SpringBootIcon.ico';
import TypeScriptIcon from '../Assets/stacks/TypeScriptIcon.ico';
import UnityIcon from '../Assets/stacks/UnityIcon.ico';
import VueIcon from '../Assets/stacks/VueIcon.ico';
import PythonIcon from '../Assets/stacks/PythonIcon.ico';
import JavascriptIcon from '../Assets/stacks/JavascriptIcon.ico';
// 2. 협업
import NotionIcon from '../Assets/stacks/NotionIcon.png';
import FigmaIcon from '../Assets/stacks/FigmaIcon.png';
import GithubIcon from '../Assets/stacks/GithubIcon.png';
import JiraIcon from '../Assets/stacks/JiraIcon.png';


// nation Image
import koreaIcon from '../Assets/icon/koreaIcon.png';
import usaIcon from '../Assets/icon/usaIcon.png';
// footprint for loading
import footprint from '../Assets/static/footprint.png';
import leftFootprint from '../Assets/static/leftFootprint.png';
import rightFootprint from '../Assets/static/rightFootprint.png';

// MOVIEW
export const moviewImgStore = create((set) => ({
    moviewHomeDescription,
    moviewHomeNowPlaying,
    moviewHomeUpcoming,
    moviewCommunityBest,
    moviewCommunityDetail,
    moviewCommunity,
    moviewMovieDetail01,
    moviewMovieDetail02,
    moviewMovieDetail03,
    moviewMovieDetail04,
    moviewMovieWhole,
    moviewMovieWholeKorean,
    moviewMovieWholeKoreanAction,
    moviewMovieWholeKoreanActionDate,
    moviewProfile,
    moviewProfileUpdate,
    moviewRecommendAgeGender,
    moviewRecommendGenre,
    moviewRecommendMovie,
    moviewRecommendTag,
    moviewRecommendWeatherTime,
}))

// COSMOS
export const cosmosImgStore = create((set) => ({
    cosmosGroupCode,
    cosmosGroupInvite,
    cosmosGroupMain,
    cosmosGroupOverview,
    cosmosGroupSetting,
    cosmosGroupTimeoverview,
    cosmosConference,
    cosmosAuthLogin,
    cosmosAuthMycodepage,
    cosmosAuthPasswordchange,
    cosmosAuthPasswordfind,
    cosmosAuthSignup,
    cosmosAuthUserinfo,
    cosmosAuthUserinfochange,
}))

// ----------------------------------
// export 구역
// ----------------------------------

// WhiteBox
export const whiteboxImgStore = create((set) => ({
    whiteboxmain,
}))

// Bugtopia
export const bugtopiaImgStore = create((set) => ({
    bugtopiaMain,
    bugtopiaInsectDetail
}))

// Portfolio
export const portfolioImgStore = create((set) => ({

}))

// 언어 변경용
export const nationImgStore = create((set) => ({
    koreaIcon,
    usaIcon,
}))

// 로딩 이미지 발자국
export const footprintStore = create((set) => ({
    footprint,
    leftFootprint,
    rightFootprint
}))

// 기술스택 아이콘
export const skillIconStore = create((set) => ({
    DjangoIcon,
    Html5Icon,
    JavaIcon,
    ReactIcon,
    SpringBootIcon,
    TypeScriptIcon,
    UnityIcon,
    VueIcon,
    PythonIcon,
    JavascriptIcon,
    NotionIcon,
    FigmaIcon,
    GithubIcon,
    JiraIcon
}))
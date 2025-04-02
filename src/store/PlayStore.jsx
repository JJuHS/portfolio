import { create } from 'zustand';
const playListData = [
    {
        id:1,
        title:{
            'kr':'그림판',
            'en':'Paint'
        },
        explanation:{
            'kr':'그림을 그리고, 이미지를 추가, 편집하고 저장된 결과를 저장할 수 있습니다.',
            'en':'You can draw, add and edit images, and save the results.'
        },
        updateDate:'2025.04.02',
        craeteStartDate:'2025.04.02',
        createEndDate:'2025.04.02',
        skill:['Javascript', 'Html', 'css'],
        image:[]
    },
]

const usePlayStore = create((set) => ({
    playListData: playListData,
}))

export default usePlayStore;
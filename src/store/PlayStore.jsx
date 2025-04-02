import { create } from 'zustand';
import PaintIcon from '../Assets/play/paint.png'
import MinesweeperIcon from '../Assets/play/minesweeper.png'


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
        image:PaintIcon
    },
    {
        id:2,
        title:{
            'kr':'지뢰찾기',
            'en':'Minesweeper'
        },
        explanation:{
            'kr':'지뢰를 피해 모든 땅을 정복하세요.',
            'en':'Conquer all lands while avoiding mines.'
        },
        updateDate:'2025.04.02',
        craeteStartDate:'2025.04.02',
        createEndDate:'2025.04.02',
        skill:['Javascript', 'Html', 'css'],
        image:MinesweeperIcon
    },
]

const usePlayStore = create((set) => ({
    playListData: playListData,
}))

export default usePlayStore;
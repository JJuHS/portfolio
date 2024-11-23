import { create } from 'zustand';

// grid 1칸 먹는 div
const gridOneEmpty = ({ 
    ms="auto", 
    me="auto", 
    mt="auto", 
    mb="auto", 
    ps="auto", 
    pe="auto", 
    pt="auto", 
    pb="auto", 
    bgc="inherit", 
    h="auto", 
    w="auto", 
    mh="auto", 
    mw="auto" } = {}) => {
    return (
        <div className="col-span-1"></div>
    )
}

const useStyleStore = create((set) => ({
    gridOneEmpty,
}))

export default useStyleStore;
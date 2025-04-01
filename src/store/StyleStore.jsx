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
        <div 
            className="col-span-1"
            style={{
                marginLeft: ms,
                marginRight: me,
                marginTop: mt,
                marginBottom: mb,
                paddingLeft: ps,
                paddingRight: pe,
                paddingTop: pt,
                paddingBottom: pb,
                backgroundColor: bgc,
                height: h,
                width: w,
                maxHeight: mh,
                maxWidth: mw
            }}
        ></div>
    )
}

const useStyleStore = create((set) => ({
    gridOneEmpty,
}))

export default useStyleStore;
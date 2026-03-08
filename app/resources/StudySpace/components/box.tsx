


function Box(){
    return (
        <div className="flex-1 min-h-[357px] bg-[#B3B3B3] rounded-[10px] flex items-center justify-center">Placeholder box (image/text/card)</div>
    );
}

export default function ThreeBoxes(){
    return (
        <div className="gap-11 px-2.5 py-5 w-full">
          <div className="flex flex-row gap-6 max-w-[1091px] mx-auto">
            <Box />
            <Box />
            <Box />
          </div>
        </div>
    );
}
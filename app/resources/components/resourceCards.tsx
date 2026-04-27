

export default function ResourceCard({ label } : { label : string }) {
    return (
        <div className= "flex-1 flex flex-col rounded-[10px] overflow-hidden">
          <div className="min-h-[189px] bg-[#B3B3B3]"></div>
          <div className="bg-[#6E6E6E] px-[25px] py-[25px]">
            <p className="text-white text-xl font-medium">{label}</p>
          </div>
        </div>
    );
}
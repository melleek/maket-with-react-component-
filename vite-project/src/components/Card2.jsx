let data = 
[
    {
        id: 1,
        img: "src/assets/card2/last.png",
        p: "Training Courses",
        icon: "src/assets/card2/Frame 4 sec-.png",
        h1: "Get Quality Education",
        des: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        iconI: "src/assets/card2/Frame sec-.png",
        span: "15 Sales",
        p1: "$16.48",
        p2: "$6.48",
        btn: "Learn More",
        imgBtn: "src/assets/card2/@none.png",
    },
    {
        id: 2,
        img: "src/assets/card2/fixed-height.png",
        p: "2,769 online courses	",
        icon: "src/assets/card2/Frame 4 sec-.png",
        h1: "Our Popular Courses",
        des: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        iconI: "src/assets/card2/Frame sec-.png",
        span: "15 Sales",
        p1: "$16.48",
        p2: "$6.48",
        btn: "Learn More",
        imgBtn: "src/assets/card2/@none.png",
    },
    {
        id: 3,
        img: "src/assets/card2/fixed-height1.png",
        p: "Expert instruction",
        icon: "src/assets/card2/Frame 4 sec-.png",
        h1: "Most Popular Courses",
        des: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        iconI: "src/assets/card2/Frame sec-.png",
        span: "15 Sales",
        p1: "$16.48",
        p2: "$6.48",
        btn: "Learn More",
        imgBtn: "src/assets/card2/@none.png",
    },
]

export const Card2 = () => {
    return (
        <>
        {/* section */}
        <section className="flex gap-[30px] justify-start items-center sm:flex-wrap">

            {data.map((e) =>
               
               <div id="card">
                  <img src={e.img}/>
                  <div className="py-[25px] px-[25px] pb-[35px] flex flex-col gap-[15px]">
                    <div className="flex justify-between items-center">
                        <h6 className="text-[#96BB7C] font-[700]">{e.p}</h6>
                        <img src={e.icon} alt="" />
                    </div>
                    <h5 className="font-[700] text-[16px]">{e.h1}</h5>
                    <p className="w-[290px] text-[#737373] text-[14px]">{e.des}</p>
                    <div className="flex items-center gap-[10px]">
                        <img src={e.iconI} alt="" />
                        <p className="text-[#737373]">{e.span}</p>
                    </div>
                    <h5 className="text-[#BDBDBD] font-[700]">{e.p1} <span className="text-[#FFAB71]">{e.p2}</span></h5>
                    <button id="bor" className=" text-[#96BB7C] w-[152px] rounded-[37px] px-[20px] py-[10px] flex items-center gap-[10px] justify-center">{e.btn} <img src={e.imgBtn} alt="" /></button>
                  </div>
               </div>
            )}

        </section>
        </>
    )
}
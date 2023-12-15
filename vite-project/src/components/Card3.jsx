let data = 
[ 
    {
        id: 1,
        img: "src/assets/card3/stars.png",
        des: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        imgGirl: "src/assets/card3/img1.png",
        span: "Regina Miles",
        des1: "Designer"
    },
    {
        id: 2,
        img: "src/assets/card3/stars.png",
        des: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        imgGirl: "src/assets/card3/img2.png",
        span: "Regina Miles",
        des1: "Designer"
    },
    {
        id: 3,
        img: "src/assets/card3/stars.png",
        des: "Slate helps you see how many more days you need to work to reach your financial goal for the month and year.",
        imgGirl: "src/assets/card3/img3.png",
        span: "Regina Miles",
        des1: "Designer"
    },
]

export const Card3 = () => {
    return (
      <>
      {/* section */}
      <section className="flex gap-[30px] justify-between items-center sm:flex-wrap">

        {data.map((e) => 
        <div className="p-[25px] sm:m-[auto]">
            <div className="flex flex-col items-center gap-[15px] p-[30px]">
                <img src={e.img}/>
                <p className="text-center w-[159px] text-[#737373]">{e.des}</p>
            </div>
            <div className="flex items-center gap-[15px] justify-center">
                <img src={e.imgGirl} alt="" />
                <div>
                    <h6 className="text-[#96BB7C] text-[14px] font-[700]">{e.span}</h6>
                    <p className="text-[12px] font-[400]">{e.des1}</p>
                </div>
            </div>
        </div>
        )}
      </section>
      </>
    )
}
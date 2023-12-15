
let data = 
[
    {
        id:1,
        img: "src/assets/card4/img(1).png",
        name: "Julian Jameson",
        des: "Profession",
        icon1: "src/assets/card4/ant-design_facebook-filled.png",
        icon2: "src/assets/card4/instagram.png",
        icon3: "src/assets/card4/twitter (1).png"
    },
    {
        id:2,
        img: "src/assets/card4/img(2).png",
        name: "Julian Jameson",
        des: "Profession",
        icon1: "src/assets/card4/ant-design_facebook-filled.png",
        icon2: "src/assets/card4/instagram.png",
        icon3: "src/assets/card4/twitter (1).png"
    },
    {
        id:3,
        img: "src/assets/card4/img(3).png",
        name: "Julian Jameson",
        des: "Profession",
        icon1: "src/assets/card4/ant-design_facebook-filled.png",
        icon2: "src/assets/card4/instagram.png",
        icon3: "src/assets/card4/twitter (1).png"
    },
    {
        id:4,
        img: "src/assets/card4/img(4).png",
        name: "Julian Jameson",
        des: "Profession",
        icon1: "src/assets/card4/ant-design_facebook-filled.png",
        icon2: "src/assets/card4/instagram.png",
        icon3: "src/assets/card4/twitter (1).png"
    }
]

export const Card4 = () => {
    return (
      <>
      {/* section */}
      <section className="flex gap-[30px] lg:justify-start items-center sm:flex-wrap">
        
        {data.map((e) => 
        <div className="rounded-[10px] sm:m-[auto]" id="card">
            <img src={e.img} className="rounded-t-[10px]"/>
            <div className="p-[30px] flex flex-col items-center gap-[10px]">
            <h5 className="font-[700] text-[16px]">{e.name}</h5>
            <p className="text-[#737373] text-[12px] font-[400]">{e.des}</p>
            <div className="flex justify-center gap-[20px]">
                <img src={e.icon1} alt="" />
                <img src={e.icon2} alt="" />
                <img src={e.icon3} alt="" />
            </div>
            </div>
        </div>
        )}
      </section>
      </>
    )
}
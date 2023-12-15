import './App.css'
import { Card4 } from './components/Card4'
import { Card3 } from './components/Card3'
import { Card2 } from './components/Card2'
import Card5 from './components/card5'


const App = ({}) => {
  return (
    <div>
      <section className="all">

        {/* header */}
      <header className="nav">
        <nav className='flex justify-around items-center pt-[30px]'>
          <div className='lg:flex left items-center '>
             <h1 className='lg:text-[24px] font-[700] lg:px-[59px] sm:text-[34px]'>Your School</h1>    
             <div className='text-[#737373] lg:flex items-center gap-[21px] sm:hidden'>
              <p>Home</p>
              <p>Product</p>
              <p>Pricing</p>
              <p>Contact</p>
              </div>
          </div>
          <div className='flex items-center gap-[45px]'>
            <button className='lg:block text-[#96BB7C] sm:hidden'>Login</button>
            <button className='bg-[#96BB7C] px-[25px] py-[15px] rounded-[5px] flex justify-center items-center gap-[15px] text-white'> JOIN US
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
              <g clip-path="url(#clip0_2636_343)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z" fill="white"/>
              </g>
                <defs>
                  <clipPath id="clip0_2636_343">
                    <rect width="12" height="10" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            </button>
          </div>
        </nav>
      </header>


      {/* section1 */}
      <section className='lg:flex justify-center items-center lg:py-[80px] lg:px-[197px] sm:py-[50px] sm:px-[24px] '>
        <aside id="left" className='flex flex-col gap-[35px]'>
          <h4 className='text-[#96BB7C] text-[16px] font-[700]'>Join Us</h4>
          <h1 className='lg:text-[58px] lg:w-[542px] font-[700]'>25K+ STUDENTS TRUST US</h1>
          <p className='text-[#737373] lg:text-[20px] lg:w-[496px]'>Every day brings with it a fresh set of learning possibilities.</p>
         <div className='flex items-center gap-[20px]'>
           <button className='lg:px-[45px] lg:py-[15px] sm:px-[20px] sm:py-[10px] rounded-[5px] text-[white] bg-[#96BB7C]'>Get Quote Now</button>
           <button id="bor" className='lg:px-[45px] lg:py-[15px] sm:px-[20px] sm:py-[10px] rounded-[5px] text-[#96BB7C]'>Learn More</button>
         </div>
        </aside>
        <aside id="right">
          <img src="src/assets/header/none.png" alt="little girl" />
        </aside>
      </section>
      
      {/* section Card */}
      <section className='lg:py-[80px] lg:px-[197px] flex gap-[30px] items-center lg:justify-center sm:flex-wrap sm:py-[50px] sm:px-[24px]'>
        {/* <Card></Card>
        <Card></Card>
        <Card></Card> */}

        <Card5 img1={"src/assets/card/fixed-width fixed-height sec-.png"} p = {"The gradual accumulation of information about atomic and small-scale behaviour..."}
        h1 = {"Expert instruction"} img= {"src/assets/card/circle sec-.png"}
        />
        
        <Card5 img1={"src/assets/card/fixed-width fixed-height sec-.png"} p = {"The gradual accumulation of information about atomic and small-scale behaviour..."}
        h1 = {"Training Courses"} img= {"src/assets/card/circle sec- (1).png"}
        />
        
        <Card5 img1={"src/assets/card/fixed-width fixed-height sec-.png"} p = {"The gradual accumulation of information about atomic and small-scale behaviour..."}
        h1 = {"Expert instruction"} img= {"src/assets/card/circle sec- (2).png"}
        />

       
      </section>

      </section> 
      {/* 1 page is over  */}


      {/* section 2 */}
      <section className='lg:px-[195px] lg:py-[80px] flex lg:justify-around gap-[30px] text-center sm:flex-wrap sm:py-[50px] sm:px-[24px]'>
        
        {/* div1 */}
        <div>
          <h1 className='text-[#96BB7C] lg:text-[58px] font-[700] leading-[80px] tracking-[0.2px]'>15K</h1>
          <p className='text-[16px] font-[700] leading-[24px] tracking-[0.1px'>Happy Customers</p>
        </div>

        {/* div2 */}
        <div>
          <h1 className='text-[#96BB7C] lg:text-[58px] font-[700] leading-[80px] tracking-[0.2px]'>150K</h1>
          <p className='text-[16px] font-[700] leading-[24px] tracking-[0.1px'>Happy Customers</p>
        </div>


        {/* div3 */}
        <div>
          <h1 className='text-[#96BB7C] lg:text-[58px] font-[700] leading-[80px] tracking-[0.2px]'>15</h1>
          <p className='text-[16px] font-[700] leading-[24px] tracking-[0.1px'>Happy Customers</p>
        </div>

        {/* div4 */}
        <div>
          <h1 className='text-[#96BB7C] lg:text-[58px] font-[700] leading-[80px] tracking-[0.2px]'>100+</h1>
          <p className='text-[16px] font-[700] leading-[24px] tracking-[0.1px'>Happy Customers</p>
        </div>
      </section>


      {/* section 3 */}
      <section className='lg:py-[160px] lg:px-[195px] lg:flex justify-between items-center gap-[30px] sm:py-[50px] sm:px-[24px]'>
        {/* left */}
        <aside className='flex flex-col gap-[35px] items-start'>
          <img src="src/assets/main/fixed-width fixed-height sec-.png" alt="" />
          <h1 className='font-[700] text-[48px]'>Every Client Matters</h1>
          <p className='text-[#737373] text-[14px] lg:w-[310px] font-[400] tracking-[0.2px]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          <div className='flex items-center gap-[10px]'>
            <p className='text-[#96BB7C]'>Learn More</p>
            <img src="src/assets/main/@none.png" alt="" />
          </div>
        </aside>

        {/* right */}
        <aside>
          <img src="src/assets/main/thumb-concept-7.png" alt="" />
        </aside>
      </section>


      {/* section 4 */}
      <section className='lg:py-[160px] lg:px-[195px] bg-[#FFF2F3] flex flex-col gap-[80px] sm:py-[50px] sm:px-[24px]'>
        <div className='lg:w-[420px] flex flex-col gap-[10px] items-start'>
          <h6 className='text-[#96BB7C] font-[700]'>Practice Advice</h6>
          <h3 className='font-[700] text-[40px]'>Our Experts Teacher</h3>
          <p className='text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </p>
        </div>

        <Card2></Card2>

        <div>

        </div>

      </section>

      {/* section 5 */}
      <section className='lg:py-[160px] lg:px-[195px] flex flex-col gap-[80px] sm:py-[50px] sm:px-[24px]'>
        <div className='lg:w-[420px] flex flex-col gap-[10px] items-start'>
          <h6 className='text-[#96BB7C] font-[700]'>Practice Advice</h6>
          <h3 className='font-[700] text-[40px]'>Every Client Matters</h3>
          <p className='text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </p>
        </div>
        <Card3></Card3>
      </section>

      {/* section 6 */}
      <section className='lg:py-[112px] lg:px-[195px] flex flex-col gap-[112px] sm:py-[50px] sm:px-[24px]'>
        <div className='lg:w-[420px] flex flex-col gap-[10px] items-start'>
          <h6 className='text-[#96BB7C] font-[700]'>Team</h6>
          <h3 className='font-[700] text-[24px]'>Our Popular Courses</h3>
          <p className='text-[#737373]'>PProblems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics  </p>
        </div>

        <Card4></Card4>
      </section>

      {/* section 4*/}
      <section className='lg:py-[160px] lg:px-[195px] flex flex-col gap-[80px] sm:py-[50px] sm:px-[24px]'>
        <div className='lg:w-[550px] flex flex-col gap-[10px] items-center lg:m-[auto]'>
          <h6 className='text-center text-[#96BB7C] font-[700]'>Newsletter</h6>
          <h3 className='text-center font-[700] text-[24px]'>Watch our Courses</h3>
          <p className='text-center text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
        </div>

        <div id="jk" className='bg-[#F9F9F9] flex justify-between items-center lg:w-[688px] lg:m-[auto]'>
          <p className='py-[15pxn] pl-[20px]'>Your Email</p>
          <button className='bg-[#96BB7C] text-white text-center py-[15px] px-[22.5px]'>Subscribe</button>
        </div>
      </section>


      {/* section 5 */}
      <section className='lg:py-[50px] lg:px-[195px] lg:flex justify-around sm:hidden' id="end">

        <ul className='flex flex-col gap-[20px]'>
          <h4 className='font-[700] text-[16px]'>Company Info</h4>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>

        <ul className='flex flex-col gap-[20px]'>
          <h4 className='font-[700] text-[16px]'>Legal</h4>
          <li>About Us</li>
          <li>Carrier</li>
          <li>We are hiring</li>
          <li>Blog</li>
        </ul>

        <ul className='flex flex-col gap-[20px]'>
          <h4 className='font-[700] text-[16px]'>Features</h4>
          <li>Business Marketing</li>
          <li>User Analytic</li>
          <li>Live Chat</li>
          <li>Unlimited Support</li>
        </ul>

        <ul className='flex flex-col gap-[20px]'>
          <h4 className='font-[700] text-[16px]'>Resources</h4>
          <li> IOS & Android </li>
          <li>Watch a Demo</li>
          <li>Customers</li>
          <li>API</li>
        </ul>

        <ul className='flex flex-col gap-[20px]'>
          <h4 className='font-[700] text-[16px]'>Get In Touch</h4>
          <li className='flex items-center gap-[10px]'><img src="src/assets/footer/bx_bx-phone.png" alt="" />(480) 555-0103</li>
          <li className='flex items-center gap-[10px]'><img src="src/assets/footer/bx_bx-map.png" alt="" />4517 Washington Ave. Manchester,<br></br> Kentucky 39495</li>
          <li className='flex items-center gap-[10px]'><img src="src/assets/footer/carbon_send-alt.png" alt="" />debra.holt@example.com</li>
        </ul>

      </section>



      {/* footer */}

      <footer className='lg:py-[25px] lg:px-[195px] bg-[#FAFAFA] flex justify-between items-center sm:py-[50px] sm:px-[24px] sm:items-start sm:flex-wrap sm:gap-[20px]'>
        <h6 className='text-[#737373] font-[700] text-[14px]'>Made With Love By Figmaland All Right Reserved </h6>
        <div className='flex items-center gap-[20px]'>
          <img src="src/assets/footer/ant-design_facebook-filled.png" alt="" />
          <img src="src/assets/footer/instagram.png" alt="" />
          <img src="src/assets/footer/twitter (1).png" alt="" />
        </div>
      </footer>

    </div>
  )
}

export default App
import React from 'react'

function RoadMap() {
  return (
<section className="relative z-10 ">
      <img
        src="images/purple.png"
        alt=""
        className=" absolute -top-[50%] right-0 -z-10 h-[600px] hidden sm:block"
      />

      <div className="container-wrapper mb-14">
      
    
  

        <div className="flex justify-between flex-col sm:flex-row gap-5">
          <div className="bg-[#10999b95] py-5 px-5  rounded-md w-[100%]  border-black   border-2">
            <div>
            <h1 className="font-groot-one font-bold  text-black text-center  text-5xl mb-1">Lp burn</h1>
             
            </div>
            <p className=" text-lg text-center font-popins font-normal lh-1_7">100% BURNT</p>
           
          
          
          </div>

          <div className="bg-[#10999b95] py-5 px-5  rounded-md w-[100%] border-black    border-2">
          <div>
          <h1 className="font-groot-one font-bold  text-black text-center   text-5xl mb-1">TAX</h1>
           
            </div>
            <p className=" text-lg text-center font-popins font-normal lh-1_7">0% TAX</p>
           
       

          </div>
          <div className="bg-[#10999b95] py-5 px-5  rounded-md w-[100%] border-black  border-2">
          <div>
          <h1 className="font-groot-one font-bold  text-black text-center   text-5xl mb-1">Contract</h1>
             
            </div>
            <p className=" text-lg text-center font-popins font-normal lh-1_7">MINT REVOKED</p>


          </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap
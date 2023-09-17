import ButtonWrapperOrder from "./buttonWrapper"


export default function FrontDescrp() {

  return (
    <div 

      className="	bg-front-image relative pb-[10%] gap-y-[20%] flex flex-col items-center justify-end h-[90vh] bg-no-repeat bg-cover bg-black/40 bg-blend-multiply">
      <h1 className="w-[80%] text-[1.9em]  text-center sm:text-[2.8em] font-semibold text-white">Ортопедичні
        <span className="text-[#F6AC38]"> подушки </span><span className="text-3xl block font-normal">Преміум сегменту</span></h1>
      <div className="flex justify-between w-full px-8  h-[20%]">
        <div className="grid text-white items-center content-center text-center w-[15%] gap-[7%] ">
          <div className="bg-black/20 rounded-xl ">M</div>
          <div className="bg-black/20 rounded-xl ">L</div>
          <div className="bg-black/20 rounded-xl ">XL</div>
          <div className=" text-[#F6AC38] bg-black/20 rounded-xl ">Ultra</div>
        </div>
        <div className=" bg-promo-svg bg-no-repeat w-[18%] h-full bg-center bg-contain ">

        </div>
      </div>
      
      <ButtonWrapperOrder positionValue= "absolute" topValue= '94%'/>
     
    </div>
  )
}
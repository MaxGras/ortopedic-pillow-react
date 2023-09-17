import CarouselCustom from "./customeCarousel"

import AccordionWrapper from "./accordionWrapper";
import ButtonWrapperOrder from "./buttonWrapper";
import UlList from "./ulListComponent";
import AnimSlider from "./animationSlider";
import CommentComp from "./commentSection";
import Avatar_1 from "../../src/assets/images/Avatar_1.png"
import Avatar_2 from "../../src/assets/images/Avatar_2.png"
import Avatar_3 from "../../src/assets/images/Avatar_3.png"
import Step_Img_1 from "../../src/assets/images/Step_Img_1.png"
import Step_Img_2 from "../../src/assets/images/Step_Img_2.png"
import Step_Img_3 from "../../src/assets/images/Step_Img_3.png"

import StepComponent from "./stepComponent";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useInView } from "react-intersection-observer";
import { useState,useEffect } from "react";
export default function MainDescrp() {
  const detail_Ultra = [
    "Розмір: 40 х 60×15 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 35% бавовна, 65% мікрофібра",
    "Вага виробу: 1720 г."
  ]
  const descrp_Ultra = [
    `Подушка створює відчуття прохолоди завдяки гелевому шару,
    окрім цього ідеально облягає форму голови та шиї за допомогою технології Visco Memory Foam.`,

    `Забезпечує стійкість до пилових кліщів, тому ця подушка ідеально підходить для алергіків.`,

    `Особливістю Visco-піни є те, що вона відкрита, гнучка та легка,
     забезпечує повітропроникність.Її мета – заповнити шийний зазор та забезпечити комфортний сон.` ]
  const descrp_Ultra_Higlited = {
    0: [8, 15],
    1: [79, 88]
  }
  const detail_M = [
    "Розмір: 33 x 53 x 12 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 100% мікрофібра, змінний",
    "Вага виробу: 1000 г."
  ]
  const detail_L = [
    "Розмір: 40 х 60×12 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 100% мікрофібра, змінний",
    "Вага виробу: 1285 г."
  ]
  const detail_L_Highlited = {
    naming: [0, 11]
  }
  const detail_XL = [
    "Розмір: 50 х 70 см.",
    "Матеріал наповнювача: Visco Memory Foam",
    "Матеріал чохла: 100% мікрофібра, змінний",
    "Вага виробу: 1300 г."
  ]
  const descrp_All_Pillows = [
    `Подушка підтримує хребет та шию в анатомічно правильному положенні, розподіляє навантаження між різними групами м’язів,
       ідеально пристосовується до форми та ваги голови та надає максимально комфортний та здоровий сон. `,
    `Особливістю Visco-піни є те, що вона відкрита, гнучка та легка, що забезпечує повітропроникність.`,
    `Забезпечує стійкість до пилових кліщів, тому ця подушка ідеально підходить для алергіків.`,
    `Сукупність всіх цих факторів дозволить бути бадьорим протягом цілого дня.`
  ]
  const descrp_All_Pillows_Highlited = {
    0: [210, 222],
    2: [79, 88]
  }
  const firstListOfLi = [
    "наповнювач 100% в’язкопружна піна.",
    "як тільки шар гелю стикається з тілом, він викликає у вас приємне відчуття прохолоди.",
    "гелева поверхня водостійка, не вимагає миття, достатньо протерти губкою.",
    "ідеально підходить для тих, у кого проблеми з потовиділенням під час сну.",
    "завдяки своїй структурі, яка ніжно облягає Вашу шию, подушка регулює кровообіг.",
    "чохол виготовлений з тканини мікроспандекс із застібкою-блискавкою, яку можна прати."
  ]
  const secondListOfLi = [
    "легкість дихання, також запобігає надмірному потовиділенню, та печії.",
    "допомагає зменшити ранковий головний біль та сухість у роті, спричинені неправильним вибором подушки.",
    "нормалізує тиск, який призводить до болю та порушеного сну.",
    "завдяки своїй структурі, яка ніжно облягає Вашу шию, подушка регулює кровообіг.",
    "відмінно підходить для сну у різних позиціях: на спині, животі, на боці.",
    "чохол виготовлений з тканини мікроспандекс із застібкою-блискавкою, яку можна прати."
  ]
  const thirdListOfLi = [
    `Клієнт має право відмовитись від отримання товару у відділенні пошти у випадку його браку.`,
    `Інтернет-магазин зобов’язаний оплатити послугу доставки на випадок, якщо клієнт помітив дефект, і надав всі докази цього дефекту.`,
    `Інтернет-магазин має право відмовити клієнту в заміні товару, якщо клієнт забрав товар з пошти і після цього помітив “дефект” або якщо товар йому не підійшов.`
  ]
  const StepArray = [
    `Заповніть форму
    замовлення`,
    `Дочекайтесь дзвінка
    оператора`,
    `Оплатіть товар після
    отримання`
  ]
  const Avatar_1Descrp = {
    initials: "Олександр Шишло",
    city: "Київ",
    descrp: `По 10 годин проводжу за кермом. Вона
    допомагає зняти втому та відновити сили)`
  }

  const Avatar_2Descrp = {
    initials: "Ганна Мавдрик",
    city: "Київ",
    descrp: `Підтримує спину в правильному
    положенні та зменшує дискомфорт.
    Рекомендую її всім молодим матусям.)`
  }

  const Avatar_3Descrp = {
    initials: "Віталій Чарник",
    city: "Дніпро",
    descrp: `Після травми хребта мені важко заснути
    без болю. Завдяки цій подушці я можу
    забезпечити собі комфортний сон. 
    Велике спасибі за цей продукт!`
  }

  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({ threshold: 0.1 })

  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
  };
  const handleVisibilityChange = (visible) => {
      setIsVisible(visible);
    };
  useEffect(() => {
      handleVisibilityChange(inView);
     
  }, [inView]);
  return (

    <div className="bg-[#8C97A8]/50 h-auto px-2 pt-[12%] pb-[5%] " ref={ref}>
    {isVisible && (
                <Fab size="large" onClick={scrollToTop} color="#CFD3DB" sx={{ opacity: '30%', position: "fixed", bottom:"60px", right:'20px'  }} aria-label="Up">
                
                    <ArrowUpwardIcon fontSize="large" sx={{ fill: "#000000" }} />
                </Fab>
            )}
      <div className="bg-[#CFD3DB] rounded-[27px] px-4 py-6 sm:px-12 flex flex-col gap-[1.2vh] h-full mb-[7%] ">
        <h3 className="font-semibold pb-[5%] max-w-[85%] sm:text-xl">Ортопедична подушка Ipekce Visco Gel Ultra</h3>
        <CarouselCustom whichSlider={true}></CarouselCustom>
        <UlList naming={'Деталі :'} listOfThings={detail_Ultra}></UlList>
        <UlList naming={'Опис :'} listOfThings={descrp_Ultra} highlightedItems={descrp_Ultra_Higlited} ></UlList>
        <AccordionWrapper listOfLi={firstListOfLi}></AccordionWrapper>
        <AnimSlider firstPrice={"1755 грн"} secondPrice={"1490 грн"}></AnimSlider>
        <ButtonWrapperOrder />
      </div>

      <div className="bg-[#CFD3DB] rounded-[27px] px-4 py-6 sm:px-12 flex flex-col gap-[1.2vh] h-full ">
        <h3 className="font-semibold pb-[5%] sm:text-xl max-w-[85%] ">Ортопедична подушка Ipekce Visco Ortopedik
          M <span className="text-[#F6AC38]">L</span> XL розмір</h3>
        <CarouselCustom whichSlider={false}></CarouselCustom>
        <UlList naming={"Деталі М :"} listOfThings={detail_M}></UlList>
        <UlList naming={"Деталі L :"} listOfThings={detail_L} highlightedItems={detail_L_Highlited}></UlList>
        <UlList naming={"Деталі XL :"} listOfThings={detail_XL}></UlList>
        <UlList naming={"Опис :"} listOfThings={descrp_All_Pillows} highlightedItems={descrp_All_Pillows_Highlited}></UlList>
        <span className="font-[500] text-[0.95em] mt-[2px] ">Матеріал :</span>
        <p className="list-disc font-[400] pl-[8%] text-[0.9em] w-[95%] pb-[2%]">
          Memory Foam (піна пам’яті) – модифікований пінополіуретан з ефектом пам’яті. Його розробили в рамках космічної програми <span className=' text-[#F6AC38] font-[600]'>NASA</span> для зниження навантаження на астронавтів.
        </p>
        <span className="font-[500] text-[0.95em] mt-[2px] ">Як доглядати?</span>
        <p className="list-disc font-[400] pl-[8%] text-[0.9em] w-[95%] pb-[2%]">
          Догляд за цією подушкою дуже простий. Її можна протирати лише вологою серветкою та сушити на свіжому повітрі, уникаючи сонячних променів.
          Чохол переться вручну при 30°С, або ж при делікатному пранні в пральній машині.
        </p>
        <AccordionWrapper listOfLi={secondListOfLi}></AccordionWrapper>
        <AnimSlider firstPrice={"1400 грн"} secondPrice={"1190 грн"}></AnimSlider>
        <ButtonWrapperOrder />
        <span className="font-[500] text-[0.95em] mt-[2px] ">Увага!</span>
        <p className="list-disc font-[400] pl-[8%] text-[0.85em] w-[95%] pb-[2%]">
          На відміну від інших магазинів в Україні, ми можемо гарантувати <span className=' text-[#F6AC38] font-[600]'>якість</span> і <span className=' text-[#F6AC38] font-[600]'>оригінальність</span> продукції.
        </p>
      </div>
      <CommentComp city={Avatar_1Descrp.city} initials={Avatar_1Descrp.initials} descrp={Avatar_1Descrp.descrp} img={Avatar_1} ></CommentComp>
      <CommentComp city={Avatar_2Descrp.city} initials={Avatar_2Descrp.initials} descrp={Avatar_2Descrp.descrp} img={Avatar_2} ></CommentComp>
      <CommentComp city={Avatar_3Descrp.city} initials={Avatar_3Descrp.initials} descrp={Avatar_3Descrp.descrp} img={Avatar_3} ></CommentComp>
      <h3 className="text-[1.5em] text-center my-[5%] leading-[120%]">Як замовити нашу <span className="inline-block font-[600] text-[#F6AC38]">Ортопедичну подушку?</span></h3>
      <StepComponent img={Step_Img_1} index={1} descp={StepArray[0]} />
      <StepComponent img={Step_Img_2} index={2} descp={StepArray[1]} />
      <StepComponent img={Step_Img_3} index={3} descp={StepArray[2]} />
      <AccordionWrapper listOfLi={thirdListOfLi} name="Політика повернення товару" isUl={true}></AccordionWrapper>
    </div>

  )
}
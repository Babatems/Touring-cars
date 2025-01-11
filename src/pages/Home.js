import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useRef } from 'react';
import SingleModelos from '../components/SingleModelos';

export default function Home() {
  const modelosRef = useRef(null); // Centralized useRef for smooth scrolling

  const scrollToModelos = () => {
    modelosRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div>
      <Intro />
      <Arrow onClick={scrollToModelos} />
      <Modelos modelosRef={modelosRef} />
      <Form />
    </div>
  );
}

function Intro() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-5 mt-[223px] ml-[100px]">
        <p className="font-poppins font-bold text-[105px] leading-[115%] tracking-[-5%]">
          Qualidade,<br />Segurança,<br />Transparência.
        </p>
        <button className="font-poppins font-medium text-[23px] leading-[115%] tracking-[-5%] text-white rounded-[25px] w-[360px] px-[30px] py-[15px] bg-black flex items-center justify-center whitespace-nowrap">
          Acessar estoque completo
          <ArrowForwardIosIcon
            style={{
              width: '25px',
              height: '22px',
              lineHeight: '115%',
              color: 'White',
              letterSpacing: '-5%',
            }}
          />
        </button>
      </div>
      <div>
        <img src="/images/porschemodel5.png" alt="Porsche Car" className="w-full h-[755px] mt-[42.5px]" />
      </div>
    </div>
  );
}

function Arrow({ onClick }) {
  return (
    <div className="flex justify-center w-full align-middle">
      <button onClick={onClick}>
        <ExpandMoreIcon
          style={{
            width: '48px',
            height: '45px',
            color: '#9ca3af',
          }}
        />
      </button>
    </div>
  );
}

function Modelos({ modelosRef }) {
  return (
    <div ref={modelosRef} className='"mt-[100px] mx-[280px]'>
      <h1 className='font-poppins font-semibold text-[36px] mb-[50px] leading-[115%]'>Modelos</h1>
      <div className="w-[1346px] h-[300px]">
        <SingleModelos 
          CarMode="Elétrico"
          bgImage="/images/Eletric.png"
          paddingX={502}
        />
      </div>

      <div className="flex flex-row gap-10 mt-[50px]">
        <SingleModelos 
          CarMode="A Hybrid"
          bgImage="/images/Hybrid.png"
          paddingX={40}
        />    
        <SingleModelos 
          CarMode="Combustion"
          bgImage="/images/Combustion.png"
          paddingX={40}
        />    
        <SingleModelos 
          CarMode="Elétrico"
          bgImage="/images/Eletric.png"
          paddingX={40}
        />    
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className='mt-[100px] mx-[280px]'>
      <h1 className='font-poppins font-semibold text-[36px] leading-[115%] mb-[10px] text-black'>Você está procurando
      algum modelo em específico?</h1>

      <p className='font-poppins font-normal text-[16px] leading-[115%] tracking-[-0.7%] text-black mb-[50px]'>Deixe seu contato para que a nossa equipe entre em contato com você!</p>

      <div>
        <div className='flex flex-row gap-10 border-'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
        </div>
      </div>
    </div>
  )
}
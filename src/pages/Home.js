import React, { useRef, useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EastIcon from '@mui/icons-material/East';
import SingleModelos from '../components/SingleModelos';
import SingleSale from '../components/SingleSale'
import { Link } from "react-router-dom";

export default function Home() {
  const modelosRef = useRef(null);
  const introRef = useRef(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToModelos = () => {
    modelosRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (introRef.current) {
        const introBottom = introRef.current.getBoundingClientRect().bottom;
        setShowBackToTop(window.scrollY > introBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div ref={introRef}>
        <Intro />
      </div>
      <Arrow onClick={scrollToModelos} />
      <Modelos modelosRef={modelosRef} />
      <Form />
      <Highlights />
      <Sale />
      <Footer />
      
      {showBackToTop && (
        <button
          className="fixed bottom-10 right-10 bg-black text-white rounded-full p-3 shadow-lg"
          onClick={scrollToTop}
        >
          <ArrowUpwardIcon style={{ fontSize: '30px' }} />
        </button>
      )}
    </div>
  );
}

function Intro() {
  return (
    <div className="flex flex-row justify-between ml-[100px]">
      <div className="flex flex-col gap-5 mt-[223px]">
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
        <img src="/images/porschemodel5.png" alt="Porsche Car" className="w-full h-[740px] mt-[42.5px]" />
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
          CarMode="A combustão"
          bgImage="/images/Combustion.png"
          paddingX={40}
        />    
        <SingleModelos 
          CarMode="Híbrido"
          bgImage="/images/Hybrid.png"
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
      <h1 className='font-poppins font-semibold text-[36px] leading-[115%] mb-[10px] text-black'>Você está procurando <br />
      algum modelo em específico?</h1>

      <p className='font-poppins font-normal text-[16px] leading-[115%] tracking-[-0.7%] text-black mb-[50px]'>Deixe seu contato para que a nossa equipe entre em contato com você!</p>

      <div className='border-[2px] px-[50px] py-[91px] border-[#D9D9D9] rounded-[25px]'>
        <div className='flex w-full flex-row gap-5'>
        <input
          type="text"
          className="rounded-lg h-[46px] font-poppins font-normal text-[18px] text-black placeholder-[#D9D9D9] focus:outline-none"
          placeholder="Modelo"
        />
        <input
          type="text"
          className="rounded-lg h-[46px] font-poppins font-normal text-[18px] text-black placeholder-[#D9D9D9] focus:outline-none"
          placeholder="Nome"
        />
        <input
          type="text"
          className="rounded-lg h-[46px] font-poppins font-normal text-[18px] text-black placeholder-[#D9D9D9] focus:outline-none"
          placeholder="E-mail"
        />
        <input
          type="text"
          className="rounded-lg h-[46px] font-poppins font-normal text-[18px] text-black placeholder-[#D9D9D9] focus:outline-none"
          placeholder="Número"
        />
        <button 
          className='text-white bg-black rounded-lg h-[46px] px-16'>Enviar</button>

        </div>
        <div className='mt-[40px] flex flex-row gap-[5px]'>
          <input type="checkbox" className='text-black' />
          <p className='font-poppins font-light text-[14px] leading-[115%]'>De acordo com a LGPD, concordo em fornecer os dados acima para que a Touring Cars entre em contato comigo para apresentar serviços. Seu nome, e-mail e telefone serão usados de acordo com a nossa Política de Privacidade.</p>
        </div>
      </div>
    </div>
  )
}

function Highlights() {
  return (
    <div className='mt-[100px] mx-[280px]'>
      <p className='font-poppins font-semibold text-[36px] leading-[115%]'>Destaque semanal</p>

      <div className='mt-[50px] flex flex-row gap-10'>
        <img src="/images/Macan.png" alt="Porsche Macan GTS" className='w-full h-[492px] rounded-[25px]'/>

        <div className="w-full h-[492px] px-[70px] py-[64.5px]"
          style={{
            backgroundImage: "url('/images/TextMacan.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className='font-poppins font-semibold text-[22px] text-white'>Novo Porsche Macan GTS.</h1>
          <p className='mt-[30px] font-poppins font-medium text-[20px] text-white'>Novo Macan GTS: destaque nos aspectos em que os outros se perdem na multidão. Jovem, dinâmico e urbano, com equipamentos de série completos, características de design exclusivas do modelo e, é claro, o tradicional desempenho Porsche.</p>
        </div>
      </div>
    </div>
  )
}

function Sale() {
  return (
    <div className='mt-[100px] mx-[280px]'>
      <h1 className='font-poppins font-semibold text-[36px] leading-[115%]'>Últimas vendas</h1>
      
      <div className='mt-[50px] flex flex-row gap-10'>
        <SingleSale 
          CarName="RAM 1500"
          bgImage="/images/RAM.png"
          paddingX={40}
        />
        <SingleSale 
          CarName="Toyota SW4"
          bgImage="/images/SW4.png"
          paddingX={40}
        />
        <SingleSale 
          CarName="Sea-Doo Gti"
          bgImage="/images/SEA-DOO.png"
          paddingX={40}
        />
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className='mt-[70px] mx-[150px]'>
      <hr className='w-full border text-[#D9D9D9]'/>
      <div className='mt-[60px] flex flex-row gap-[100px] justify-around'>
        <div>
          <Link to="/">
            <img src="/images/touringcars.png" alt="Website Logo" className="h-[30px]" />  
          </Link>
          <p className='font-poppins font-medium text-[19px] leading-[115%] mt-5 text-black'>Qualidade, Segurança, Transparência.</p>
          <div className='mt-5 flex flex-row gap-16'>
            <Link to="/">
              <InstagramIcon className='w-[22px] h-[22px]'/>
            </Link>
            <Link to="/">
              <FacebookIcon className='w-[22px] h-[22px]'/>
            </Link>
            <Link to="/">
              <YouTubeIcon className='w-[22px] h-[22px]'/>
            </Link>
            <Link to="/">
              <WhatsAppIcon className='w-[22px] h-[22px]'/>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-[30px]'>
          <h1 className='font-poppins font-semibold text-[20px] leading-[115%] tracking-[7%]'>Contato</h1>
          <Link to="/">
            <p className='font-poppins font-medium text-[19px] text-black leading-[115%]'>Whatsapp</p>
          </Link>
          <a href="mailto:contato@touringcars.com" className='font-poppins font-medium text-black text-[19px] leading-[115%]'>contato@touringcars.com</a>
          <p className='font-poppins font-medium text-black text-[19px] leading-[115%]'>(81) 3512-9411</p>
        </div>

        <div className='flex flex-col gap-9'>
          <h1 className='font-poppins font-semibold text-black text-[20px] leading-[115%] tracking-[7%]'>Inscreva-se</h1>
          <p className='font-poppins font-medium text-black text-[19px] leading-[115%]'>Informe seu email para receber as <br />últimas novidades da Touring Cars.</p>
          <div className='flex flex-row gap-5'>
            <input
              type="text"
              className="rounded-lg h-[46px] w-[177px] font-poppins font-normal text-[18px] text-black placeholder-[#D9D9D9]"
              placeholder="Email"
            />
            <button 
              className='text-white bg-black rounded-lg h-[46px] px-5'
            >
              <EastIcon />
            </button>
          </div>
        </div>
      </div>
      <p className='mt-[100px] flex justify-center align-middle font-poppins font-light text-[18px] leading-[115%] text-black'>©️ 2024 Made by Babatems</p>
    </div>
  )
}
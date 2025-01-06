export default function Home() {
    return (
        <div>
          <Intro />          
        </div>
    )
}

function Intro() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col gap-5 mt-[223px] ml-[100px]">
        <p className="font-poppins font-bold text-[105px] leading-[115%] tracking-[-5%]">
          Qualidade,<br />Segurança,<br />Transparência.
        </p>
        <button className="font-poppins font-medium text-[23px] leading-[115%] tracking-[-5%] text-white rounded-[25px] w-[360px] px-[30px] py-[12px] bg-black flex gap-[3px] items-center justify-center whitespace-nowrap">
          Acessar estoque completo
          <span>{'>'}</span>
        </button>

      </div>
      <div>
        <img src="/images/porschemodel5.png" alt="Porsche Car" className="w-full h-[755px]"/>
      </div>
    </div>
  )
}
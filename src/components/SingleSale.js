import DoneIcon from '@mui/icons-material/Done';

export default function SingleModelos({ CarName, bgImage, paddingX = 10 }) {
  return (
    <div
      className="w-full h-[300px] rounded-[25px] relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <button
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-row justify-between items-center w-full py-3 bg-opacity-50 rounded-[25px]"
        style={{
          paddingLeft: `${paddingX}px`,
          paddingRight: `${paddingX}px`,
        }}
      >
        {/* Content spaced to opposite ends */}
        <p className="font-poppins font-semibold text-[20px] leading-[115%] tracking-[-0.7%] text-white">
          {CarName}
        </p>
        <DoneIcon
          style={{
            width: '30px',
            height: '34px',
            color: 'White',
          }}
        />
      </button>
    </div>
  );
}

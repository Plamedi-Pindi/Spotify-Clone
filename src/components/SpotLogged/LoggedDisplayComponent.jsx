export default function LoggedUserIcon({display, onClick, dimension, text}) {
  return (
    <div onClick={onClick} className={` md:${display}  md:bg-neutral-900 p-2 rounded-full mr-2 hover:scale-105 duration-500`}  >
      <div className=  {`bg-red-500 rounded-full ${dimension} flex justify-center items-center text-neutral-950 font-bold   cursor-pointer`} >
        <p className={`${text}`}>M</p>
      </div>
    </div>
  );
}

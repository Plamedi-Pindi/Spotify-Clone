export default function LoggedUserIcon({display}) {
  return (
    <div className={` md:${display}  md:bg-neutral-900 p-2 rounded-full mr-2 hover:scale-105 duration-500`}  >
      <div className=" bg-red-500 rounded-full w-8 h-8 pt-2 text-center text-neutral-950 font-bold text-sm  cursor-pointer">
        P
      </div>
    </div>
  );
}

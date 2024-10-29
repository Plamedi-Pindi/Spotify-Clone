// Logo
import blackLogo from "/blackLogo.png";



export default function RecommendedCard({ name, imgList, background }) {
  return (
    <div className={`w-[9.8rem]  h-56 text-wrap `}>
        {/* Images section */}
      <div
        className={`w-[9.8rem] h-[9.8rem]  text-black text-sm overflow-hidden flex flex-col justify-between`}
        style={{ background: background }}
      >
        <div className="flex justify-between items-center p-1">
            <img src={blackLogo} className="w-4"/>
          <p className="font-bold">Radio</p>
        </div>

        <div className="relative flex items-center justify-between">
          <img
            src={imgList[0]}
            className="w-14 h-14 shrink-0 -left-2 object-cover relative rounded-full"
          />
          <img
            src={imgList[1]}
            className="w-14 h-14 shrink-0 -right-2 object-cover relative rounded-full"
          />
          <div
            className={` absolute  w-20 h-20 rounded-full left-[2.4rem] flex items-center justify-center `}
            style={{ background: background }}
          >
            <img
              src={imgList[2]}
              className="rounded-full w-[4.5rem] h-[4.5rem] object-cover"
            />
          </div>
        </div>
        <h3 className="text-base font-bold p-1"> {name} </h3>
      </div>

        {/* content */}
      <div className="pt-3 pb-1 text-sm text-neutral-400">
        <p>Lacren, We the Kingdom, Tasha Cob...</p>
      </div>
    </div>
  );
}

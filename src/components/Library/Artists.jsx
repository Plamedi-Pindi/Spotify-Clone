export default function Artist({ imgUrl, name, isCollapsed }) {
  return (
    <li className={`flex hover:bg-neutral-800 p-2 rounded-lg`}>
      <div className=" w-12 ">
        <img
          src={imgUrl}
          alt="Artist image"
          className="w-12 h-12 rounded-full"
        />
      </div>
      {isCollapsed && (
        <div className="hidden lg:block ml-3">
          <h3 className="text-base font-medium"> {name} </h3>
          <p className="text-sm text-neutral-400"> Artist </p>
        </div>
      )}
    </li>
  );
}

export function ArtistCard({name, imgUrl}) {
  return (
    <div className="w-36 flex-shrink-0">
      <img 
        src={imgUrl} 
        alt={`Album image`} 
        className="w-36 h-36 rounded-full" 
      />
      <p className="text-sm font-medium mt-3 text-white text-center"> {name} </p>
      
    </div>
  );
}


export default function ArtistLibrary({ imgUrl, name, isCollapsed }) {
  return (
    <li className={`flex hover:bg-neutral-800 p-2 md:p-1 rounded-md md:mb-2`}>
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


export default function Artist({ imgUrl, name, isCollapse }) {
  return (
    <li className={`flex hover:bg-neutral-800 p-2 rounded-lg ${isCollapse && 'justify-center'} `} >
      <div className=" w-12 ">
        <img
          src={imgUrl}
          alt="Artist image"
          className="w-12 h-12 rounded-full"
        />
      </div>
      {!isCollapse && (
        <div className="ml-3">
          <h3 className="text-base font-medium"> {name} </h3>
          <p className="text-sm text-neutral-400"> Artist </p>
        </div>
      )}
    </li>
  );
}

export default function RecentPlay({ imgUrl, name, isCollapse }) {
  return (
    <div className={`flex bg-neutral-900 md:bg-neutral-800 rounded items-center w-48p md:w-24p mb-2`}>
      <div className=" w-12 ">
        <img src={imgUrl} alt="Artist image" className="w-12 h-12 " />
      </div>
      <h3 className="text-base font-medium text-sm w-4 ml-3"> {name} </h3>
    </div>
  );
}

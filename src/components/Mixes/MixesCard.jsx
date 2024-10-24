const MixesCard = ({ imgUrl, logo, border, title, titleBorder }) => {
  return (
    <div className={` w-36 h-36 bg-neutral-400  relative ${border} shrink-0`}>
      <img src={imgUrl} className="absolute w-full h-full object-cover " />

      <div className="bg-gradient-to-t from-black/60 w-full h-full absolute flex flex-col justify-between">
        <img src={logo} className="w-3.5 h-3.5 object-cover mt-1.5 ml-1.5" />

        <div className="flex items-end mb-2">
          <div
            style={{ background: titleBorder }}
            className="w-1.5 h-6 mr-2.5"
          ></div>
          <h4 className=" text-sm text-wrap p-0"> {title} </h4>
        </div>
      </div>
    </div>
  );
};

export default MixesCard;

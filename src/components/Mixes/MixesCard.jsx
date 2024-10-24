const MixesCard = ({ imgUrl, logo, border, title, titleBorder }) => {
  return (
    <div className={` w-36 h-48   relative shrink-0`}>
      <div className={` relative w-36 h-36  ${border}`}>
        {/* img on back */}
        <img src={imgUrl} className="absolute w-full h-full object-cover " />

        {/* Content */}
        <div className="bg-gradient-to-t from-black/60 w-full h-full absolute flex flex-col justify-between">
          {/* logo */}
          <img src={logo} className="w-3.5 h-3.5 object-cover mt-1.5 ml-1.5" />

          {/* Title */}
          <div className="flex items-end mb-2">
            <div
              style={{ background: titleBorder }}
              className="w-1.5 h-6 mr-2.5"
            ></div>
            <h4 className=" text-sm text-wrap p-0 font-bold"> {title} </h4>
          </div>
        </div>
      </div>

      {/* Describing autores */}
      <div className="pt-2">
        <p className="text-wrap text-sm text-neutral-400">Autor name1, Autor name2, Autor name3...</p>
      </div>
    </div>
  );
};

export default MixesCard;

const MixesCard = ({ imgUrl, logo, border, title, titleBorder, imgRadiu, imgSize,box, autors }) => {
  return (
    <div className={`   relative shrink-0 ${box}`}>
      <Mixes
        border={border}
        imgUrl={imgUrl}
        logo={logo}
        title={title}
        titleBorder={titleBorder}
        imgRadiu={imgRadiu}
        imgSize={imgSize}
      />

      {/* Describing autores */}
      <div className= {`pt-2  `} >
        <p className="text-wrap text-sm text-neutral-400">
          {autors}
        </p>
      </div>
    </div>
  );
};

export default MixesCard;

export const Mixes = ({ imgUrl, logo, border, title, titleBorder, imgRadiu, imgSize }) => {
  return (
    <div className={` relative w-full  ${imgSize}  ${border} `} >
      {/* img on back */}
      <img src={imgUrl} className= {`absolute w-full h-full object-cover ${imgRadiu}`}   />

      {/* Content */}
      <div className="bg-gradient-to-t from-black/60 to-black/10 w-full h-full absolute flex flex-col justify-between">
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
  );
};

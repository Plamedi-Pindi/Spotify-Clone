export default function MusicItemsDisplay({
  imgUrl,
  imgDimension,
  display,
  title,
  adicionalTxt,
  box,
  titleFont,
  AdicTxtFont
}) {
  return (
    <div className={`${box} ${display}`}>
        <div className="">
            <img src={imgUrl} className={`${imgDimension}`} />
        </div>

      <div className="">
        <p className= {` ${titleFont} `}  > {title} </p>
        <p className= {` text-neutral-400 ${AdicTxtFont}`} > {adicionalTxt} </p>
      </div>
    </div>
  );
}

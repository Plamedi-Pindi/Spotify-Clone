export default function MusicItemsDisplay({
  imgUrl,
  imgDimension,
  display,
  title,
  adicionalTxt,
  box
}) {
  return (
    <div className={`${box} ${display}`}>
        <div className="">
            <img src={imgUrl} className={`${imgDimension}`} />
        </div>

      <div>
        <p className="text-base "> {title} </p>
        <p className="text-xs text-neutral-400"> {adicionalTxt} </p>
      </div>
    </div>
  );
}

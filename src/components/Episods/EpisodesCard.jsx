
export default function EpisodesCard({imgUrl, title}) {
  return (
    <div className="w-36">
        <div className="w-36 h-36 bg-neutral-600">
            <img src={imgUrl} alt={`Image of ${title}`} className="h-full w-full object-cover" />
        </div>
        <div className="text-sm text-wrap text-neutral-400 mt-2">
            <p> {title} </p>
        </div>
    </div>
  )
}

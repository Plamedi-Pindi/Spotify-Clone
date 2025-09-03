
export default function EpisodesCard({imgUrl, title, border}) {
  return (
    <div className= {`w-36 lay930:w-40 lay930:h-56 rounded-lg md:hover:bg-neutral-800 lay930:p-2  `} >
        <div className= {`w-36 h-36 bg-neutral-600 rounded-md ${border} `} >
            <img src={imgUrl} alt={`Image of ${title}`} className= {`h-full w-full rounded-md  object-cover ${border}`} />
        </div>
        <div className="text-sm text-wrap text-neutral-400 mt-2">
            <p> {title} </p>
        </div>
    </div>
  )
}

export const PodcastCard = ({imgUrl, title, border, category, author}) => {
  return (
    <div className= {`w-36  `} >
        <div className= {`w-36 h-36 bg-neutral-600 ${border} `} >
            <img src={imgUrl} alt={`Image of ${title}`} className= {`h-full w-full object-cover ${border}`} />
        </div>
        <div translate="no" className="text-sm text-wrap   mt-2">
            <p translate="no" className="text-xs text-green-400 mb-1"> {category} </p>
            <p translate="no" className="mb-1 "> {title} </p>
            <p translate="no" className="text-neutral-400"> {author} </p>
        </div>
    </div>
  )
}

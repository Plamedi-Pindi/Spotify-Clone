
export default function Album({imgUrl, title, name}){
    return (
        <div className=" w-36 flex-shrink-0 md:w-60 md:hover:bg-neutral-800 p-3 rounded-lg duration-300">
            <img 
                src={imgUrl} 
                alt={`Album image`}
                className="w-36 h-36 md:w-56 md:h-56 md:rounded-lg" 
            />
            <p className="text-sm font-medium mt-3 text-white md:text-base"> {title} </p>
            <span className="text-sm font-nomal text-neutral-400 md:hover:underline">Album . {name} </span>
        </div>
    );
}
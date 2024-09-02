
export default function Album({imgUrl, title, name}){
    return (
        <div className=" w-36 flex-shrink-0">
            <img 
                src={imgUrl} 
                alt={`Album image`}
                className="w-36 h-36 " 
            />
            <p className="text-sm font-medium mt-3 text-white"> {title} </p>
            <span className="text-sm font-light text-neutral-400">Album . {name} </span>
        </div>
    );
}
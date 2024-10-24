export default function Button({ children }) {
  return (
    <button className="text-sm block font-medium bg-neutral-800 p-1.5 hover:bg-neutral-700 duration-300 rounded-full pr-3 pl-3">
      {" "}
      {children}{" "}
    </button>
  );
}

export function ButtonTranspatent({ children, background, onActive}) {
  return (
    <button 
      className="p-2 bg-zinc-400/20 hover:bg-zinc-300/20 duration-300  rounded-2xl text-sm pl-3.5 pr-3.5 ml-2 block"
      style={{ 
        background: background
       }}
       onClick={onActive}
    >
      {children}
    </button>
  );
}

export function ButtonNeutral ({children, border, radius, font, background, dimension, focus}) {
  return <button className={`${border} ${radius} ${font} ${background} ${dimension} ${focus}`}> {children} </button>
}
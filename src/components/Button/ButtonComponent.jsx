export default function Button({ children }) {
  return (
    <button className="text-sm font-medium bg-neutral-800 mr-2 p-1.5 hover:bg-neutral-700 duration-300 rounded-full pr-3 pl-3">
      {" "}
      {children}{" "}
    </button>
  );
}

export function ButtonTranspatent({ children }) {
  return (
    <button className="p-2 bg-zinc-500/20 hover:bg-zinc-400/20 duration-300  rounded-2xl text-sm font-medium pl-3 pr-3 ml-3">
      {children}
    </button>
  );
}



export default function SpotMiddleBox({children}){
    return (
        <div
        className={`scrollBehaviour md:bg-neutral-900 md:rounded-lg md:w-95p flex  relative h-full  md:pt-0 md:pb-4 scrollbar-hide `}
      >
        {children}
      </div>
    );
}
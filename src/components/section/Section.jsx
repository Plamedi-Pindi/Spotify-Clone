export default function Section({ children, subTitle, margin, display }) {
    return (
      <section className= {` pb-2 w-95p mx-auto md:w-96p ${margin}`} >
        <h2 className="text-xl text-white font-bold mb-5 md:text-2xl">
          {subTitle}
        </h2>
  
        <div className= {` ${display} w-full  md:justify-between  scrollbar-hide `}>
          {children}
        </div>
      </section>
    );
  }
  
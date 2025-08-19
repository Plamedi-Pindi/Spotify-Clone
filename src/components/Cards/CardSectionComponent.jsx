export default function CardSection({ children, subTitle, margin }) {
  return (
    <section className= {` pb-2  w-95p  mx-auto md:w-full ${margin}`} >
      <h2 className="text-xl text-white font-bold mb-5 md:text-2xl md:ml-8">
        {subTitle}
      </h2>

      <div className="overflow-x-auto flex w-full whitespace-nowrap space-x-4 md:justify-between md:pl-8 scrollbar-hide">
        {children}
      </div>
    </section>
  );
}

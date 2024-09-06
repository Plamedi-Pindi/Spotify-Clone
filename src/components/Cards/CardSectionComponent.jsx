export default function CardSection({ children, subTitle }) {
  return (
    <section className="mt-4 pb-2 w-95p mx-auto md:w-96p">
      <h2 className="text-xl text-white font-bold mb-5 md:text-2xl">
        {subTitle}
      </h2>

      <ul className="overflow-x-auto flex w-full whitespace-nowrap space-x-4 md:justify-between  scrollbar-hide">
        {children}
      </ul>
    </section>
  );
}

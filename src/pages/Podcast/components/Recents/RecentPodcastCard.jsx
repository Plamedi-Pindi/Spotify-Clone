export default function RecentPodcastCard({ imgUrl, hasNews }) {
  return (
    <div className="relative w-20 h-20 bg-neutral-600 rounded-md mb-4">
      <div className="w-full h-full">
        {/* img */}
        <img
          src={imgUrl}
          alt={`Image of recently played podcast`}
          className="w-full h-full rounded-md  object-cover"
        />

        {/* Dot */}
        <div className={` w-5 h-5 bg-black rounded-full absolute -top-1 -right-1 flex items-center justify-center ${hasNews ? "flex" : "hidden"}`} >
          <div className="w-3.5 h-3.5 rounded-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
}

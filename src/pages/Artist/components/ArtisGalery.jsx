
const ArtisGalery = ({ ArtisImages, margin }) => {
    return (
      <div
        className={`flex snap-x snap-mandatory  overflow-x-scroll scrollbar-hide  ${margin}`}
      >
        {ArtisImages.map((item) => (
          <div>
            <img
              src={item.img}
              key={item.id}
              className="max-w-80 h-80 object-cover snap-always snap-center mr-2 rounded-md"
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default ArtisGalery;
// Components
import MusicItemsDisplay from "../../../components/MusicalItemDisplay/MusicItemsDisplay";
import { ButtonNeutral } from "../../../components/Button/ButtonComponent";

// Icom
import { BsThreeDotsVertical, BsChevronRight } from "react-icons/bs";
import verified from "../../../assets/icons/verified.svg";

import { useNavigate } from "react-router-dom";

// Main function
function ArtistMusicContent({ artist }) {

  let navigate = useNavigate();

  return (
    <div
      className={`w-full h-auto pb-36  scrollbar-hide`}
    >
      {/* Popular section */}
      <section>
        <Subtitle title={"Popular"} />

        <ul>
          <li className="flex justify-between items-center mb-4">
            <div>1</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/PY630AM.jpg`}
              imgDimension={`w-14 h-14 mr-3  object-cover`}
              title={"Oke Mmiri"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
              AdicTxtFont={"text-xs"}
              titleFont={"text-base"}
            />

            <BsThreeDotsVertical className="text-xl text-neutral-400" />
          </li>

          <li className="flex justify-between items-center mb-4">
            <div>2</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/3wN18Jp.jpg`}
              imgDimension={`w-14 h-14 mr-3 object-cover`}
              title={"Wonder"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
              AdicTxtFont={"text-xs"}
              titleFont={"text-base"}
            />

            <BsThreeDotsVertical className="text-xl text-neutral-400" />
          </li>

          <li className="flex justify-between items-center mb-4">
            <div>3</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/9hs8YRc.jpg`}
              imgDimension={`w-14 h-14 mr-3 object-cover`}
              title={"Eu vou orar"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
              AdicTxtFont={"text-xs"}
              titleFont={"text-base"}
            />

            <BsThreeDotsVertical className="text-xl text-neutral-400" />
          </li>

          <li className="flex justify-between items-center mb-4">
            <div>4</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/5zVTQkc.jpg`}
              imgDimension={`w-14 h-14 mr-3 object-cover`}
              title={"Realidade"}
              adicionalTxt={`6,894,693`}
              display={`flex items-center basis-[80%]`}
              AdicTxtFont={"text-xs"}
              titleFont={"text-base"}
            />

            <BsThreeDotsVertical className="text-xl text-neutral-400" />
          </li>
        </ul>
      </section>

      {/* Popular Releases */}
      <section className=" mt-10 mb-10">
        <Subtitle title={"Popular releases"} />

        <div>
          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/HSJkd11.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded-md object-cover`}
            title={"Wonder"}
            adicionalTxt={`2020 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-base font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/nmccSuW.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded-md object-cover`}
            title={"Eyano"}
            adicionalTxt={`Latest release . Single`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-base font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/RJwO12O.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded-md object-cover`}
            title={"Overwhwlming Victory"}
            adicionalTxt={`2024 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-base font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/a26t4Ju.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded-md object-cover`}
            title={"Overwhwlming Victory"}
            adicionalTxt={`2024 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-base font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/HuRHjpS.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded-md object-cover`}
            title={"Overwhwlming Victory"}
            adicionalTxt={`2024 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-base font-normal"}
            box={"mb-5"}
          />
        </div>

        {/* See discography button */}
        <ButtonNeutral
          dimension={"block mx-auto p-1 w-40 mt-10"}
          font={"text-sm"}
          radius={"rounded-full"}
          border={"border border-neutral-600"}
          focus={"  active:text-neutral-500 "}
        >
          {" "}
          See discography{" "}
        </ButtonNeutral>
      </section>

      {/* Featuring  */}
      <section className="mb-4">
        <Subtitle title={`Featuring ${artist.name}`} />

        <div className="flex flex-row  space-x-5 overflow-x-auto scrollbar-hide">
          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/f3E38zi.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />  

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/vnKIhWa.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />  

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/Y63Rqc2.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/9K9d5Al.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center"}
            box={"mb-5  w-40  shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/ojKno3G.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center"}
            box={"mb-5  w-40  shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/5zVTQkc.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center"}
            box={"mb-5  w-40  shrink-0"}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mb-10" onClick={()=> navigate(`/Spotify-Clone/artist/aboutArtist/${artist.id}`)}>
        <Subtitle title={"About"} />

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${artist.img})`,
          }}
          className="bg-yellow-800 w-full h-80 bg-cover bg-center bg-no-repea flex flex-col justify-between p-4 rounded-lg"
        >
          <div className="flex items-center">
            <img src={verified} className="w-6 mr-2" />
            <h2>Verified artist</h2>
          </div>

          <div>
            <h2 className="uppercase  mb-2">
              <span className="text-lg font-bold mr-1">547,451</span>
              Monthly listeners
            </h2>

            <div className="flex items-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                labore minima molestias vitae nu ...
              </p>

              <BsChevronRight className="text-3xl shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* FANS ALSO LIKED */}
      <section>
        <Subtitle title={"Fans also liked"} />

        <div className="flex overflow-x-auto scrollbar-hide space-x-2">
          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/eQ2bWJ6.jpg`}
            imgDimension={`w-36 h-36 mb-2 object-cover rounded-full`}
            title={`Artist Name`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/cRrOsSe.jpg`}
            imgDimension={`w-36 h-36 mb-2 object-cover rounded-full`}
            title={`Artist Name`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/ndkIpcE.png`}
            imgDimension={`w-36 h-36 mb-2 object-cover rounded-full`}
            title={`Artist Name`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />
          
          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/87ykHY9.jpg`}
            imgDimension={`w-36 h-36 mb-2 object-cover rounded-full`}
            title={`Artist Name`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/SlUY9eP.png`}
            imgDimension={`w-36 h-36 mb-2 object-cover rounded-full`}
            title={`Plamedi Pindi`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/K0BPyWp.jpg`}
            imgDimension={`w-36 h-36 mb-2 object-cover rounded-full`}
            title={`Mercy Chinwo`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />
        </div>
      </section>
    </div>
  );
}

const Subtitle = ({ title }) => {
  return <h3 className="text-xl font-bold mb-5"> {title} </h3>;
};

export default ArtistMusicContent;

// Components
import MusicItemsDisplay from "../../../components/MusicalItemDisplay/MusicItemsDisplay";
import { ButtonNeutral } from "../../../components/Button/ButtonComponent";

// Icom
import { BsThreeDotsVertical, BsChevronRight } from "react-icons/bs";
import verified from "../../../assets/icons/verified.svg";

function ArtistMusicContent({ artist, isCrolling }) {
  return (
    <div
      className={`w-full h-91p pb-36 ${
        isCrolling ? "overflow-scroll" : "overflow-hidden"
      } scrollbar-hide`}
    >
      {/* Popular section */}
      <section>
        <Subtitle title={"Popular"} />

        <ul>
          <li className="flex justify-between items-center mb-4">
            <div>1</div>

            <MusicItemsDisplay
              imgUrl={`https://i.imgur.com/PY630AM.jpg`}
              imgDimension={`w-14 h-14 mr-3 `}
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
              imgUrl={`https://i.imgur.com/76UlUVf.jpg`}
              imgDimension={`w-14 h-14 mr-3`}
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
              imgDimension={`w-14 h-14 mr-3`}
              title={"Eu vou orar"}
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
            imgDimension={`w-24 h-24 mr-3 rounded`}
            title={"Wonder"}
            adicionalTxt={`2020 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-lg font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/nmccSuW.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded`}
            title={"Eyano"}
            adicionalTxt={`Latest release . Single`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-lg font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/RJwO12O.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded`}
            title={"Overwhwlming Victory"}
            adicionalTxt={`2024 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-lg font-normal"}
            box={"mb-5"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/HuRHjpS.jpg`}
            imgDimension={`w-24 h-24 mr-3 rounded`}
            title={"Overwhwlming Victory"}
            adicionalTxt={`2024 . Album`}
            display={`flex items-center basis-[80%]`}
            AdicTxtFont={"text-sm"}
            titleFont={"text-lg font-normal"}
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
      <section>
        <Subtitle title={`Featuring ${artist.name}`} />

        <div className="flex flex-row  space-x-5 text-nowra  overflow-x-auto scrollbar-hide">
          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/HSJkd11.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center w-36"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/HSJkd11.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center"}
            box={"mb-5  w-40 shrink-0"}
          />

          <MusicItemsDisplay
            imgUrl={`https://i.imgur.com/HSJkd11.jpg`}
            imgDimension={`w-full h-36 mb-2 object-cover`}
            title={`This is ${artist.name} Radio`}
            display={`flex flex-col justify-center`}
            titleFont={"text-sm font-normal text-center"}
            box={"mb-5  w-40  shrink-0"}
          />
        </div>
      </section>

      {/* ABOUT */}
      <section>
        <Subtitle title={"About"} />

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(https://i.imgur.com/RJwO12O.jpg)`,
          }}
          className="bg-yellow-800 w-full h-80 bg-cover bg-center bg-no-repea flex flex-col justify-between p-3"
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
    </div>
  );
}

const Subtitle = ({ title }) => {
  return <h3 className="text-xl font-bold mb-5"> {title} </h3>;
};

export default ArtistMusicContent;

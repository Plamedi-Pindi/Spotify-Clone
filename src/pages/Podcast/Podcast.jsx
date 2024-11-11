// components
import NavBar from "../../components/Navbar/NavbarComponent";
import RecentPodcastCard from "./components/Recents/RecentPodcastCard";
import CardSection from "../../components/Cards/CardSectionComponent";
import EpisodesCard from "../../components/Episods/EpisodesCard";
import PodcastPreviewCard from "./components/Cards/PodcastPreviewCard";
import { PodcastCard } from "../../components/Episods/EpisodesCard";

// Main function
export default function Podcast({ sideMenu, isMenuOn }) {
  return (
    <div className= {` scrollbar-hide scrollBehaviour pb-32 md:pb-44  h-screen relative ${
      isMenuOn ? "shrink-0 " : "overflow-y-scroll"
    }`} >
      {/* navbar */}
      <NavBar
        page={"Podcast"}
        onClick={sideMenu}
        position={`${isMenuOn ? "" : "fixed"}`}
      />

      {/* Reproduced recently */}
      <section className={` ${!isMenuOn && "mt-20"} mb-4 pl-2 pr-2 flex flex-row flex-wrap justify-between`} >
        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/Oo6jpJ9.jpg"}
          hasNews={true}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/ZXabLM9.jpg"}
          hasNews={false}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/GXqXv2E.jpg"}
          hasNews={false}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/q31QzKI.jpg"}
          hasNews={true}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/g5UVY2j.jpg"}
          hasNews={true}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/k2QdpL4.jpg"}
          hasNews={false}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/9cHsUf5.png"}
          hasNews={true}
        />

        <RecentPodcastCard
          imgUrl={"https://i.imgur.com/gH1gPZd.jpg"}
          hasNews={true}
        />
      </section>

      {/*  */}
      <PodcastPreviewCard
        title={"#197 - Sinais de que você está amadurecendo emoci... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/enLZSF4.jpg"}
        background={"bg-rose-900/60"}
      />

      {/* NEW EPISODES SECTION*/}
      <CardSection subTitle={"New episodes"}>
        <EpisodesCard
          imgUrl={"https://i.imgur.com/k2QdpL4.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/9cHsUf5.png"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/BaDqKgo.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/Oo6jpJ9.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/g5UVY2j.jpg"}
          title={"Autor or podcast thame and something.."}
        />

        <EpisodesCard
          imgUrl={"https://i.imgur.com/IHOxdHN.jpg"}
          title={"Autor or podcast thame and something.."}
        />
      </CardSection>

      {/* NEW EPISODES SECTION*/}
      <CardSection subTitle={"Light of the Mind"} margin={"mt-8"}>
        <PodcastCard
          imgUrl={"https://i.imgur.com/q31QzKI.jpg"}
          category={"Educational"}
          title={"Transformadoscast.."}
          author={"Author name"}
          border={"rounded-xl"}
        />

        <PodcastCard
          imgUrl={"https://i.imgur.com/enLZSF4.jpg"}
          category={"Society & Culture"}
          title={"Transformadoscast.."}
          author={"Author name"}
          border={"rounded-xl"}
        />

        <PodcastCard
          imgUrl={"https://i.imgur.com/hAQa4fe.jpg"}
          category={"Society & Culture"}
          title={"Transformadoscast.."}
          author={"Author name"}
          border={"rounded-xl"}
        />

        <PodcastCard
          imgUrl={"https://i.imgur.com/53tFCfI.jpg"}
          category={"Society & Culture"}
          title={"Transformadoscast.."}
          author={"Author name"}
          border={"rounded-xl"}
        />
      </CardSection>

      {/*  */}
      <PodcastPreviewCard
        title={"Cláudio Duarte - NÃO DESISTA DE SUE CÔNJUG... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/g5UVY2j.jpg"}
        background={"bg-yellow-600/50"}
      />

      {/*  */}
      <PodcastPreviewCard
        title={"Alegria e Bom Humor... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/gH1gPZd.jpg"}
        background={"bg-green-800/50"}
      />

      {/*  */}
      <PodcastPreviewCard
        title={"The Art of Spending Maney... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/GXqXv2E.jpg"}
        background={"bg-blue-900/50"}
      />

      {/*  */}
      <PodcastPreviewCard
        title={"YOU MAST DISCIPLINE YOURSELF - Tom Brady M... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/IHOxdHN.jpg"}
        background={"bg-fuchsia-950/50"}
      />

      {/*  */}
      <PodcastPreviewCard
        title={"if You Want to Change Your Life, Understand This First... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/ZXabLM9.jpg"}
        background={"bg-amber-800/50"}
      />
    </div>
  );
}

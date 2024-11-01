// components
import NavBar from "../../components/Navbar/NavbarComponent";
import RecentPodcastCard from "./components/Recents/RecentPodcastCard";
import CardSection from "../../components/Cards/CardSectionComponent";
import EpisodesCard from "../../components/Episods/EpisodesCard";
import PodcastPreviewCard from "./components/Cards/PodcastPreviewCard";

// Main function
export default function Podcast() {
  return (
    <div className="overflow-y-scroll scrollbar-hide scrollBehaviour pb-32 md:pb-44  h-screen relative">
      {/* navbar */}
      <NavBar page={"Podcast"} />

      {/* Reproduced recently */}
      <section className="mt-20 pl-2 pr-2 flex flex-row flex-wrap justify-between">
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

      <PodcastPreviewCard
        title={"#197 - Sinais de que você está amadurecendo emoci... "}
        category={"Psicologia na prática"}
        imgUrl={"https://i.imgur.com/enLZSF4.jpg"}
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
    </div>
  );
}

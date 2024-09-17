

// COMPONENTS
import NavBar from "../../components/Navbar/NavbarComponent";
import RecentPlay from "../../components/Library/RecentPlay";

// IMAGES
import A1img from "../../assets/imgs/Artists/A1.jpeg";
import MercyImg from "../../assets/imgs/Artists/Mercy-Chinwolk.jpg";
import OmidImg from "../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg";
import WilliamsImg from "../../assets/imgs/Artists/Williams McDowel.jpeg";


export default function Musics({collapse}) {
  return (
    <div>
      <NavBar page={"Music"} />
      <section className="pt-20 ">
        <div className="w-96p block mx-auto flex flex-row flex-wrap justify-between">
          <RecentPlay
            isCollapse={collapse}
            imgUrl={A1img}
            name="Plamedi Pindi"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={MercyImg}
            name="Mercy Chinwo"
          />
          <RecentPlay isCollapse={collapse} imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={WilliamsImg}
            name="Williams McDowell"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={A1img}
            name="Plamedi Pindi"
          />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={MercyImg}
            name="Mercy Chinwo"
          />
          <RecentPlay isCollapse={collapse} imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay
            isCollapse={collapse}
            imgUrl={WilliamsImg}
            name="Williams McDowell"
          />
        </div>
      </section>

      
    </div>
  );
}

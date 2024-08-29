import { ButtonTranspatent } from "../../components/Button/ButtonComponent";
import  RecentPlay  from "../../components/Library/RecentPlay";
import A1img from '../../assets/imgs/Artists/A1.jpeg'
import MercyImg from '../../assets/imgs/Artists/Mercy-Chinwolk.jpg'
import OmidImg from '../../assets/imgs/Artists/omid-armin-_BkjDspEw_k-unsplash (1).jpg'
import WilliamsImg from '../../assets/imgs/Artists/Williams McDowel.jpeg'

export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className=" w-full h-3.8rm flex items-center ">
        <div className="w-95p mx-auto flex flex-row items-center pt-3">
          <div className="w-7 h-7 bg-orange-500 flex justify-center items-center rounded-full text-sm font-bold md:hidden">
            <p>P</p>
          </div>
          <ButtonTranspatent> All</ButtonTranspatent>
          <ButtonTranspatent>Music</ButtonTranspatent>
          <ButtonTranspatent>Podcasts</ButtonTranspatent>
        </div>
      </nav>
      <section className="mt-2 ">
        <div className="w-96p block mx-auto flex flex-row flex-wrap justify-between">
          <RecentPlay imgUrl={A1img} name="Plamedi Pindi" />
          <RecentPlay imgUrl={MercyImg} name="Mercy Chinwo" />
          <RecentPlay imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay imgUrl={WilliamsImg} name="Williams McDowell" />
          <RecentPlay imgUrl={A1img} name="Plamedi Pindi" />
          <RecentPlay imgUrl={MercyImg} name="Mercy Chinwo" />
          <RecentPlay imgUrl={OmidImg} name="Imd Armin" />
          <RecentPlay imgUrl={WilliamsImg} name="Williams McDowell" />
        </div>
      </section>
    </div>
  );
}

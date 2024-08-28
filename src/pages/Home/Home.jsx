import { ButtonTranspatent } from "../../components/Button/ButtonComponent";


export default function Home() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar w-full h-3.8rm rounded-t-lg flex items-center">
        <div className="w-95p mx-auto">
          <ButtonTranspatent> All</ButtonTranspatent>
          <ButtonTranspatent>Music</ButtonTranspatent>
          <ButtonTranspatent>Podcast</ButtonTranspatent>
        </div>
      </nav>
    </div>
  );
}

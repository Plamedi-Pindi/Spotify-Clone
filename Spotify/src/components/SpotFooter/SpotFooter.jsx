// Hooks

// REATCT ICONS ============
import {

} from "react-icons/bs";

export default function SpotFooter() {

  return (
    <footer className="w-full pl-8 pr-8 ">
      <hr className="bg-zinc-900" />
      <div className="w-full  flex mt-12 mb-10 ">
        <div className="flex gap-10">
          <div>
            <h2 className="text-base mb-2 text-white font-bold">Company</h2>
            <ul className="text-sm">
              <li>About</li>
              <li>Jobs</li>
              <li>Rot the Record</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base mb-2 text-white font-bold">Communities</h2>
            <ul className="text-sm">
              <li>For Artists</li>
              <li>Developers</li>
              <li>Advetising</li>
              <li>Investors</li>
              <li>Vendors</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base mb-2 text-white font-bold">Useful links</h2>
            <ul className="text-sm">
              <li>Suport</li>
              <li>Free Mobile App</li>
              <li>Popular by Country</li>
              <li>import your music</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base mb-2 text-white font-bold">Spotify Plans</h2>
            <ul className="text-sm">
              <li>Premium Individual</li>
              <li>Premium Duo</li>
              <li>Premium Family</li>
              <li>Premium Student</li>
              <li>Spotify Free</li>
            </ul>
          </div>

        </div>

        {/*  */}
        <div>
          <iconsDiv />
        </div>
      </div>
      <hr />
    </footer>
  );
}

export const iconsDiv = () => {
  return (
    <div className="w-20 h-20 bg-green-500 rounded-full"></div>
  )
}

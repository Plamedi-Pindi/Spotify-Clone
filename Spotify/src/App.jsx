import MainRouter from "./router/main";
import MediaPlayContext from "./context/MediaPlayContext";

function App() {
  return (
    <>
      <MediaPlayContext>
        <MainRouter />
      </MediaPlayContext>
    </>
  );

}

export default App;

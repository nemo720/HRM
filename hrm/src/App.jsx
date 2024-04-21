import { NavBar } from "./component/NavBar";
import { NavBody } from "./component/NavBody";
// text: fontsize

const App = () => {
  return (
    <div className="bg-white-500 w-full h-screen font-serif flex ">
      {/* <NavBar/> ko truyen noi dung */}
      <NavBar />
      <NavBody></NavBody>
    </div>
  );
};

export default App;

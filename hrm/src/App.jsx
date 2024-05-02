import { NavBar } from "./component/NavBar";
import { NavBody } from "./component/NavBody";
// text: fontsize

const App = () => {
  return (
    <div className="bg-white-500 w-full h-screen m-0 box-border font-serif flex overflow-x-hidden min-w-[1024px]  fixed ">
      {/* <NavBar/> ko truyen noi dung */}
      <NavBar />
      <NavBody></NavBody>
    </div>
  );
};

export default App;

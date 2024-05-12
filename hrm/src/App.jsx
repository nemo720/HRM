import { NavBar } from "./component/NavBar";
import { NavBody } from "./component/NavBody";
import "react-toastify/dist/ReactToastify.css";
import {Slide, ToastContainer} from "react-toastify";
// text: fontsize

const App = () => {
  return (
    <div className="bg-white-500 w-full h-screen m-0 box-border font-serif flex overflow-x-hidden min-w-[1024px]  fixed ">
      {/* <NavBar/> ko truyen noi dung */}
      <NavBar />
      <NavBody></NavBody>
        <ToastContainer transition={Slide} />
    </div>
  );
};

export default App;

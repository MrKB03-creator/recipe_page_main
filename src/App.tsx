import Hero from "./components/Hero";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import imageOmellete from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <>
      <div className="bg-Stone-100 h-auto w-full flex justify-center items-center py-32 max-sm:p-0">
        <div className="bg-White font-body rounded-xl lg:h-auto p-10 lg:w-[800px] md:w-[700px] max-sm:w-full max-sm:h-full max-sm:p-0">
          <img
            src={imageOmellete}
            alt="Omelette"
            className="rounded-lg w-full h-[300px] object-cover max-sm:rounded-none"
          />
          <div className="max-sm:p-10 text-Stone-600 leading-relaxed">
            <Hero />
            <Ingredients />
            <div className="w-full h-[1px] bg-Stone-150 my-8"></div>
            <Instructions />
            <div className="w-full h-[1px] bg-Stone-150 my-8"></div>
            <Nutrition />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

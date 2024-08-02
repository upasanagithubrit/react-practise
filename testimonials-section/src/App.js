import Testimonials from './components/testimonials'
import Reviews from './data'
function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh]
    justify-center bg-gray-200 items-center">

     <div className="text-center ">

     <h1 className="text-4xl font-bold ml-10">Our Testimonials</h1>

      <div className="bg-violet-400 h-[4px] w-[350px] mt-1 mx-auto "></div>
      
      <Testimonials Reviews={Reviews}/>
     </div>
    </div>
  );
}

export default App;

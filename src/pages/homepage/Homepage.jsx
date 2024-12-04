import Navbar from "../../component/navbar/Navbar";
import background from "../../asset/pexels.jpg";
// import {useNavigate} from "react-router-dom";
import Footer from "../../component/footer/Footer";


const Homepage = () =>{
    // const navigate = useNavigate();

    // const handleGetStarted = () => {
    //     navigate('/signUp');
    // };
    return(
        <div className="overflow-x-hidden mt-16 pt-3">
            <Navbar/>
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }}>
                <div className='w-1/2'>
                
                    <h3 className='justify-center text-white p-24'>
                    <span className='font-extrabold text-3xl flex'>Find Artisans With Ease!</span><br/>
                    Find home service providers and/or become a provider to provide services to clients in need of your services.<br/><br/>
                    Our platform helps users research, hire, rate, and review home service handymen such as carpenters, electricians, home painters, and more.
                    ArtisanHub's dream and goal is to create a stress-free platform that connects us where if you need help? you get help!
                    </h3>

                    {/* <div className='flex justify-center w-1/2'>
                        <button
                            onClick={handleGetStarted}
                            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg"
                        >
                            Get Started
                        </button>
                    </div> */}


                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Homepage;


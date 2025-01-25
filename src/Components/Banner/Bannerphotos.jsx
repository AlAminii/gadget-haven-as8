import Bannerphoto from '../../assets/banner.jpg';

const Bannerphotos = () => {
    return (
        <div className="flex justify-center py-5 relative z-10 mb-20">
            <img 
                className="h-96 w-1/2 border-4 p-3 bg-white shadow-lg"
                src={Bannerphoto}
                alt="Banner"
            />
        </div>
    );
};

export default Bannerphotos;
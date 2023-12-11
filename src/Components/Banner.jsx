import Author from "./Author/Author";
import Info from "./Info";

const Banner = () => {
    return (
        <div className="px-2 max-w-6xl mx-auto my-10 lg:py-24">
            <div className="flex-row lg:flex justify-between items-center">
               
                <Info></Info>
                
                
                <Author></Author>
                
            </div>
        </div>
    );
};

export default Banner;
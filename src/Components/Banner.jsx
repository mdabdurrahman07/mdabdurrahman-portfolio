import Author from "./Author/Author";
import Info from "./Info";

const Banner = () => {
    return (
        <div className="p-5 max-w-6xl mx-auto mt-10 lg:pt-52">
            <div className="flex-row lg:flex justify-between items-center">
               
                <Info></Info>
                
                
                <Author></Author>
                
            </div>
        </div>
    );
};

export default Banner;
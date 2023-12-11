import profile from '../../assets/pp/jamil-prof.jpg'
import './author.css'
const Author = () => {
    const animationStyle = {
        animationName: 'img',
        animationDuration: '5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',

    }
    return (
        <div className='flex justify-center my-10 lg:my-0'>
            <img src={profile} alt="" className='w-64 shadow-lg shadow-emerald-500/50' style={{...animationStyle}}/>
        </div>
    );
};

export default Author;
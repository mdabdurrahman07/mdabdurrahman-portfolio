import profile from '../../assets/pp/md_abdur_rahman.jpg'
import './author.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Author = () => {
    const animationStyle = {
        animationName: 'img',
        animationDuration: '5s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',

    }
    return (
        <div className='flex justify-center my-10 lg:my-0' data-aos="fade-down">
            <img src={profile} alt="" className='w-64 shadow-lg shadow-emerald-500/50' style={{...animationStyle}}/>
        </div>
    );
};

export default Author;

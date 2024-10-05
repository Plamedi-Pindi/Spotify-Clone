import logo from '/spotify.png';
import { useNavigate } from 'react-router-dom';

export default function NoPage(){
    const navigate = useNavigate();

    return (
        <div className='h-screen w-full'>
            <div className='flex flex-col justify-center items-center h-full'>
                <img src={logo} alt="Logo" className='w-16 mb-7' />
                <h1 className='text-6xl'>404</h1>
                <p>There is not such page!</p>
                <button 
                    className='text-blue-500 hover:text-blue-600'
                    onClick={()=> navigate("/Spotify-Clone")}
                >Back on site</button>
            </div>
        </div>
    );
}
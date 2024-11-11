import logo from '/logo.png';

//Icons
import { BsPlusCircle, BsPlayCircleFill } from 'react-icons/bs';

export default function RectangularCard({title, description, imgurl}) {
  return (
    <div className="h-36 w-full bg-neutral-900/50 rounded-xl flex ">
        <div className="h-full w-36 bg-pink-800 rounded-l-xl shrink-0 relative">
            <img src={logo} className='w-4 object-cover absolute top-2 left-2' />
        </div>
        <div className='text-wrap p-2 pt-3 text-sm ml-2'>
            <p className='text-neutral-500 mb-0.5'>Playlist</p>
            <h3 className='mb-1'> {title} </h3>
            <p className='text-neutral-500'> {description} </p>

            <div className='flex justify-between mt-2 pr-2 pb-1 items-center'>
                <BsPlusCircle className='text-xl text-neutral-400'/>
                <BsPlayCircleFill className='text-[1.8rem]'/>
            </div>
        </div>
    </div>
  )
}

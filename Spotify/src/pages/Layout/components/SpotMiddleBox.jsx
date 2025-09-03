import { useMediaPlayContext } from '../../../context/MediaPlayContext';

export default function SpotMiddleBox({ children }) {
  const { collapse } = useMediaPlayContext();
  return (
    <div
      className={`scrollBehaviour md:bg-neutral-900 md:rounded-lg md:w-[89.5%] ${!collapse ? 'lay930:w-[56%] lg:w-[60%] xl:w-[68%] ' : ' lay930:w-[91.5%] lg:w-[92%] '}  flex  relative h-full  md:pt-0 md:pb-4 scrollbar-hide hidde `}
    >
      {children}
    </div>
  );
}
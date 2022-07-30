


import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube'
export default function Videos() {

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);


  return (
    <section id="videos" className="scroll-my-[130px] md:scroll-my-[200px]">
      <div className="text-center mt-10 m-5  xl:m-32 ">
        <div className="text-center  ">
          <p className="text-xl md:text-2xl font-bold text-green-600"> Videos</p>
        </div>
        <div className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center 
        gap-5 p-2 mt-5 text-bold  shadow-2xl bg-white rounded-lg">
          <div className='border-2 p-2 bg-green-50'>
            {
              hasWindow && <ReactPlayer url='https://www.youtube.com/watch?v=P27waC05Hdk&t=160s' width={'100%'} height={'360px'} />

            }
            <div className='mt-5'>
              <a href="https://www.youtube.com/watch?v=P27waC05Hdk&t=160s" target="_blank" rel="noreferrer" className=' text-sm font-semibold '>
                How in vitro fertilization (IVF) works</a>
            </div>
          </div>

          <div className='border-2 p-2 bg-green-50'>
            {
              hasWindow && <ReactPlayer url='https://www.youtube.com/watch?v=v1M5ZqTIeTw' width={'100%'} height={'360px'} />

            }
            <div className='mt-5'>
              <a href="https://www.youtube.com/watch?v=v1M5ZqTIeTw" target="_blank" rel="noreferrer" className=' text-sm font-semibold '>
                IVF Process Step by Step ...</a>
            </div>
          </div>
          <div className='border-2 p-2 bg-green-50'>
            {
              hasWindow && <ReactPlayer url='https://www.youtube.com/watch?v=GeigYib39Rs' width={'100%'} height={'360px'} />

            }
            <div className='mt-5'>
              <a href="https://www.youtube.com/watch?v=GeigYib39Rs" target="_blank" rel="noreferrer" className=' text-sm font-semibold '>
                3D animation of how IVF works
              </a>
            </div>
          </div>
          <div className='border-2 p-2 bg-green-50'>
            {
              hasWindow && <ReactPlayer url='https://www.youtube.com/watch?v=3jkxdfj5PeY' width={'100%'} height={'360px'} />

            }
            <div className='mt-5'>
              <a href="https://www.youtube.com/watch?v=3jkxdfj5PeY" target="_blank" rel="noreferrer" className=' text-sm font-semibold '>
                48-Year-Old Woman Delivers a Baby </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
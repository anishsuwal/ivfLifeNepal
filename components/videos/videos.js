import React, { useEffect, useState } from 'react';
import YouTube from 'react-player/youtube';

const videoData = [
  { url: 'https://www.youtube.com/watch?v=P27waC05Hdk&t=160s', title: 'How in vitro fertilization (IVF) works' },
  { url: 'https://www.youtube.com/watch?v=v1M5ZqTIeTw', title: 'IVF Process Step by Step ...' },
  { url: 'https://www.youtube.com/watch?v=GeigYib39Rs', title: '3D animation of how IVF works' },
  { url: 'https://www.youtube.com/watch?v=3jkxdfj5PeY', title: '48-Year-Old Woman Delivers a Baby' },
  { url: 'https://www.youtube.com/watch?v=bslSF89n-2M', title: 'Best IVF services in Nepal' },
  { url: 'https://www.youtube.com/watch?v=flOCcHVfWw4', title: ' Tests And Treatment For Infertility' },
  { url: 'https://www.youtube.com/watch?v=LZHWpM5dJIE', title: 'Pregnancy after Hysteroscopic resection' },
  { url: 'https://www.youtube.com/watch?v=4esJ5w8l6mk', title: 'Triple pregnancy in IVF with 1 spontaneous abortion and ...' },
  { url: 'https://www.youtube.com/watch?v=ntGkwMb4Wis', title: 'Can white vaginal discharge cause infertility?' },

  { url: 'https://www.youtube.com/watch?v=8KLcUegpYQ8', title: 'Pregnancy with pv bleeding. Threatened abortion' },

  { url: 'https://www.youtube.com/watch?v=3Xvjh_FM5F0', title: 'Ovarian hyper stimulation syndrome in ART' },

  { url: 'https://www.youtube.com/watch?v=DJj360nFNOs', title: 'Misconception of public that IVF means pregnancy with donor ' },




  // Add other video URLs and titles here
];

const VideoCard = ({ url, title, hasWindow }) => (
  <div className='border-2 p-2 bg-green-50'>
    {hasWindow && <YouTube url={url} width={'100%'} height={'200px'} />}
    <div className='mt-5'>
      <a href={url} target="_blank" rel="noopener noreferrer" className='text-sm font-semibold'>
        {title}
      </a>
    </div>
  </div>
);

const Videos = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <section id="videos" className="scroll-my-[130px] md:scroll-my-[200px]">
      {/* ... Other content ... */}
      <div className="text-center mt-5 m-5  xl:m-32 ">
        <div className="text-center  ">
          <p className="text-xl md:text-2xl font-bold text-green-600"> Videos</p>
        </div>
      <div className="grid grid-row-1 md:grid-cols-2 lg:grid-cols-6 justify-center items-center gap-3 text-xs p-2 mt-5 text-bold shadow-2xl bg-white rounded-lg">
        {videoData.map((video, index) => (
          <VideoCard key={index} url={video.url} title={video.title} hasWindow={hasWindow} />
        ))}
      </div>
      <div className='mt-5 items-center'>
        <a href="https://www.youtube.com/@Dr-anupama-suwal-gurung/videos" target="_blank" rel="noopener noreferrer" className='text-white text-lg font-bold rounded-lg border p-3 bg-green-500 hover:bg-green-300'>
          More Videos
        </a>
      </div>
      </div>
    </section>
  );
};

export default Videos;

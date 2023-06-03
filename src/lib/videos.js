
const apiKey = process.env.NEXT_PUBLIC_API_KEY

export const getYoutubeVideoById = async (videoId) => {
  const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`);
  
  return res.json();
};


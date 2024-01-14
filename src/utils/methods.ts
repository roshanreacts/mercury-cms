import lz from 'lzutf8';


export const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);

    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata",
    };

    const formattedDate = new Intl.DateTimeFormat("en-IN", options)?.format(date);
    return formattedDate;
  } catch (error) {

  }
};


export const compressJsonToBase64 = (json: any): string => {
  return lz.encodeBase64(lz.compress(json))
}


export const compressBase64ToJson = (content: string): any => {
  return lz.decompress(lz.decodeBase64(content));
}


export default function readTime(content: string) {
  const WPS = 275 / 60

  var images = 0
  const regex = /\w/

  let words = content.split(' ').filter((word: string) => {
    if (word.includes('<img')) {
      images += 1
    }
    return regex.test(word)
  }).length

  var imageAdjust = images * 4
  var imageSecs = 0
  var imageFactor = 12

  while (images) {
    imageSecs += imageFactor
    if (imageFactor > 3) {
      imageFactor -= 1
    }
    images -= 1
  }

  const minutes = Math.ceil(((words - imageAdjust) / WPS + imageSecs) / 60)

  return `${minutes} min`
}
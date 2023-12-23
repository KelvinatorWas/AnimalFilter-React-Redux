type ImageData = {
  imgName:string;
  imgClass:string;
}

const Image = ({ imgName, imgClass }:ImageData) => {
  const src = `url(https://www.randomlists.com/img/animals/${imgName.toLowerCase().replace(/[\s']/g, '_')}.webp)`
  return (
    <div className={imgClass} style={{backgroundImage:src, backgroundSize:"100%", backgroundRepeat:"no-repeat"}}></div>
  )
}

export default Image
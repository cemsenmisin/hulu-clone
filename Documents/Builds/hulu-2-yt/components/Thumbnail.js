import Image from "next/image";

function Thumbnail({ result }) {
    const BASE_URL = "https://image.tmdb.org/t/p/orginal/";
    return (
        <div >
            <Image
             layout='responsive' 
             src={
                `${BASE_URL}${result.backdrop_path || 
                result.poster_path}` || 
                `${BASE_URL}${result.poster_path}`
            }
                height={1080}
                width={1920}
            />
        
            <div>
                <p>{result.overwiew}</p>
            </div>
        </div>
    );
}

export default Thumbnail;


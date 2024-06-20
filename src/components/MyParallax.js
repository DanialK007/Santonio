import { Parallax, Background } from 'react-parallax';
import Zoomer from './Zoomer';


const MyParallax = ({children, image, className, className2}) => (
    <Parallax strength={300} className="">
        <Background className={children.className}>
            {children}
        </Background>
            <Zoomer>
                <img src={image} alt='' className={className}/>    
            </Zoomer>
    </Parallax>
)

export default MyParallax;
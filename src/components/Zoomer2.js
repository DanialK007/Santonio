import useIntersectionObserver from './useIntersectionObserver.js';
import observer from './Zoomer.module.css';

const Zoomer2 = ({ children, className }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${className} ${observer.Zoomer2} ${isVisible ? observer.visible : ''}`}>
            {children}
        </div>
    );
};

export default Zoomer2;
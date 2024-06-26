import useIntersectionObserver from './useIntersectionObserver.js';
import observer from './Observer.module.css';

const Zoomer = ({ children, className }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${className} ${observer.Zoomer} ${isVisible ? observer.visible : ''}`}>
            {children}
        </div>
    );
};

export default Zoomer;
import useIntersectionObserver from './useIntersectionObserverOnce.js';
import observer from './Observer.module.css';

const Upper = ({ children, className }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${className} ${observer.Upper} ${isVisible ? observer.visible : ''}`}>
            {children}
        </div>
    );
};

export default Upper;
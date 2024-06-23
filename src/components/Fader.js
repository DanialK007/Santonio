import useIntersectionObserver from './useIntersectionObserverOnce.js';
import observer from './Observer.module.css';

const Fader = ({ children, className }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <div ref={ref} className={`${className} ${observer.Fader} ${isVisible ? observer.visible : ''}`}>
            {children}
        </div>
    );
};

export default Fader;
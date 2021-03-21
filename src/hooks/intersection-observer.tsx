import {useEffect} from 'react' ;


type IProps = {
  target: any,
  onIntersect: IntersectionObserverCallback,
  threshold?: number,
  rootMargin?: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useIntersectionObserver = (props: IProps) => {
  const {target, onIntersect, threshold = 0.1, rootMargin = '0px'}= props
  useEffect(()=> {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin, 
      threshold
    })

    const current = target.current;

    observer.observe(current);

    return () => observer.unobserve(current);
  })
}

export default useIntersectionObserver;

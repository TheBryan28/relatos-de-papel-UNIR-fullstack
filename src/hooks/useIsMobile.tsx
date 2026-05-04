import { useCallback, useEffect, useState } from 'react';
import { MOBILE_BREAKPOINT } from '../helpers';

const UseMaxMediaQuery = (breakpoint = MOBILE_BREAKPOINT) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
  }, [handleResize]);

  return isMobile;
};

export default UseMaxMediaQuery;

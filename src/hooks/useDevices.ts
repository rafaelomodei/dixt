import useWindowDimensions from './windowDimesionHook';

interface IUseDevices {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function useDevices(): IUseDevices {
  const { width } = useWindowDimensions();

  const BREAKPOINT_MOBILE = 510;
  const BREAKPOINT_TABLET = 1024;

  const isMobile = width <= BREAKPOINT_MOBILE;
  const isTablet = width > BREAKPOINT_MOBILE && width <= BREAKPOINT_TABLET;
  const isDesktop = width > BREAKPOINT_TABLET;

  return { isMobile, isTablet, isDesktop };
}

export default useDevices;

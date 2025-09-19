import { useRef, useState, useCallback, useEffect } from "react";

import { Carousel } from "@fancyapps/ui/dist/carousel/";
import "@fancyapps/ui/dist/carousel/carousel.css";
import { Arrows } from "@fancyapps/ui/dist/carousel/carousel.arrows.js";
import "@fancyapps/ui/dist/carousel/carousel.arrows.css";
import { canUseDOM } from "@fancyapps/ui/dist/utils/canUseDOM.js";
import { isEqual } from "@fancyapps/ui/dist/utils/isEqual.js";

export default function useCarousel(options = {}) {
  const storedOptions = useRef(options);

  const [container, setContainer] = useState(null);
  const [carouselInstance, setCarouselInstance] = useState(undefined);

  const reInit = useCallback(() => {
    if (carouselInstance) {
      carouselInstance.destroy().init();
    }
  }, [carouselInstance]);

  useEffect(() => {
    if (!isEqual(options, storedOptions.current)) {
      storedOptions.current = options;
      reInit();
    }
  }, [options, reInit]);

  useEffect(() => {
    if (canUseDOM() && container) {
      const newCarouselInstance = Carousel(
        container,
        storedOptions.current,{Arrows}
      ).init();

      setCarouselInstance(newCarouselInstance);

      return () => {
        newCarouselInstance.destroy();
      };
    } else {
      setCarouselInstance(undefined);
    }
  }, [container]);

  return [setContainer, carouselInstance];
}
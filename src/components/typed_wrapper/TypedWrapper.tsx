import React, { useRef, useEffect } from "react";
import Typed, { TypedOptions } from "typed.js";
import stylex from "@ladifire-opensource/stylex";
import { CssStyle } from '@ladifire-opensource/stylex/global';

const TypedWrapper: React.FC<Props> = ({ xstyle, options }) => {
  const _xstyle: any = xstyle;
  const typeTarget = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const typed = new Typed((typeTarget.current == null ? "" : typeTarget.current), options);

    return () => {
      typed.destroy();
    }
  }, [options]);

  return <span className={stylex(_xstyle)} ref={typeTarget} />;
}

export interface Props {
  xstyle?: CssStyle,
  options: TypedOptions,
}

export default TypedWrapper;
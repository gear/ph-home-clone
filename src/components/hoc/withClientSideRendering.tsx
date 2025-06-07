import React, {
  ComponentType,
  forwardRef,
  useEffect,
  useState,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefExoticComponent,
} from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

function withClientSideRendering<P>(
  WrappedComponent: ComponentType<P>
): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<any>> {
  const WithCSR = forwardRef<any, P>((props, ref) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) {
      return null;
    }

    // @ts-ignore forwarding the ref
    return <WrappedComponent {...props} ref={ref} />;
  });

  const wrappedName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  WithCSR.displayName = `withClientSideRendering(${wrappedName})`;

  // copy any static methods (like defaultProps) from WrappedComponent
  hoistNonReactStatics(WithCSR, WrappedComponent);

  return WithCSR;
}

export default withClientSideRendering;

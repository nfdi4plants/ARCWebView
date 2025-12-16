import { useEffect, useRef, useState } from "react";

export function useMemoAsync<T>(
  factory: () => Promise<T>,
  deps: React.DependencyList
) {
  const callId = useRef(0);

  const [state, setState] = useState<{
    loading: boolean;
    value?: T;
    error?: Error;
  }>({ loading: true });

  useEffect(() => {
    let active = true;
    const id = ++callId.current;

    setState(prev => ({ ...prev, loading: true }));

    factory()
      .then(value => {
        if (!active || id !== callId.current) return;
        setState({ loading: false, value });
      })
      .catch(error => {
        if (!active || id !== callId.current) return;
        setState({ loading: false, error });
      });

    return () => {
      active = false;
    };
  }, deps);

  return state;
}

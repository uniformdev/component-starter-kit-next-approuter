'use client';

import { createContext, useContext, useState } from "react";

export type ToggleContextProps = {
  show: boolean,
  toggle: () => void,
}

export const ToggleContext = createContext<ToggleContextProps>({
  show: false,
  toggle: () => { },
});

export const ToggleProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [show, setShow] = useState<boolean>(false);

  const toggle = () => {
    setShow(!show);
  }

  return (
    <ToggleContext.Provider value={{ show, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

export const useToggle = () => useContext(ToggleContext);

export const ToggleContent = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { show } = useToggle();

  return (
    <>
      {show && children}
    </>
  )
}

export const HoverContent = ({
  children,
  ...rest
}: React.HTMLProps<HTMLDivElement>) => {
  const { toggle } = useToggle();

  return (
    <div
      onMouseEnter={(event) => {
        toggle();

        if (rest.onMouseEnter) {
          rest.onMouseEnter(event);
        }
      }}
      onMouseLeave={(event) => {
        toggle();

        if (rest.onMouseLeave) {
          rest.onMouseLeave(event);
        }
      }}
    >
      {children}
    </div>
  )
}
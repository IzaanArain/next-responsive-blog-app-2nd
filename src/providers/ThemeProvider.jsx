"use client";

import { ThemeContext } from "@/context/theme/ThemeContext";
import { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (mount) {
    return (
      <div className={theme}>{children}</div>
    )
  }
}

export default ThemeProvider
import { useEffect } from "react";
import { useNuiContext } from "../hooks/UseNuiContext";

export function EventListener() {
  const { status, HandleChangeStatus } = useNuiContext();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      const { status } = e.data;
      status && HandleChangeStatus(status);
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [HandleChangeStatus]);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        HandleChangeStatus(!status);
      }
    };
    if (status) {
      document.addEventListener("keyup", handleKeyUp);
    } else {
      document.removeEventListener("keyup", handleKeyUp);
    }
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [status, HandleChangeStatus]);

  return null;
}

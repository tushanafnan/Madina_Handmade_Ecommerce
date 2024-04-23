import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "Medina's Handmade";
    }
  }, [title]);
};

export default useDocumentTitle;

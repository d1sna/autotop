import { Close } from "@mui/icons-material";
import { ReactNode, useEffect } from "react";

interface DialogProps {
  isDialogOpen: boolean;
  setIsDialogOpen: Function;
  content: ReactNode;
}

function Dialog({
  isDialogOpen = false,
  setIsDialogOpen,
  content,
}: DialogProps) {
  useEffect(() => {
    document.body.style.overflow = isDialogOpen ? "hidden" : "auto";
  }, [isDialogOpen]);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    isDialogOpen && (
      <div>
        <div
          className="overlay absolute top-0 left-0 w-full h-screen bg-black opacity-50 z-50"
          onClick={closeDialog}
        ></div>

        <div className="dialog absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white z-50 rounded-md">
          <div className="flex justify-end m-1">
            {/* <button
              className="fixed self-end hover:text-red-500"
              onClick={closeDialog}
            >
              <Close />
            </button> */}
          </div>
          {content}
        </div>
      </div>
    )
  );
}

export default Dialog;

import { cn } from "@/utils";
import { ComponentProps, useRef } from "react";
import { Button } from "..";

type dialogProps = ComponentProps<"dialog">;
type CustomDialogProps = dialogProps & {
  classNameTrigger?: string;
  triggerName?: string;
  // add as many custom props as you need
};

export const Dialog = ({
  triggerName,
  classNameTrigger,
  className,
  ...props
}: CustomDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        id="dialog"
        className={cn("backdrop:bg-black/50 min-w-96 rounded-md ", className)}
        {...props}
      >
        <div className="dialog-content bg-white  pr-6 p-4">
          {props.children}
          <div className="dialog-footer">
            <button
              autoFocus
              onClick={closeModal}
              className="absolute top-1 right-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
      <Button
        triggerFn={showModal}
        className={cn("bg-slate-900 text-white", classNameTrigger)}
      >
        {triggerName || "Open Dialog"}
      </Button>
    </>
  );
};

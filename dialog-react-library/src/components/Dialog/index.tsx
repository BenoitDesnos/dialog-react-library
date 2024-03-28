import { ComponentProps, useRef } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
type dialogProps = ComponentProps<"dialog">;
type CustomDialogProps = dialogProps & {
  triggerFn: () => void;
  buttonClass?: string;
  buttonType?: "button" | "submit" | "reset";
  buttonLabel?: string;
  // add as many custom props as you need
};

const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const Dialog = ({
  triggerFn,
  buttonLabel,
  buttonClass,
  buttonType = "submit",
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
        className={cn(
          "backdrop:bg-black/50 backdrop-blur-md min-w-96 rounded-md",
          className
        )}
        {...props}
      >
        <div className="pr-6 p-4">
          {props.children}
          <div>
            <button
              autoFocus
              onClick={(e) => {
                e.preventDefault();
                closeModal();
              }}
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
      <button
        onClick={(e) => {
          e.preventDefault();
          triggerFn();
          showModal();
        }}
        type={buttonType}
        className={cn(
          "bg-slate-100 pl-3 pr-3 rounded-md hover:bg-slate-300 transition-all duration-200",
          buttonClass
        )}
      >
        {buttonLabel || "Open Dialog"}
      </button>
    </>
  );
};

import { ComponentProps, useRef } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
type dialogProps = ComponentProps<"dialog">;
type buttonProps = ComponentProps<"button">;

type CustomDialogProps = dialogProps & {
  buttonType?: "button" | "submit" | "reset";
  buttonLabel?: string;
  openButtonProps?: buttonProps;
  closeButtonProps?: buttonProps;
};

const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));

export const Dialog = ({
  buttonLabel,
  className,
  openButtonProps,
  closeButtonProps,
  ...props
}: CustomDialogProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const showModal = () => {
    dialogRef.current?.showModal();
  };
  const closeModal = () => {
    dialogRef.current?.close();
  };

  const handleClick = (callback: () => void) => {
    return (
        userOnClick?: (
          event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void
      ) =>
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        callback();
        if (typeof userOnClick === "function") {
          userOnClick(event);
        }
      };
  };

  const handleOpenClick = handleClick(showModal);
  const handleCloseClick = handleClick(closeModal);

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
              {...closeButtonProps}
              autoFocus
              onClick={handleCloseClick(closeButtonProps?.onClick)}
              type={openButtonProps?.type || "button"}
              className={cn(
                "absolute top-1 right-1",
                closeButtonProps?.className
              )}
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
        {...openButtonProps}
        onClick={handleOpenClick(openButtonProps?.onClick)}
        type={openButtonProps?.type || "submit"}
        className={cn(
          "bg-slate-100 pl-3 pr-3 rounded-md hover:bg-slate-300 transition-all duration-200",
          openButtonProps?.className
        )}
      >
        {buttonLabel || "Open Dialog"}
      </button>
    </>
  );
};

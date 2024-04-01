This library allow you to create dialogs using last html accessibility functionnalities and it's build on top of tailwind css.

The dialog component provided comes in with basic CSS that you can use anywhere in your app by importing ```import "dialog-react-library-bd/style.css"```

you can either override part of that style by using classNames or just ignore that import and make your style from scratch using tailwind or any type of CSS.

The dialog component include open and close functionnalities using html dialog functions.

you can use the dialog component anywhere in your code and it will display the open button.

here is an usage example : 

``` jsx
import { Dialog } from "dialog-react-library-bd";

const handleOpen() =>  {
  console.log("opened")
}
const handleClose () =>  {
  console.log("closed")
}


<Dialog
    openButtonProps={{
      onClick: handleOpen,
      className: "text-black mt-6",
    }}
    closeButtonProps={{
      onClick: handleClose,
    }}
    buttonLabel="Submit"
  >
    {
      isError ? (
        <p className="text-red-500">
          There was an error !.
        </p>
      ) : (
        <p>Succes !</p>
      )
    }
  </Dialog>
```

# API DOCUMENTATION
Note: You can use any [HTML Dialog attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) inside the dialog component eg : 
``` jsx
import { Dialog } from "dialog-react-library-bd";

<Dialog   
    // any dialog props
>
    // {children}
</Dialog>

```

| Name            | Type    | Default | Description                                                                                 |
|-----------------|---------|---------|---------------------------------------------------------------------------------------------|
| buttonLabel    | string  | -       | this prop allows you to display the button label |
| className       | string    | -   | this prop allows you to style the dialog component |
| openButtonProps | ComponentProps<"button">  | -   | this prop allows you to use all props from a button react component (eg: className) and [HTML Button attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) for the opening dialog button |
| closeButtonProps | ComponentProps<"button">  | -   | this prop allows you to use all props from a button react component (eg: className) and [HTML Button attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) for the closing dialog button |
| children | React.DOMAttributes<HTMLDialogElement>.children?: React.ReactNode  | -   | you can take advantage of the classic children prop from react |


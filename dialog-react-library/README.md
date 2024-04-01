This library allow you to create dialogs using last html accessibility functionnalities and it's build on top of tailwind css.

The dialog component provided comes in with basic CSS that you can use anywhere in your app by importing ```import "dialog-react-library-bd/style.css"```

you can either override part of that style by using classNames or just ignore that import and make your style from scratch using tailwind or any type of CSS.

The dialog component include open and close functionnalities using html dialog functions.

you can use the dialog component anywhere in your code and it will display the open button.

here is an usage example : 

``` jsx
`<Dialog
        triggerFn={form.handleSubmit(onSubmit, onError)}
        className={""}
        buttonClass={"text-black mt-6"}
        buttonLabel={"Submit"}
      >
        {
          // error message
          isError ? (
            <p className="text-red-500">
              There was an error creating the employee.
            </p>
          ) : (
            <p>Employee Created!</p>
          )
        }
  </Dialog>
```




| Name            | Type    | Default | Description                                                                                 |
|-----------------|---------|---------|---------------------------------------------------------------------------------------------|
| autoComplete    | string  | -       | This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the [specification](#). |
| autoFocus       | bool    | false   | If true, the input element is focused during the first mount.                              |
import * as React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>((props, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className="rounded-xl border-2 border-cyan-500 px-3 py-2 text-base font-medium text-cyan-500 transition duration-200 hover:bg-cyan-600/5 active:bg-cyan-700/5"
    />
  );
});
Button.displayName = "Button";

export { Button };

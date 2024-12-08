"use client";

import { RxReload } from "react-icons/rx";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  className?: string;
  text?: string;
};

function SubmitButtons({ className = "", text = "submit" }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={`capitalize ${className}`}
      disabled={pending}
      size={"lg"}
    >
      {pending ? (
        <>
          <RxReload className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}

export default SubmitButtons;

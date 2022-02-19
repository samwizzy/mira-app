import React, { memo } from "react";
import { useForm, Controller } from "react-hook-form";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

function CountForm() {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: { count: 0 },
  });

  const onSubmit = () => {
    reset({ count: 0 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth>
          <FormLabel htmlFor="count-field">Count</FormLabel>
          <Controller
            name="count"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="count-field" />
            )}
          />
        </FormControl>
      </form>
    </div>
  );
}

export default memo(CountForm);

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/store";
import { useForm, Controller } from "react-hook-form";
import AppDialog from "src/app/components/AppDialog";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "src/app/components/Button";
import {
  addPostApi,
  updatePostApi,
  postProps,
} from "src/store/slices/crud.slice";

const defaultValues = {
  id: null,
  title: "",
  body: "",
  userId: "",
};

function AddPost() {
  const dispatch = useDispatch();
  const users = useSelector(({ users }: RootState) => users.users);
  const { props, type } = useSelector(({ dialog }: RootState) => dialog);
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });

  useEffect(() => {
    const { data } = props;
    if (data) {
      setValue("id", data.id);
      setValue("title", data.title);
      setValue("body", data.body);
      setValue("userId", data.userId);
    }
  }, [setValue, props]);

  const onSubmit = (data: postProps): void => {
    type === "new" ? dispatch(addPostApi(data)) : dispatch(updatePostApi(data));
    reset({}, { keepValues: false });
  };

  console.log(props, "props");

  return (
    <AppDialog
      title={type === "new" ? "Create post" : "Update post"}
      subtitle="Make a post in a min"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel htmlFor="outlined-title">Title</FormLabel>
          <Controller
            name="title"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="outlined-title" />
            )}
          />
          <FormHelperText>{errors.title && "Title is required"}</FormHelperText>
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel htmlFor="outlined-body">Body</FormLabel>
          <Controller
            name="body"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <OutlinedInput {...field} id="outlined-body" multiline rows={2} />
            )}
          />
          <FormHelperText>{errors.body && "Body is required"}</FormHelperText>
        </FormControl>

        <FormControl fullWidth>
          <FormLabel htmlFor="outlined-user">User</FormLabel>
          <Controller
            name="userId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select {...field} labelId="outlined-user" id="outlined-user">
                {users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          <FormHelperText>{errors.userId && "User is required"}</FormHelperText>
        </FormControl>

        <Button type="submit" sx={{ mt: 4 }}>
          {type === "new" ? "Save" : "Update"}
        </Button>
      </form>
    </AppDialog>
  );
}

export default AddPost;

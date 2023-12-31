import { ErrorMessage } from "@hookform/error-message";
import { Grid } from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";

const ESSimpleTextInput = ({
  name,
  label,
  input_type,
  required,
  isMulti,
  gridValue = {
    xs: 12,
    sm: 6,
  },
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid item {...gridValue}>
      <input
        className="form-control"
        {...register(name, {
          required,
        })}
        id={name}
        autoComplete="off"
        type={input_type}
        placeholder={label}
      />
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <p>{message}</p>}
      />
    </Grid>
  );
};

export default ESSimpleTextInput;

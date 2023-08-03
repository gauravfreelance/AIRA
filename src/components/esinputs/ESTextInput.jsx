import React from "react";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Grid } from "@mui/material";

const ESTextInput = ({
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
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid item {...gridValue}>
      <Controller
        control={control}
        rules={{ required }}
        name={name}
        render={(fields) => {
          return (
            <TextField
              {...fields}
              fullWidth
              id={name}
              autoComplete="off"
              type={input_type}
              variant="outlined"
              placeholder={label}
              isMulti={isMulti}
              rows={10}
            />
          );
        }}
      />
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <p>{message}</p>}
      />
    </Grid>
  );
};

export default ESTextInput;

import React from "react";
import RSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Grid } from "@mui/material";

const ESRselect = ({
  name,
  placeholder,
  required,
  options = [],
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
            <RSelect
              {...fields}
              id={name}
              options={options}
              placeholder={placeholder}
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

export default ESRselect;

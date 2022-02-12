// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  name: string;
  label: string;
  type?: string;
  InputProps?: object;
};

const RHFTextField: React.FC<Props> = ({ name, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField {...field} fullWidth error={!!error} helperText={error?.message} {...other} />
      )}
    />
  );
};

export default RHFTextField;

import React from 'react';
import { FormProvider as Form } from 'react-hook-form';

type Props = {
  children: any;
  onSubmit: any;
  methods: any;
};

const FormProvider: React.FC<Props> = ({ children, onSubmit, methods }) => {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
};

export default FormProvider;

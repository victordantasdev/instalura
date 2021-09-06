import { useState } from 'react';

export function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleSubmit(e) {
      e.preventDefault();
      onSubmit(values);
    },
    handleChange(e) {
      const fieldName = e.target.getAttribute('name');
      const { value } = e.target;

      setValues((currentValues) => (
        {
          ...currentValues,
          [fieldName]: value,
        }
      ));
    },
  };
}

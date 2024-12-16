interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: string
    placeholder: string
    onChange?: (...args: any) => any
  }
  
  export function Textfield({ htmlFor, label, type = 'text', value, placeholder = 'text', onChange = () => {} }: FormFieldProps) {
    return (
      <>
        <label htmlFor={htmlFor}>
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          id={htmlFor}
          name={htmlFor}
          value={value}
          placeholder={placeholder}
        />
      </>
    )
  }
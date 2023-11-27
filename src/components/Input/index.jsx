import { Container } from "./styles";
import CurrencyInput from 'react-currency-masked-input';

// eslint-disable-next-line react/prop-types
export function Input({ icon: Icon, type, ...rest }) {

  return (
    <Container>
      {Icon && < Icon size={20} />}
      {type === 'select' ? (
        <select {...rest} />
      ) : type === 'currency' ? (
        <CurrencyInput {...rest} />
      ) : (
        <input type={type} {...rest} />
      )}

    </Container>
  )
}
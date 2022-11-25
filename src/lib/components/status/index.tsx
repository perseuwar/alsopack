import { StatusBloqueada, StatusCriada, StatusDisponivel } from './style';

export default function Status({ status }) {
  let result = <p>vazio</p>;

  switch (status) {
    case 'disponivel':
      result = <StatusDisponivel>Disponivel</StatusDisponivel>;
      break;
    case 'criada':
      result = <StatusCriada>Criada</StatusCriada>;
      break;
    case 'bloqueada':
      result = <StatusBloqueada>Bloqueada</StatusBloqueada>;
      break;
  }

  return result;
}

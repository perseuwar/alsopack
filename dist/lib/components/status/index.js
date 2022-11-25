import { jsx as _jsx } from "react/jsx-runtime";
import { StatusBloqueada, StatusCriada, StatusDisponivel } from './style';
export default function Status({ status }) {
    let result = _jsx("p", { children: "vazio" });
    switch (status) {
        case 'disponivel':
            result = _jsx(StatusDisponivel, { children: "Disponivel" });
            break;
        case 'criada':
            result = _jsx(StatusCriada, { children: "Criada" });
            break;
        case 'bloqueada':
            result = _jsx(StatusBloqueada, { children: "Bloqueada" });
            break;
    }
    return result;
}

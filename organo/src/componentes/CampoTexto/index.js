import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderMinificada = `${props.placeholder}...`;

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        value={props.valor}
        required={props.obrigatorio}
        placeholder={placeholderMinificada}
      />
    </div>
  );
};

export default CampoTexto;

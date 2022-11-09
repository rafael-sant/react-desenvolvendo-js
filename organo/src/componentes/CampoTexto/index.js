import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderMinificada = `${props.placeholder}...`;
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input placeholder={placeholderMinificada} />
    </div>
  );
};

export default CampoTexto;

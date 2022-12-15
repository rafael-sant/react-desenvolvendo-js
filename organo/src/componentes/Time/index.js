import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const css = { background: props.corSecundaria };
  const cssH3 = { borderBottom: `4px solid ${props.corPrimaria}` };
  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={css}>
        <h3 style={cssH3}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            ></Colaborador>
          ))}
        </div>
      </section>
    )
  );
};

export default Time;

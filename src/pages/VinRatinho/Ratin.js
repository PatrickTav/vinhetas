import "./Ratin.css";
import gifRatin from "../../images/gifratin.gif"
const Ratin = () => {
  return (
    <div className="ratin-container">
      <p className="embreve">Em breve</p>
      <div className='provis'>
        <img src={gifRatin} alt="gif" />
      </div>
    </div>
  );
};

export default Ratin;

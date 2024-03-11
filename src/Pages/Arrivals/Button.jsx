import './Arrival.css'


const Button = ({name , onclick}) => {
  return (
    <div className="arrival-btn">
        <button onClick={()=>onclick(name)}>{name}</button>
    </div>
  )
}
export default Button
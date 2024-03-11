const Button = ({icon , name , id=""}) => {
  return (
    <>
    {icon?<button id={id}> 
      {icon} {name}
    </button > : <button id={id}>{name}</button>}
    </>
  );
};
export default Button;


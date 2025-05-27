import './Button.css'

export const Button = ({children, width, height, color}) => {
  return(
    <button
    style={{
      width: width,
      height: height,
      backgroundColor: color && 'white',
      color: color
    }}
    >{children}</button>
  );
}
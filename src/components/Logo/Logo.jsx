import './Logo.css'

export const Logo = ({color, margin}) => {
  return(
      <a style={{margin: margin}}href="" className='logo'>
        <img src={!color ? '../../../public/logo.svg' :
          '../../../public/logo-white.svg'
        } />
        <span style={{color: color}}>Drip Store</span>
      </a>
  );
}
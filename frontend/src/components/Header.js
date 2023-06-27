const Header = ({text, width, height}) => {
  const style = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontSize: 20,
  };

  return (
    <div className="header">
      <p style={style}>{text}</p>
    </div>
  )
}

export default Header

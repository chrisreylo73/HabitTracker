const Header = ({text}) => {
  const style = {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   fontSize: 22,
   fontWeight: 'bolder'
  };

  return (
    <div className="header">
      <p style={style}>{text}</p>
    </div>
  )
}

export default Header

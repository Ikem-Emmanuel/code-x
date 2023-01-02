const Header = () =>
{
  const menu = [
    {url:'#', title:'Home', icon: 'll'}
  ]

  const menuItem = menu.map((item:any, index:any) =>
  {
    <ul key={index}>
      <li>{item.title }</li>
    </ul>
  })


  return (
    <div className="fixed bottom-0 w-full p-5 bg-light">
      {/* {menuItem} */}
      {/* <p> Header</p> */}
    </div>
  );
};

export default Header;

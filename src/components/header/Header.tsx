import Button from "@mui/material/Button"
import "./header.css"
import { useNavigate } from "react-router-dom";
type Props = {
  slug: string;
}
const Header = (props: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.clear();
    navigate("/login")
  }

  return (
    <div className='headerContainer'>
      <h2>GrowMeOrganic</h2>
      {props.slug === "slug" && <Button variant="contained" onClick={handleClick}>Logout</Button>}
    </div>
  )
}

export default Header
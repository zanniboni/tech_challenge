import { HeaderStyle } from "./Homepage.style";
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <>
        <HeaderStyle>iHeartMedia</HeaderStyle>
        <Link to="/musictracker">Music Tracker</Link>
    </>
  )
};

export default Homepage;

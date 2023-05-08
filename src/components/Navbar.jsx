import { signOut } from "firebase/auth"
import { auth } from "../firebase"

const Navbar = () => {
    return (
      <div className="navbar">
        <span className="logo">Man Cave Chat</span>
        <div className="user">
          <img src="https://images.pexels.com/photos/12736878/pexels-photo-12736878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
          <span>Jhon</span>
          <button onClick={()=> signOut(auth)}>logout</button>
        </div>
      </div>
    )
  }
  
  export default Navbar
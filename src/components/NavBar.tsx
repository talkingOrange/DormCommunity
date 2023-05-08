import Link from "next/link";
import { useRouter } from "next/router";
import { BsHouseFill, BsBellFill } from "react-icons/bs";
import {FaUser} from "react-icons/fa"


export default function NavBar() {
  const router = useRouter();
  const menus = [
{
  label : 'Home',
  href : '/',
  icon : BsHouseFill
},
{
  label: 'Notifications',
  href : '/notifications',
  icon : BsBellFill
},
{
  label: 'Profile',
  href: '/users/123',
  icon: FaUser
}

  ];


  return (
    <nav className="col-span-1 h-full pr-4 md:pr-6">
     
      <Link href="/" legacyBehavior>
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about" legacyBehavior>
        <a className={router.pathname === "/about" ? "active" : ""}>about</a>
      </Link>
      <Link href="/contact" legacyBehavior>
        <a className={router.pathname === "/contact" ? "active" : ""}>
          contact
        </a>
      </Link>
    </nav>
  );
}

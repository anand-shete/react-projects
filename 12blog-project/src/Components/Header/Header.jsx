import { LogoutBtn, Container, Logo } from "../index";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";

export default function header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-posts",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to={"/"}>
              <Logo width="100px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((link) =>
              link.active ? (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {link.name}{" "}
                  </button>
                </li>
              ) : null
            )}
            {/* If authStatus is true, only then the 2nd part will be executed */}
            {
              authStatus && (
                <li >
                  <LogoutBtn/>
                </li>
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  );
}

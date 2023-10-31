import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";

const NavBar = () => {
  const session = {};
  return (
    <nav className="flex-between navbar flex ">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => {
            return (
              <Link href={link.href} key={link.key}>
                {link.text}
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="flex-center flex gap-10 ">
        {session ? (
          <>
            <p>UserPhoto</p>
            <Link href="create-project"> share work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default NavBar;

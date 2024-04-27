import Link from "next/link";

function NavBar() {
  return (
    <div className="flex justify-center ...">
      <nav>
        <p className="text-[50px]">BBQ ACCONS</p>
        <ul>
          <li className="py-2 first:pt-0 ... flex justify-start ...">
            <Link href={"/"} className="visited:text-yellow-900 underline">
              Home
            </Link>
          </li>
          <li className="py-2 first:pt-0 ... flex justify-start ...">
            <Link
              href={"/tienda"}
              className="visited:text-yellow-900 underline">
              Tienda
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;

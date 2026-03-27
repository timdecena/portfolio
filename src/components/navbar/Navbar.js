import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import SocialIconButton from "../common/SocialIconButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <div className="panel-surface mx-auto flex h-20 items-center justify-between px-5 sm:px-6">
        <Link to="home" smooth={true} offset={-70} duration={500} className="cursor-pointer">
          <img src={logo} alt="logo" className="h-11 w-auto" />
        </Link>

        <nav className="hidden mdl:block">
          <ul className="flex items-center gap-3 lg:gap-4">
            {navLinksdata.map(({ _id, title, link }) => (
              <li key={_id}>
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-88}
                  duration={500}
                  className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-gray-400 transition hover:bg-white/[0.04] hover:text-white"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="contact"
            smooth={true}
            spy={true}
            offset={-88}
            duration={500}
            className={`${buttonVariants({ variant: "outline" })} hidden mdl:inline-flex`}
          >
            Contact Me
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="mdl:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="mt-8 flex h-full flex-col gap-8">
                <div className="space-y-4">
                  <img className="h-12 w-auto" src={logo} alt="logo" />
                  <p className="text-sm leading-7 text-gray-400">
                    Full Stack Developer focused on backend systems, REST APIs,
                    and polished modern web applications.
                  </p>
                </div>

                <ul className="space-y-3">
                  {navLinksdata.map((item) => (
                    <li key={item._id}>
                      <Link
                        onClick={() => setOpen(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-88}
                        duration={500}
                        className="block cursor-pointer rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-gray-300 transition hover:border-designColor/40 hover:text-white"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                    Find me in
                  </h2>
                  <div className="flex gap-4">
                    <SocialIconButton
                      href="https://www.facebook.com/anthony.decena.39"
                      label="Facebook profile"
                      icon={<FaFacebookF />}
                    />
                    <SocialIconButton
                      href="https://x.com/TimDecena"
                      label="X profile"
                      icon={<FaTwitter />}
                    />
                    <SocialIconButton
                      href="https://www.linkedin.com/in/anthony-decena/"
                      label="LinkedIn profile"
                      icon={<FaLinkedinIn />}
                    />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

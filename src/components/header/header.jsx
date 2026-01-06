import {
  Button,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  MenuIcon,
  Search,
  ShoppingBasket,
  User,
  X,
} from "lucide-react";

export default function Header() {
  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden container mx-auto md:flex items-center justify-between text-gray-medium">
        <h3 className="text-deep-navy">Bandage</h3>
        <div className="flex items-center gap-8">
          <Button>Home</Button>
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-1 transition-colors 
              ${open ? "text-deep-navy" : "text-gray-medium"}
            `}
                >
                  Shop
                  {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </PopoverButton>

                <PopoverPanel
                  anchor="bottom"
                  className="flex flex-col bg-white mt-1.5 z-20"
                >
                  <div className="grid grid-cols-3">
                    <div className="col-span-2 p-12 flex items-center justify-between gap-12">
                      <div>
                        <p className="link text-deep-navy pb-4">Kadın</p>
                        <ul className="link space-y-3 text-gray-medium">
                          <li>
                            <a href="">Bags </a>
                          </li>
                          <li>
                            <a href="">Belts </a>
                          </li>
                          <li>
                            <a href="">Cosmetics </a>
                          </li>
                          <li>
                            <a href="">Hats </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="link text-deep-navy pb-4">Erkek</p>
                        <ul className="link space-y-3 text-gray-medium">
                          <li>
                            <a href="">Bags </a>
                          </li>
                          <li>
                            <a href="">Belts </a>
                          </li>
                          <li>
                            <a href="">Cosmetics </a>
                          </li>
                          <li>
                            <a href="">Hats </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          <Button>About</Button>
          <Button>Blog</Button>
          <Button>Contact</Button>
          <Button>Pages</Button>
        </div>
        <div className="flex items-center text-blue-primary gap-4">
          <div className="flex items-center gap-2">
            <User />
            <div className="flex items-center gap-2">
              <p className="link"> Login</p>
              <p> / </p>
              <p className="link">Register</p>
            </div>
          </div>

          <Search />
          <div className="flex items-center gap-2">
            <ShoppingBasket />
            <p>1</p>
          </div>
          <div className="flex items-center gap-2">
            <Heart />
            <p>1</p>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="container mx-auto p-2 flex md:hidden items-center justify-between">
        <h3>Bandage</h3>
        <a href="">
          <User />
        </a>
        <a href="">
          <Search />
        </a>
        <a href="">
          <ShoppingBasket />
        </a>

        <div className="md:hidden">
          <Disclosure>
            {({ open }) => (
              <>
                <span className="w-full flex justify-end">
                  <DisclosureButton className="p-2">
                    {open ? <X /> : <MenuIcon />}
                  </DisclosureButton>
                </span>

                <DisclosurePanel className="z-20 absolute left-0 w-full bg-white">
                  <div className="flex flex-col gap-4 p-4 text-gray-medium">
                    <a href="#">Home</a>
                    <a href="#">Product</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}

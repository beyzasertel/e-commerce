import {
  Button,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Search,
  ShoppingBasket,
  User,
} from "lucide-react";

export default function Example() {
  return (
    <div className="container mx-auto flex items-center justify-between text-gray-medium">
      <h3 className="text-deep-navy">Bandage</h3>
      <div className="flex items-center">
        <Button className="">Home</Button>
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

              <PopoverPanel anchor="bottom" className="flex flex-col">
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
  );
}

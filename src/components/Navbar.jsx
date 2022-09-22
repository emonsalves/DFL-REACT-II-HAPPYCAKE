import { Disclosure, Menu } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"

const navigation = [
  { name: "Home", linkTo: "/", current: false },
  { name: "Contact", linkTo: "/Contact", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-red-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://cdn-icons-png.flaticon.com/512/2016/2016099.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://cdn-icons-png.flaticon.com/512/2016/2016099.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        className="text-gray-300 hover:bg-orange-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      >
                        <Link to={item.linkTo}>{item.name}</Link>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3 flex">
                  <h1 className="text-gray-300 pr-6">Happy Cake</h1>

                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://cdn-icons-png.flaticon.com/512/992/992717.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://cdn-icons-png.flaticon.com/512/992/992717.png"
                    alt="Your Company"
                  />
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}

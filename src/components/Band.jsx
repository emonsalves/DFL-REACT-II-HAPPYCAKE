import React from "react"

function Band() {
  return (
    <footer
      className="bg-red-600 bottom-0 w-full fixed py-4
    shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-red-600"
    >
      <span className="text-sm text-gray-500 sm:text-center dark:text-white">
        © 2022 <>Mnslvs™</>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-white sm:mt-0">
        <li>
          <a className="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Band

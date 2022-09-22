import React from "react"

function Footer() {
  return (
    <footer class="p-4   shadow md:flex md:items-center md:justify-between md:p-6 bg-red-600">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <a href="" class="hover:underline">
          Mnslvs™
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6 ">
            About
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" class="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li>
        <li>
          <a href="#" class="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

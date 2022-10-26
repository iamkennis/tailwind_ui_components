import {stripIndent} from "react-codepen-prefill-embed";

const searchNav = stripIndent`
<div class="h-screen bg-sky-300 pt-5">
  <nav class="mx-2 rounded-lg border-rose-200 bg-rose-50 py-4 px-2">
    <div class="container flex flex-wrap items-center justify-between">
      <a
        href="https://tailwindcsscomponents.vercel.app/"
        target="_blank"
        rel="noreferrer"
        class="flex items-center"
      >
        <img
          src="https://placeholderlogo.com/img/placeholder-logo-1.png"
          class="mr-3 h-9"
          alt="VK lOGO"
        />
      </a>
      <form>
        <label
          for="default-search"
          class="sr-only mb-2 text-sm font-medium text-gray-900"
          >Search</label
        >
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
          >
            <svg
              aria-hidden="true"
              class="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full rounded-full border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="Search"
            required
          />
        </div>
      </form>
      <div class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="mr-2 h-6 w-6 text-gray-700"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>

        <button
          type="button"
          class="mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:mr-0"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <img
            class="h-8 w-8 rounded-full"
            src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?s=612x612"
            alt="user photo"
          />
        </button>
        <button
          class="rounded bg-rose-500 py-2 px-4 text-xs font-bold text-white hover:bg-rose-700"
        >
          New Project
        </button>
      </div>
    </div>
  </nav>
</div>
`;

export default searchNav;

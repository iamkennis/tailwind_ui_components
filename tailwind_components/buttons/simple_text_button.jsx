import {stripIndent} from "react-codepen-prefill-embed";

const test1 = stripIndent`<div class="bg-blue-200">
  <div
    class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8"
  >
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block">Sample text</span>
      <span class="block text-indigo-600">Simple paragragh.</span>
    </h2>
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
      <div class="inline-flex rounded-md shadow">
        <a
          href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-900 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
        >
          Click here
        </a>
      </div>
      <div class="ml-3 inline-flex rounded-md shadow">
        <a
          href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
        >
          Click here too, why waiting
        </a>
      </div>
    </div>
  </div>
</div>
`;

export default test1;

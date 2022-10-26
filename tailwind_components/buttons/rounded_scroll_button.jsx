import {stripIndent} from "react-codepen-prefill-embed";

const roundedScrollButton = stripIndent`
<div class="h-screen bg-sky-300">
  <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
    <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
    <div class="inline-flex rounded-full border-2 border-black hover:border-gray-300">
        
    <a
      href="https://tailwindcsscomponents.vercel.app/" target="_blank" rel="noreferrer"
      class="inline-flex flex-col items-center justify-center rounded-full border border-transparent font-bold gap-1 w-28 h-28 bg-rose-400 hover:bg-gray-200">
      <span class="mx-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
  </svg>

  </span>
      <div>Scroll Down</div>
    </a>
  </div>
    </div>
    </div>
  </div>
</div>
`;

export default roundedScrollButton;

import {stripIndent} from "react-codepen-prefill-embed";

const learnmoreCard = stripIndent`
<div class="m-5">
  <div
    class="ml-1.5 flex items-center rounded-t-lg"
    style="width: 317px; height: 132px; background-color: #8ec2f2"
  >
    <div
      class="rounded-full bg-white"
      style="width: 72px; height: 72px; margin: right 15px; margin-left: 50px"
    ></div>
    <svg
      width="35"
      height="40"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#1855CB"
      class="rounded-full bg-white"
      style="position: absolute; left: 95"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
    <div class="ml-4 w-32 font-semibold text-white" style="right: 50px">
      <p>The quick</p>
      <p>over the lazy dog</p>
    </div>
  </div>

  <div
    class="border"
    style="
      border-color: #a9d6ff;
      width: 328px;
      padding-left: 50px;
      height: 253px;
      border-radius: 11px;
    "
  >
    <div
      class="text-content w-44 text-sm font-semibold"
      style="padding-top: 30px; color: #737373"
    >
      - The best products start with Figma
    </div>
    <div
      class="text-content w-40 text-sm font-semibold"
      style="margin-top: 5px; color: #737373"
    >
      - Design with real data
    </div>
    <div
      class="text-content w-48 text-sm font-semibold"
      style="margin-top: 5px; color: #737373"
    >
      - Lightning fast prototyping
    </div>
    <div
      class="text-content w-40 text-sm font-semibold"
      style="margin-top: 5px; color: #737373"
    >
      - Fastest way to organize
    </div>
    <div
      class="text-content w-44 text-sm font-semibold"
      style="margin-top: 5px; color: #737373"
    >
      - Work at the speed of thought.
    </div>
    <div
      class="w-max rounded-lg bg-rose-300 px-4 py-2 font-medium"
      style="margin-top: 5px"
    >
      <a
        href="https://tailwindcsscomponents.vercel.app/"
        target="_blank"
        rel="noreferrer"
        style="color: #1855cb"
        >Learn More</a
      >
    </div>
  </div>
</div>
`;
export default learnmoreCard;

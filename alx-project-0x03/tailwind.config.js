// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // or your actual paths
  ],
  safelist: [
    'hover:bg-red-500/50',
    'hover:bg-blue-500/50',
    'hover:bg-orange-500/50',
    'hover:bg-green-500/50',
    'hover:bg-slate-500/50',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

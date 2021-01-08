module.exports = {
  purge: { mode: "layers", content: ["./public/**/*.html"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      merri: ["Merriweather", "serif"],
      lora: ["Lora", "sans-serif"],
    },
    extend: {
      colors: {
        color1: "#283c63",
        color2: "#928a97",
        color3: "#fbe8d3",
        color4: "#f85f73",
      },
    },
  },
  variants: {},
  plugins: [],
};

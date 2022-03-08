module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        chinarose: "#58020F",
        chinamid: "#6F0100",
        chinalight: "#9F1A1D",
        chinablack: "#3F010B",
        logo: "#46111A",
        chinaplum: "#3B0D34",
        chinaredplum: "#360a11",
        probono: "#d8b4ba",
        chinatrans: "#7c282631",
        backgroundImage: {
          "mobile-back": "url('/Assets/mobile-background1.png')",
        },
      },
    },

    screens: {
      xss: "340px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}

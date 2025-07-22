module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        secondary: '#0056b3',
        accent: '#00CFFF',
        neutral: '#F5F7FA',
      },
      fontFamily: {
        heading: ['Raleway', 'Poppins', 'sans-serif'],
        subheading: ['Nunito', 'Varela Round', 'sans-serif'],
        body: ['Open Sans', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
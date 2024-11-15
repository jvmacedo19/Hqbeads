export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    mounted() {
      this.checkDarkMode();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.checkDarkMode);
    },
    methods: {
      checkDarkMode() {
        this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
      },
    },
  };
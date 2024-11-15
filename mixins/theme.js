export default {
    data() {
      return {
        isDarkMode: false,
      };
    },
    mounted() {
      this.initializeTheme();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.handleSystemThemeChange);
    },
    methods: {
      initializeTheme() {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          this.isDarkMode = storedTheme === 'dark';
        } else {
          this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        this.applyTheme();
      },
      handleSystemThemeChange() {
        if (!localStorage.getItem('theme')) {
          this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
          this.applyTheme();
        }
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
        this.applyTheme();
      },
      applyTheme() {
        document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
      },
    },
  };
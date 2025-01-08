<template>
    <div>
      <iframe 
        src="https://dev.hqbookings.hqbeds.com.br/demo?widget=1" 
        width="100%" 
        scrolling="yes" 
        frameborder="0"
        id="hqbookings" 
        style="overflow: hidden; height: 968px;">
      </iframe>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      // Certifique-se de que o script já foi carregado no index.html ou importado antes.
      if (window.iframeResize) {
        window.iframeResize({ license: "GPLv3", waitForLoad: false }, '#hqbookings');
      } else {
        console.error("iframeResize não está disponível.");
      }
    }
  };
  </script>
  

<style lang="scss" scoped>
#reserva-iframe {
    padding: 5% 10%;
}
</style>
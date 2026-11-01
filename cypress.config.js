const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          
          // 1. Corrección de la estructura de perfil (Estrategia crucial)
          // La clave "password_manager_leak_detection" debe vivir exactamente bajo el objeto "profile"
          launchOptions.preferences.default = {
            ...launchOptions.preferences.default,
            profile: {
              ...launchOptions.preferences.default?.profile,
              "password_manager_leak_detection": false,
              "password_manager_enabled": false,
              "credentials_enable_service": false
            }
          };

          // 2. Desactivar funciones a nivel consola (Argumentos)
          launchOptions.args.push('--disable-features=PasswordLeakDetection,PasswordManager,SafeBrowsing');
          launchOptions.args.push('--disable-notifications');

          // 3. Forzar un entorno completamente aislado (Modo Invitado / Incógnito)
          // Esto evita que Chrome arrastre credenciales filtradas o datos de perfiles previos
          launchOptions.args.push('--guest'); 

          return launchOptions;
        }
      });

      config.baseUrl = "https://www.saucedemo.com/";
      return config;
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true
  }
});

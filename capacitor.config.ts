import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bebida.app',
  appName: 'Bebidas',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

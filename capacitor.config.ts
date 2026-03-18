import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.test.vue',
  appName: 'vueappflow',
  webDir: 'dist',
  plugins: {
    LiveUpdates: {
      appId: 'e68fc88c',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2,
    },
  },
};

export default config;

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        REDIS_URL: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }
  
  export {}
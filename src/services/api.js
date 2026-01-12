import ky from 'ky';

export const api = ky.create({
  prefixUrl: import.meta.env.VITE_SERVER_URL,
  timeout: 30000,
  credentials: 'include',
  retry: { limit: 2 },
  hooks: {
    afterResponse: [
      async (requset, options, response) => {
        console.log(await response.json());
      }
    ]
  }
});

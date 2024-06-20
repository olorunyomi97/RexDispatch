export default function setupAxios(axios, store) {
    axios.interceptors.request.use(
    async  (config) => {

        // console.log(store.getState())
        // const auth = store.getState().auth;
        const token = await localStorage.getItem("token");
        // console.log(auth.user)
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // const businessauth = store.getState().businessauth;
        // console.log(auth.business)
        // if (auth.business) {
        //   config.headers.Authorization = `Bearer ${businessauth.business.token}`;
        // }
  
        return config;
      },
      (err) => Promise.reject(err)
    );
  }
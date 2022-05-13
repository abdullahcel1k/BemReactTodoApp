import axios from "axios";

axios.interceptors.request.use(
 config => {
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkFiZHVsbGFoIiwibmJmIjoxNjUyNDU3NzEzLCJleHAiOjE2NTI1NDQxMTMsImlhdCI6MTY1MjQ1NzcxMywiaXNzIjoiYnVyYXPEsW7EsSBhbmxhbWHEsWRtIiwiYXVkIjoiVG9kb0FwaSJ9.xJrdkWS_x3HSOWKqpOsqJ4xaX_zCEnzWSwwkr8jCU_s";

   config.baseURL = process.env.REACT_APP_API;
   if (token) {
     config.headers.Authorization = `Bearer ${token}`;
   }

   return config;
 },
 err => Promise.reject(err)
);
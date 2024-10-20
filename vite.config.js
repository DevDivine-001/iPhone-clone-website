import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "null-n1",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})


// import { sentryVitePlugin } from "@sentry/vite-plugin";

// export default {
//   plugins: [
//     sentryVitePlugin({
//       telemetry: false,
//     }),
//     // other plugins...
//   ],
// };



// import { sentryVitePlugin } from "@sentry/vite-plugin";
// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react(), sentryVitePlugin({
//     org: "jsm-x9",
//     project: "javascript-react"
//   })],

//   build: {
//     sourcemap: true
//   }
// })
// {
//   "version": 2,
//   "builds": [
//     {
//       "src": "src/index.js",
//       "use": "@vercel/node",
//       "config": { "includeFiles": ["dist/**"] }
//     }
//   ],
//   "routes": [
//     {
//       "src": "/(.*)",
//       "dest": "src/index.js"
//     }
//   ]
// }

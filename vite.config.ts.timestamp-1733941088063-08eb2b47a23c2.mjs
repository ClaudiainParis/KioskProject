// vite.config.ts
import { vitePlugin as remix } from "file:///Users/claudiamattana/Desktop/NewKioskProject/case_studies/alternance/node_modules/.pnpm/@remix-run+dev@2.15.0_@remix-run+react@2.15.0_react-dom@18.3.1_react@18.3.1__react@18.3.1_typ_vakggxsvvxkea42mon7ixjezxu/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Users/claudiamattana/Desktop/NewKioskProject/case_studies/alternance/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.1_sugarss@4.0.1_postcss@8.4.49_/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/claudiamattana/Desktop/NewKioskProject/case_studies/alternance/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.7.2_vite@5.4.11_@types+node@22.10.1_sugarss@4.0.1_postcss@8.4.49__/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig({
  server: { port: 5174 },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true
      }
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvY2xhdWRpYW1hdHRhbmEvRGVza3RvcC9OZXdLaW9za1Byb2plY3QvY2FzZV9zdHVkaWVzL2FsdGVybmFuY2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9jbGF1ZGlhbWF0dGFuYS9EZXNrdG9wL05ld0tpb3NrUHJvamVjdC9jYXNlX3N0dWRpZXMvYWx0ZXJuYW5jZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvY2xhdWRpYW1hdHRhbmEvRGVza3RvcC9OZXdLaW9za1Byb2plY3QvY2FzZV9zdHVkaWVzL2FsdGVybmFuY2Uvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSBcIkByZW1peC1ydW4vZGV2XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZGVjbGFyZSBtb2R1bGUgXCJAcmVtaXgtcnVuL25vZGVcIiB7XG4gIGludGVyZmFjZSBGdXR1cmUge1xuICAgIHYzX3NpbmdsZUZldGNoOiB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjogeyBwb3J0OiA1MTc0IH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZW1peCh7XG4gICAgICBmdXR1cmU6IHtcbiAgICAgICAgdjNfZmV0Y2hlclBlcnNpc3Q6IHRydWUsXG4gICAgICAgIHYzX3JlbGF0aXZlU3BsYXRQYXRoOiB0cnVlLFxuICAgICAgICB2M190aHJvd0Fib3J0UmVhc29uOiB0cnVlLFxuICAgICAgICB2M19zaW5nbGVGZXRjaDogdHJ1ZSxcbiAgICAgICAgdjNfbGF6eVJvdXRlRGlzY292ZXJ5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICB0c2NvbmZpZ1BhdGhzKCksXG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVksU0FBUyxjQUFjLGFBQWE7QUFDcmEsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFRMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsUUFBUSxFQUFFLE1BQU0sS0FBSztBQUFBLEVBQ3JCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLFFBQVE7QUFBQSxRQUNOLG1CQUFtQjtBQUFBLFFBQ25CLHNCQUFzQjtBQUFBLFFBQ3RCLHFCQUFxQjtBQUFBLFFBQ3JCLGdCQUFnQjtBQUFBLFFBQ2hCLHVCQUF1QjtBQUFBLE1BQ3pCO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

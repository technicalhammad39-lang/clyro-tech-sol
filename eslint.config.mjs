import nextConfig from "eslint-config-next"

const config = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "coverage/**"],
  },
  ...nextConfig,
  {
    rules: {
      "react-hooks/refs": "off",
      "react-hooks/set-state-in-effect": "off",
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "warn",
    },
  },
]

export default config

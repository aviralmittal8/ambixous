import nextConfig from "eslint-config-next"

export default [
  ...nextConfig,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": "off",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
]

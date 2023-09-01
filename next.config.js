/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    formServiceID: "service_sux1g8j",
    formTemplateID: "template_o9u407i",
    formUserID: "user_zeFyVEK2N01EyNFo5BO3A",
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;

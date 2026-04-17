/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: '/', destination: '/index.html' },
        { source: '/about', destination: '/about.html' },
        { source: '/blog', destination: '/blog.html' },
        { source: '/contact', destination: '/contact.html' },
        { source: '/project_it', destination: '/project_it.html' },
        { source: '/project_legal', destination: '/project_legal.html' },
        { source: '/service_it', destination: '/service_it.html' },
        { source: '/service_legal', destination: '/service_legal.html' },
        { source: '/team', destination: '/team.html' },
        { source: '/testimonial', destination: '/testimonial.html' },
        { source: '/vocusmart', destination: '/vocusmart.html' },
        { source: '/waizly', destination: '/waizly.html' },
        { source: '/yuplogistic', destination: '/yuplogistic.html' },
        { source: '/404', destination: '/404.html' }
      ],
      afterFiles: [],
      fallback: []
    };
  }
};

export default nextConfig;
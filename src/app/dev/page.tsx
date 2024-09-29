
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Sourav Chhimpa</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Developer Profile</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and skills</p>
              </div>
              <div className="border-t border-gray-200">
                <dl>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Full name</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Sourav Chhimpa</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Title</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Freelance Web Developer</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Hanumangarh, Rajasthan, India</dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Education</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">Poornima University</dd>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">Skills</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Tailwind CSS, JavaScript, React.js, Vite.js, SEO, Figma
                    </dd>
                  </div>
                  <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      Passionate about crafting exceptional digital experiences, I am Sourav Chhimpa, a freelance web developer specializing in HTML, CSS, Tailwind CSS, JavaScript, React.js, and Vite.js. With a keen eye for detail and a commitment to excellence, I bring your ideas to life with fully animated and interactive websites using GSAP and other cutting-edge libraries and frameworks. My expertise extends beyond coding to include SEO optimization and intuitive design with Figma, ensuring your website not only looks amazing but also performs flawlessly.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="https://www.linkedin.com/in/sourav-chhimpa/" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/Souravhere" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="mailto:souravchhimpa1@gmail.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Email</span>
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
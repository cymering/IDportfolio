import React from 'react';
import { Book, GraduationCap, Layout, Mail, MessageSquare, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#eef8f3]">
      {/* Header/Hero Section */}
      <header className="bg-white">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Cecilia Fernández Cymering</h1>
          <div className="space-x-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 grid grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Creating Engaging Learning Experiences
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Instructional Designer specializing in interactive e-learning solutions
              and curriculum development.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition">
              View My Work
            </button>
          </div>
          <div className="relative">
            <img
              src="/Profile_photo-400x400.jpg"
              alt="Workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 gap-12">
            {/* Bio */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <User className="w-6 h-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">About Me</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As an Instructional Designer, I blend creativity with educational psychology 
                to craft meaningful learning experiences. With a passion for innovative 
                teaching methods and technology integration, I specialize in developing 
                engaging e-learning solutions that transform complex information into 
                accessible knowledge.
              </p>
            </div>

            {/* Current Learning */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800">Lifelong Learning</h3>
              </div>

<p className="text-gray-600 leading-relaxed">
I am deeply committed to continuous learning and staying at the forefront of educational advancements, ensuring my work remains innovative and impactful.
            </p>
              <div className="space-y-4">
                <div>
                  Current learning: AI in ID.
                  Tools: VR
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white py-20" id="portfolio">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-16">Featured Projects</h3>
          <div className="grid grid-cols-3 gap-8">
            <PortfolioCard
              image="/business-writing.jpg"
              title="Avoiding Common Business Writing Mistakes"
              description="I created this sample project using Flow, a responsive e-learning authoring tool, for the summer 2024 bootcamp organized by dominKnow and TorranceLearning."
            />
            <PortfolioCard
              image="/eco-explorer.jpg"
              title="Eco-Explorer"
              description="This project was developed using Genially. Is an example of a interactive, gamified activity."
            />
            <PortfolioCard
              image="/communication-course.png"
              title="Communication Course Redesign"
              description="A comprehensive course redesign focusing on effective communication strategies in the workplace."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Let's Work Together</h3>
          <p className="text-xl text-gray-600 mb-8">
            Ready to create amazing learning experiences? Get in touch!
          </p>
          <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition inline-flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Cecilia Fernández Cymering. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function PortfolioCard({ image, title, description }) {
  return (
    <div className="bg-[#eef8f3] rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default App;
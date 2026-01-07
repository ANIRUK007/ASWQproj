import React from 'react';
import { Music, Sparkles, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-bold tracking-wider text-gray-800 mb-4">
              JAHANJI MEDITATION CENTER
            </h1>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000"
              alt="Beach Yoga"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>

          {/* Date Banner */}
          <div className="bg-white border-t-4 border-[#6B7F69] py-6 text-center shadow-md rounded-lg">
            <p className="text-gray-600 text-sm mb-1">Next Event</p>
            <p className="text-2xl font-bold text-[#6B7F69] tracking-wide">
              FEB 17th 5:00 PM to 7:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Get Started Card */}
            <Card className="bg-[#6B7F69] text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center justify-center text-center h-full">
                <h3 className="text-2xl font-bold mb-3">Get Started</h3>
                <h4 className="text-xl font-semibold mb-4">With Us</h4>
                <p className="text-white/90 mb-6 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
                </p>
                <Button
                  variant="outline"
                  className="bg-white text-[#6B7F69] hover:bg-gray-100 border-0 px-6 py-2"
                >
                  Get started today
                </Button>
              </CardContent>
            </Card>

            {/* Music Service */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <Music className="w-10 h-10 text-[#6B7F69]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Music</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>

            {/* Dance Service */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <Sparkles className="w-10 h-10 text-[#6B7F69]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Dance</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>

            {/* Free Lessons Service */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-8 flex flex-col items-center text-center h-full">
                <div className="bg-gray-100 p-4 rounded-full mb-4">
                  <GraduationCap className="w-10 h-10 text-[#6B7F69]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Free Lessons</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Time Line
          </h2>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Timeline content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

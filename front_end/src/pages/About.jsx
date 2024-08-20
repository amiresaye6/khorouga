import React from 'react';
import me from '../Assets/my_photo.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 text-center">
                <div className="absolute inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: 'url("https://via.placeholder.com/1920x800")' }}></div>
                <div className="relative z-10">
                    <h1 className="text-6xl font-bold leading-tight mb-8">
                        About <span className="text-primary">Khorouga</span>
                    </h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mx-auto mb-12 px-4">
                        Welcome to <span className="text-primary">Khorouga</span>! We are dedicated to helping you plan and share the perfect day trips.
                        Our platform is designed to inspire your adventures and provide you with all the tools you need to make your trips unforgettable.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-gray-800 text-center">
                <h2 className="text-5xl font-semibold mb-8">Our Mission</h2>
                <p className="text-xl max-w-3xl mx-auto px-4">
                    At <span className="text-primary">Khorouga</span>, our mission is to make planning and sharing day trips effortless and enjoyable.
                    We believe that everyone deserves a perfect day out, whether it’s a relaxing escape or an adventurous journey.
                    Our goal is to provide you with the best recommendations and insights to help you discover amazing experiences.
                </p>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-gray-900 text-center">
                <h2 className="text-5xl font-semibold mb-8">Meet the Team</h2>
                <div className="flex justify-center items-center flex-wrap gap-8">
                    {/* Team Member 1 */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 border border-gray-700 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                        <img
                            src={me || "https://via.placeholder.com/150"}
                            alt="Amir Alsayed"
                            className="w-40 h-40 rounded-full mx-auto mt-6 mb-4 object-cover"
                        />
                        <h3 className="text-3xl font-bold mb-2">Amir Alsayed</h3>
                        <p className="text-lg mb-1">Co-Founder & CEO</p>
                        <p className="text-lg">Full Stack Engineer</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-primary text-center">
                <h2 className="text-5xl font-semibold mb-6">Join Us on Our Journey</h2>
                <p className="text-xl max-w-2xl mx-auto mb-8 px-4">
                    We’re always looking for passionate individuals to join our team or collaborate with us.
                    If you’re interested in partnering with <span className="text-accent">Khorouga</span> or want to learn more about our work,
                    feel free to reach out!
                </p>
                <Link
                    to="/contact"
                    className="inline-block border bg-accent text-white py-4 px-12 rounded-full shadow-lg hover:bg-accent-dark transition-transform transform hover:scale-110 hover:shadow-xl"
                >
                    Get in Touch
                </Link>
            </section>
        </div>
    );
};

export default About;

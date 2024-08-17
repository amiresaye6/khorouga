import React from 'react';
import me from '../Assets/my_photo.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container mx-auto p-6 py-16">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    About <span style={{ color: '#a945e8' }}>Khorouga</span>
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                    Welcome to <span style={{ color: '#a945e8' }}>Khorouga</span>! We are dedicated to helping you plan and share the perfect day trips. 
                    Our platform is designed to inspire your adventures and provide you with all the tools you need to make your trips memorable.
                </p>
            </section>

            {/* Mission Section */}
            <section className="mb-12">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    At <span style={{ color: '#a945e8' }}>Khorouga</span>, our mission is to make planning and sharing day trips effortless and enjoyable. 
                    We believe that everyone deserves a perfect day out, whether it’s a relaxing escape or an adventurous journey. 
                    Our goal is to provide you with the best recommendations and insights to help you discover amazing experiences.
                </p>
            </section>

            {/* Team Section */}
            <section className="mb-12">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                    Meet the Team
                </h2>
                <div className="flex justify-center items-center">
                    {/* Team Member 1 */}
                    <div className="w-full sm:w-1/2 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow p-6 dark:border-gray-700 dark:bg-gray-800 transform transition-all hover:scale-105 hover:shadow-lg">
                        <img
                            src={me || "https://via.placeholder.com/150"}
                            alt="Amir Alsayed"
                            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Amir Alsayed
                        </h3>
                        <p className="text-gray-700 dark:text-gray-400 mb-1">Co-Founder & CEO</p>
                        <p className="text-gray-700 dark:text-gray-400">Full Stack Engineer</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="text-center">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                    Join Us on Our Journey
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                    We’re always looking for passionate individuals to join our team or collaborate with us. 
                    If you’re interested in partnering with <span style={{ color: '#a945e8' }}>Khorouga</span> or want to learn more about our work, 
                    feel free to reach out!
                </p>
                <Link
                    to="/contact"
                    className="inline-block bg-primary text-white py-3 px-8 rounded-lg shadow-lg hover:bg-primary-dark transition-colors"
                >
                    Get in Touch
                </Link>
            </section>
        </div>
    );
};

export default About;

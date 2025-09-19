import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Frontend Development Intern',
      location: 'Remote',
      type: 'Internship',
      description: 'Learn and grow with us while building beautiful user interfaces using React and modern frontend technologies.',
      requirements: [
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Familiarity with React (projects/coursework)',
        'Eagerness to learn and grow',
        'Good communication skills'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Development Intern',
      location: 'Remote',
      type: 'Internship',
      description: 'Get hands-on experience with both frontend and backend technologies in a supportive learning environment.',
      requirements: [
        'Basic programming knowledge in any language',
        'Understanding of web development concepts',
        'Willingness to learn new technologies',
        'Team collaboration skills'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Mentorship Program',
      description: 'Get guidance from experienced professionals',
      icon: '👨‍🏫'
    },
    {
      title: 'Skill Development',
      description: 'Learn cutting-edge technologies and tools',
      icon: '📚'
    },
    {
      title: 'Flexible Learning',
      description: 'Balance work with your studies',
      icon: '⏰'
    },
    {
      title: 'Real Projects',
      description: 'Work on actual products and gain experience',
      icon: '�'
    },
    {
      title: 'Certificate & LOR',
      description: 'Get completion certificate and recommendation letters',
      icon: '🏆'
    },
    {
      title: 'Remote Friendly',
      description: 'Work from anywhere that suits you',
      icon: '🌍'
    }
  ];

  return (
    <PageLayout
      title="Start Your Tech Career With Us"
      description="Join our internship and trainee programs designed for students and fresh graduates. Learn, grow, and build your future in technology."
    >
      <div className="space-y-16">
        {/* Company Culture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Why Start Your Career With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <Card.Body className="text-center">
                    <div className="text-4xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Job Openings Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Internship & Trainee Opportunities</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card hoverable>
                  <Card.Body>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                          <div className="flex items-center mr-4">
                            <FaMapMarkerAlt className="mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-1" />
                            {job.type}
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {job.description}
                        </p>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-4">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <Button variant="primary" className="mt-4 md:mt-0">
                        Apply Now
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default Career;
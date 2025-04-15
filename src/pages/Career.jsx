import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import PageLayout from '../components/layout/PageLayout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Career = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our team to build beautiful and performant user interfaces.',
      requirements: [
        '5+ years of experience in React',
        'Strong TypeScript skills',
        'Experience with modern frontend tools'
      ]
    },
    {
      id: 2,
      title: 'Backend Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement scalable backend services.',
      requirements: [
        '3+ years of experience in Node.js',
        'Experience with databases',
        'Knowledge of cloud services'
      ]
    },
    {
      id: 3,
      title: 'Product Designer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create amazing user experiences for our products.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma',
        'Strong portfolio'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Remote Work',
      description: 'Work from anywhere in the world',
      icon: '🌍'
    },
    {
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities',
      icon: '📚'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health benefits',
      icon: '💪'
    },
    {
      title: 'Flexible Hours',
      description: "Work when you're most productive",
      icon: '⏰'
    }
  ];

  return (
    <PageLayout
      title="Join Our Team"
      description="Be part of a team that's building the future of software development."
    >
      <div className="space-y-16">
        {/* Company Culture Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
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
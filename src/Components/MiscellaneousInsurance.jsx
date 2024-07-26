import { motion } from 'framer-motion';
import { AiFillHeart } from 'react-icons/ai';
import { BiAnalyse } from 'react-icons/bi';
import { BsCartCheck } from 'react-icons/bs';
import { FaHome, FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const MiscellaneousInsurance = () => {
    const pageAnimation = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } }
    };

    const headerAnimation = {
        hidden: { y: -100, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } }
    };

    const cardAnimation = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.5 } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={pageAnimation}
            className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8"
        >
            <motion.h1 variants={headerAnimation} className="text-4xl font-bold text-center mb-12">
                Miscellaneous Insurance
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={cardAnimation}
                        className="bg-white text-black rounded-lg shadow-lg p-6"
                    >
                        <div className="text-4xl mb-4">{card.icon}</div>
                        <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
                        <p>{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const cards = [
    {
        icon: <FaHome />,
        title: 'Home Insurance',
        description: 'Protect your home against unforeseen events such as fire, theft, and natural disasters.'
    },
    {
        icon: <FaUser />,
        title: 'Personal Accident Insurance',
        description: 'Get coverage for accidental death or injury, ensuring financial security for you and your family.'
    },
    {
        icon: <MdMessage />,
        title: 'Travel Insurance',
        description: 'Enjoy peace of mind while traveling with coverage for medical emergencies, trip cancellations, and more.'
    },
    {
        icon: <BiAnalyse />,
        title: 'Health Insurance',
        description: 'Comprehensive health coverage to manage medical expenses and ensure quality healthcare for you and your loved ones.'
    },
    {
        icon: <BsCartCheck />,
        title: 'Pet Insurance',
        description: 'Ensure your pet’s well-being with coverage for veterinary expenses and other pet-related emergencies.'
    },
    {
        icon: <AiFillHeart />,
        title: 'Life Insurance',
        description: 'Provide financial security for your loved ones with a range of life insurance policies tailored to your needs.'
    }
];

export default MiscellaneousInsurance;

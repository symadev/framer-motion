
import { motion } from "framer-motion";

const FadeSlideInExample = () => {
  const cardData = [
    {
      title: "Shoes",
      image:"https://media.istockphoto.com/id/185246744/photo/sports-shoe.jpg?s=612x612&w=0&k=20&c=d3KKioU6TLO_iyUdA0f-1BxKxBByR_8tU0I6FpMZzX8=",
      description: "If a dog chews shoes, whose shoes does he choose?",
      delay: 0
    },
    {
      title: "Watches",
      image:"https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/product/1726129797130/zip/img/webp/section13-pic1-mb.jpg.webp",
      description: "Premium timepieces for every occasion",
      delay: 0.2
    },
    {
      title: "Backpacks",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKVpMd6INIRCqPHfnV-LxG-D9p1-iqO1Vjg&s",
      description: "Durable bags for all your adventures",
      delay: 0.4
    },
    {
      title: "Headphones",
      image:"https://extremegadgets.com.bd/wp-content/uploads/2024/11/41lArSiD5hL.jpg",
      description: "Immersive sound quality that moves with you",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-white mb-6">Featured Products</h1>
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="card bg-gray-800 w-64 shadow-xl m-4"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: card.delay }}
          >
            <figure className="px-4 pt-4">
              <img
                src={card.image}
                alt="images"
                className="rounded-lg w-full h-32 object-cover"
              />
            </figure>
            <div className="card-body p-4 items-center text-center">
              <h2 className="card-title text-lg text-white">{card.title}</h2>
              <p className="text-sm text-gray-300">{card.description}</p>
              <div className="card-actions mt-2">
                <button className="btn btn-sm btn-primary">Buy Now</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FadeSlideInExample;




// এই অংশটি বলে দিচ্ছে এলিমেন্ট শুরুতে কেমন অবস্থায় থাকবে:

// opacity: 0 → এলিমেন্টটি শুরুতে একদম অদৃশ্য (স্বচ্ছ) থাকবে।

// y: 50 → এলিমেন্টটি নিচের দিকে ৫০ পিক্সেল সরানো থাকবে (মানে একটু নিচে থাকবে)।

// scale: 0.95 → এলিমেন্টটি ৫% ছোট হবে মূল আকৃতির তুলনায়।

//  animate={{ opacity: 1, y: 0, scale: 1 }}
//  এই অংশটি বলে এলিমেন্টটি কেমন দেখাবে এনিমেশন শেষে:

// opacity: 1 → পুরোপুরি দৃশ্যমান হয়ে যাবে।

// y: 0 → আবার মূল অবস্থানে ফিরে আসবে (আর নিচে থাকবে না)।

// scale: 1 → আসল সাইজে ফিরে আসবে (১০০% স্কেল)।

//  transition={{ duration: 0.7, ease: 'easeOut' }}
//  এই অংশটি বলে এনিমেশন কত সময় ধরে চলবে আর কেমন গতিতে হবে:

// duration: 0.7 → পুরো এনিমেশন ০.৭ সেকেন্ড সময় নিবে।

// ease: 'easeOut' → এই টাইমিং ফাংশনটি শুরুতে দ্রুত এবং শেষে ধীরে ধীরে এনিমেশন শেষ করে, ফলে সফট আর প্রাকৃতিক লাগে।
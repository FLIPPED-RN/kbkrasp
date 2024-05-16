'use client'

import React, { useState, useEffect } from 'react';

function Footer({ initialShuffledString }) {
    const [shuffledString, setShuffledString] = useState(initialShuffledString);

    useEffect(() => {
        const interval = setInterval(() => {
            setShuffledString(shuffleString(randomString));
        }, 700); 

        return () => clearInterval(interval);
    }, []);

    const randomString = "1o3fun10va8hev"; // The string with random characters

    // Function to shuffle the characters in the string randomly
    const shuffleString = (str) => {
        const arr = str.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        return arr.join('');
    };

    return (
        <>
            <div className="flex items-center justify-center w-[1100px] mx-auto border-[#ffffff] border px-5 rounded-2xl h-[120px] mt-[100px] mb-10 xs:w-[370px] xs:h-[80px] sm:w-[550px] sm:h-[110px] md:w-[750px] lg:w-[950px] lg:h-[150px] xl:w-[1150px]">
                <div className='text-center'>
                    <p className="font-mono xs:text-[12px] md:text-xl">powered by {shuffledString}</p>
                    <p className='mt-2 font-mono xs:text-[12px] md:text-xl'>2024</p>
                </div>
            </div>
        </>
    );
}

Footer.getInitialProps = async () => {
    const randomString = "1o3fun10va8hev";
    const shuffledString = shuffleString(randomString);
    return { initialShuffledString: shuffledString };
};

export default Footer;
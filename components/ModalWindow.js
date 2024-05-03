'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ModalWindow() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('isFirstVisit1');

        if(!isFirstVisit){
            setIsOpenModal(true);
            localStorage.setItem('isFirstVisit1', 'no');
        }
    }, []);

    const handleClose = () => {
        setIsOpenModal(false);
    }

    return(
        <>
            {isOpenModal && (
                <div className='absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50'>
                    <div className='relative p-5 shadow-2xl z-50 flex flex-col items-center border xs:w-[370px] rounded-lg border-[#6e2fba] bg-black'>
                        <Image 
                            src={'/rasplogo-vesn.jpg'}
                            width={100}
                            height={100}
                            alt="Логотип расписания"
                        />
                        <p className='text-center font-mono mb-[70px]'>Привет, это сайт Расписание занятий для КБК, мы очень долго писали этот проект, и Мы решили, что этот проект будет анонимный и никто не узнает кто его написал, один человек этим всем владеет :) Теперь ты точно будешь знать какие у тебя пары! <br /> Версия: 2.5 (beta) - все подробности в нашей официальной группе телеграмма :)</p>
                        <button onClick={handleClose} className='mb-[20px] border border-[#6e2fba] px-[100px] py-[20px] rounded-lg bg-[#6e2fba] hover:bg-none'>Продолжить</button>
                    </div>
                    <div className='absolute inset-0 bg-black opacity-50 blur backdrop-blur-lg'></div>
                </div>
            )}
        </>
    );
}
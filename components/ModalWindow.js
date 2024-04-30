'use client'

import { Truculenta } from 'next/font/google';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ModalWindow() {

    const [isOpenModal, setIsOpenModal] = useState(false)

    useEffect(() => {
        const isFirstVisit = localStorage.getItem('isFirstVisit');

        if(!isFirstVisit){
            setIsOpenModal(true);
            localStorage.setItem('isFirstVisit', 'no');
        }
    }, []);

    const handleClose = () => {
        setIsOpenModal(false);
    }

    return(
        <div className='absolute flex items-center justify-center z-50 inset-96'>
            {isOpenModal && (
                <>
                    <div className=' relative p-5 shadow-2xl z-50 flex flex-col items-center border xs:w-[370px] rounded-lg border-[#6e2fba] backdrop-blur-md'>
                        <h1 className='text-center text-[30px] mb-[20px] font-mono'>Добро пожаловать!</h1>
                        <Image 
                            src={'/rasplogo.jpg'}
                            width={100}
                            height={100}
                            alt="Логотип расписания"
                        />
                        <p className='text-center font-mono mb-[70px]'>Сайт еще в разработке, будут добавляться крутые технологии, одна из них пропавшие вещи. Если у вас есть какие-то пожелания, обязательно пишите в бот телеграмма, мы все посмотрим и обязательно внесем изменения в последующих обновлениях :)</p>
                        <button onClick={handleClose} className='mb-[20px] border border-[#6e2fba] px-[100px] py-[20px] rounded-lg bg-[#6e2fba] hover:bg-none'>Продолжить</button>
                    </div>
                    <div className='absolute inset-0 bg-black opacity-50 blur backdrop-blur-lg'></div>
                </>
            )}
        </div>
      )
      
}
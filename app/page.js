'use client'

import AdComponent from '@/components/AdComponent';
import ModalWindow from '@/components/ModalWindow';
import { useState } from 'react';

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [groupData, setGroupData] = useState(null)
  const [isGroupSelected, setIsGroupSelected] = useState(false)
  const [visibleSuggestions, setVisibleSuggestions] = useState(6)
  const groups = [
    "23-ПД-1/2", "23-Р-1", "23-СА-1", "23-ЦА-1", "23-ЦД-1", "23-К-2", "23-ЗМ-2", "22-БД-3", "22-ЗМ-3", "22-К-3",
    "21-ЗМ-4", "23-А-2", "23-ДС-2", "22-А-3", "22-Д-3", "21-А-4", "21-Д-4", "22-Д-4", "23-ИД-2", "23-Р-2", "23-ЦД-2", "22-ИД-3", "22-ЦД-3", "22-Р-3", "21-ИД-4", "21-Р-4", "23-ИСП-2/1", "23-ИСP-2/2", "23-СА-2", "22-ИСP-3", "22-СА-3", "21-ИСP-4", "21-СА-4", "23-ГД-2", "23-П-2", "23-ПД-2/1", "23-ПД-2/2", "23-ПД-2/3", "22-ГД-3", "22-П-3", "22-ПД-3/1", "22-ПД-3/2", "22-ПД-3/3", "21-П-4"
  ];

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsGroupSelected(false)
  };

  const filteredGroups = groups.filter(group =>
    group.toUpperCase().includes(inputValue.toUpperCase())
  ).slice(0, visibleSuggestions); 

  const handleSelectSuggestion = (value) => {
    setInputValue(value);
    setVisibleSuggestions(0);
    setIsGroupSelected(true)
  };

  const fetchData = async () => {
    // Отправка запроса к API
    const response = await fetch(`https://flipped-rn-rasp-backend-5655.twc1.net/api/search?group=${inputValue}`);
    const data = await response.json();
  
    if (response.ok) {
      // Обработка полученных данных
      setGroupData(data);
    } else {
      // Обработка ошибки
      console.error(data.message);
    }
  };

  const handleSearch = () => {
    setGroupData(null); // Сбрасываем данные группы перед новым поиском
    fetchData(); // Выполняем новый поиск
  };

  const increaseVisibleSuggestions = () => {
    setVisibleSuggestions(prevSuggestions => prevSuggestions + 6);
  };

  return (
    <>
      <main className="mx-auto mt-[100px]">
        <div className="relative flex justify-between xs:gap-1 xs:w-[370px] mx-auto sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px]">
          <div>
            <input 
              type="text" 
              value={inputValue}
              onChange={handleInputChange}
              className="border h-[60px] bg-black text-white border-[#6e2fba] rounded-lg px-4 text-xl xs:w-[300px] xs:text-[15px] sm:w-[430px] md:w-[580px] md:text-[18px] lg:w-[750px] xl:w-[900px]"
            />

            {inputValue && (
              <div className="transform mt-2 xs:w-[300px] xs:text-[15px] sm:w-[430px] md:w-[580px] md:text-[18px] lg:w-[750px] xl:w-[900px]">
                <div className={` ${isGroupSelected ? '' : 'border-[#6e2fba] rounded-lg overflow-hidden border bg-black text-white'}`}>
                  {filteredGroups.map((group, index) => (
                    <div 
                      key={index} 
                      className="px-4 py-2 cursor-pointer hover:bg-gray-800"
                      onClick={() => handleSelectSuggestion(group)}
                    >
                      {group}
                    </div>
                  ))}
                  {!isGroupSelected && groups.length > visibleSuggestions && (
                    <div 
                      className="px-4 py-2 cursor-pointer hover:bg-gray-800"
                      onClick={increaseVisibleSuggestions}
                    >
                      Показать еще
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <button className="h-[60px] bg-[#6e2fba] rounded-lg w-[300px] text-2xl hover:bg-[#000000] hover:text-[#6e2fba] transition-all delay-100 hover:border-[#6e2fba] border border-[#6e2fba] xs:w-[60px] xs:text-[15px] sm:w-[110px] md:w-[160px] md:text-[20px] lg:w-[190px] xl:w-[230px]" onClick={handleSearch}>Найти</button>
        </div>
        {/* Отображение данных группы */}
        {groupData && (
          <div className='mt-[50px] flex gap-9 mx-auto flex-col'>
            {Object.keys(groupData).map((day, index) => (
              <div key={index} className='grid border border-[#6e2fba] rounded-2xl py-5 xs:w-[370px] mx-auto xs:px-2 sm:w-[550px] sm:px-3 md:w-[750px] lg:w-[950px] lg:px-5 xl:w-[1150px]'>
                <h1 className='text-3xl text-[#4fcc87]'>{day}</h1>
                <p className='pt-2 pb-7 font-mono'>Дата: <span className='font-bold'>{groupData[day].date}</span></p>
                <ul className='xs:text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
                  {groupData[day].lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className='flex mt-5 border px-3 h-[70px] rounded-md border-[#6e2fba] items-center flex-wrap xs:h-[100px] md:h-[120px]'>
                      <p className='font-mono xs:w-[80px]'>Пара <span className='font-bold text-[#4fcc87]'>{lesson.number}</span></p>
                      <p className='font-mono xs:w-[150px] md:w-[600px] lg:w-[250px]'>Время: <span className='font-bold text-[#4fcc87]'>{lesson.time}</span></p>
                      <p className='font-mono xs:w-[3`0px] md:w-[650px] lg:w-[350px] xl:w-[600px]'>Название: <span className='font-bold text-[#4fcc87]'>{lesson.name}</span></p>
                      <p className='font-mono xs:w-[300px] lg:w-[400px]'>Преподаватель: {lesson.teacher}</p>
                      <p className='font-mono'>Кабинет: <span className='text-[#4fcc87] font-bold'>{lesson.room}</span></p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) || (
          <h1 className='flex justify-center items-center mt-10 border border-[#6e2fba] rounded-lg h-[40px] xs:w-[370px] xs:text-[13px] sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px] mx-auto'>Начните вводить группу и выберите из списка :)</h1>
        )}
      </main>
    </>
  );
}

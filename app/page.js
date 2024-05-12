'use client'

import HappyOpen from '@/components/HappyOpen';
import ModalWindow from '@/components/ModalWindow';
import { useState, useEffect } from 'react';

export default function Home() {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://mc.yandex.ru/metrika/tag.js";
    script.async = true;

    const initScript = document.createElement('script');
    initScript.innerHTML = `
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(97178842, "init", {
           clickmap:true,
           trackLinks:true,
           accurateTrackBounce:true,
           webvisor:true
      });
    `;

    document.body.appendChild(script);
    document.body.appendChild(initScript);

    // Очистка при размонтировании
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(initScript);
    }
  }, []);


  const [inputValue, setInputValue] = useState('')
  const [groupData, setGroupData] = useState(null)
  const [visibleSuggestions, setVisibleSuggestions] = useState(6)
  const [isGroupSelected, setIsGroupSelected] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  

  const groups = [
    "23-А-1", "23-ЗМ-1", "23-ИД-1", "23-ИСП-1", "23-Э-1", "23-П-1", "23-ПД-1/1", "23-ПД-1/2", "23-Р-1", "23-СА-1", "23-ЦА-1", "23-ЦД-1", "23-К-2", "23-ЗМ-2", "22-БД-3", "22-ЗМ-3", "22-К-3", "21-ЗМ-4", "23-А-2", "23-ДС-2", "22-А-3", "22-Д-3", "21-А-4", "21-Д-4", "22-Д-4", "23-ИД-2", "23-Р-2", "23-ЦД-2", "22-ИД-3", "22-ЦД-3", "22-Р-3", "21-ИД-4", "21-Р-4", "23-ИСП-2/1", "23-ИСП-2/2", "23-СА-2", "22-ИСП-3/1", "22-СА-3", "21-ИСП-4", "21-СА-4", "23-ГД-2", "23-П-2", "23-ПД-2/1", "23-ПД-2/2", "23-ПД-2/3", "22-ГД-3", "22-П-3", "22-ПД-3/1", "22-ПД-3/2", "22-ПД-3/3", "21-П-4 (мы не пишем для этой группы расписание)"
  ];


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsGroupSelected(false);
    setVisibleSuggestions(6);
  };

  const filteredGroups = groups.filter(group => {
    const regex = new RegExp(inputValue.split('').join('.*'), 'i');
    return group.match(regex);
  }).slice(0, visibleSuggestions); 

  const handleSelectSuggestion = (value) => {
    if (value !== "21-П-4 (мы не пишем для этой группы расписание)") {
      setInputValue(value);
      setVisibleSuggestions(0);
      setIsGroupSelected(true);
    }
  };

  const fetchData = async () => {
    setIsLoading(true)
  
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
      alert('Упс :( Походу проблема...');
    }, 15000);
  
    // const response = await fetch(`https://flipped-rn-rasp-backend-86ce.twc1.net/api/search?group=${inputValue}`);
    const response = await fetch(`http://localhost:4200/api/search?group=${inputValue}`);
    const data = await response.json();
  
    if (response.ok) {
      setGroupData(data);
      clearTimeout(timeoutId); 
    } else {
      console.error(data.message);
    }
  
    setIsLoading(false); 
  };

  const handleSearch = () => {
    setGroupData(null); 
    fetchData(); 
  };

  const increaseVisibleSuggestions = () => {
    setVisibleSuggestions(prevSuggestions => prevSuggestions + 6);
  };

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split(".");
    return new Date(year, month - 1, day);
  };  

  return (
    <>
      <main className="mx-auto mt-[100px]">
        <ModalWindow />
        <div>
          <HappyOpen />
        </div>
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
                  {filteredGroups.length > 0 ? (
                    <>
                      {filteredGroups.map((group, index) => (
                        <div 
                          key={index} 
                          className={`px-4 py-2 cursor-pointer hover:bg-gray-800 ${group === "21-П-4 (мы не пишем для этой группы расписание)" ? 'opacity-50 cursor-not-allowed' : ''}`}
                          onClick={() => group !== "21-П-4 (мы не пишем для этой группы расписание)" && handleSelectSuggestion(group)}
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
                    </>
                  ) : (
                    !isGroupSelected && (
                      <div className="px-4 py-2">
                        Не найдено
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

          </div>
          <button className="h-[60px] bg-[#6e2fba] rounded-lg w-[300px] text-2xl hover:bg-[#000000] hover:text-[#6e2fba] transition-all delay-100 hover:border-[#6e2fba] border border-[#6e2fba] xs:w-[60px] xs:text-[15px] sm:w-[110px] md:w-[160px] md:text-[20px] lg:w-[190px] xl:w-[230px]" onClick={handleSearch}>Найти</button>
        </div>
        {/* Отображение данных группы */}
        {isLoading ? (
          <div className='flex justify-center mt-[100px]'>Загрузка...</div>
        ) : groupData ? (
          <div className='mt-[50px] flex gap-9 mx-auto flex-col'>
            {Object.keys(groupData).map((day, index) => (
              <div key={index} className='grid border border-[#6e2fba] rounded-2xl py-5 xs:w-[370px] mx-auto xs:px-2 sm:w-[550px] sm:px-3 md:w-[750px] lg:w-[950px] lg:px-5 xl:w-[1150px]'>
                {groupData[day].lessons.every(lesson => lesson.name === 'Пары нет') ? (
                  <>
                    <h1 className='text-3xl text-[#4fcc87]'>{day} <span className='text-sm text-orange-700'>выходной</span></h1>
                    <p className='pt-2 pb-7 font-mono'>Дата: <span className='font-bold'>{formatDate(groupData[day].date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span></p>
                  </>
                ) : (
                  <div>
                    <h1 className='text-3xl text-[#4fcc87]'>{day}</h1>
                    <p className='pt-2 pb-7 font-mono'>Дата: <span className='font-bold'>{formatDate(groupData[day].date).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span></p>
                    <ul className='xs:text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px]'>
                      {groupData[day].lessons.map((lesson, lessonIndex) => (
                        <li key={lessonIndex} className='flex mt-5 border px-3 h-[70px] rounded-md border-[#6e2fba] items-center flex-wrap xs:h-[100px] md:h-[120px]'>
                          <p className='font-mono xs:w-[80px]'>Пара <span className='font-bold text-[#4fcc87]'>{lesson.number}</span></p>
                          <p className='font-mono xs:w-[150px] md:w-[600px] lg:w-[250px]'>Время: <span className='font-bold text-[#4fcc87]'>{lesson.time}</span></p>
                          <p className='font-mono xs:w-[3`0px] md:w-[650px] lg:w-[350px] xl:w-[600px]'>Название: <span className='font-bold text-[#4fcc87]'>{lesson.name}</span></p>
                          {lesson.name !== 'Пары нет' && (
                            <>
                              <p className='font-mono xs:w-[300px] lg:w-[400px]'>Преподаватель: {lesson.teacher}</p>
                              <p className='font-mono'>Кабинет: <span className='text-[#4fcc87] font-bold'>{lesson.room}</span></p>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <h1 className='flex justify-center items-center mt-10 border border-[#6e2fba] rounded-lg h-[40px] xs:w-[370px] xs:text-[13px] sm:w-[550px] md:w-[750px] lg:w-[950px] xl:w-[1150px] mx-auto'>Начните вводить группу и выберите из списка :)</h1>
        )}
      </main>
    </>
  );
}

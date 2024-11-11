import { FaTools } from 'react-icons/fa';
import Image from 'next/image';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto animate-[fadeIn_1s_ease-in]">
        {/* Логотип */}
        <div className="mb-8">
          <Image
            src="/logo.png"
            alt="Логотип клуба"
            width={200}
            height={200}
            className="mx-auto transition-transform duration-300 hover:scale-105"
            style={{ 
              objectFit: 'contain',
              transition: 'all 0.3s ease-in-out'
            }}
            priority
          />
        </div>

        {/* Иконка инструментов */}
        <FaTools className="w-16 h-16 text-gray-300 mx-auto mb-8 animate-bounce" />
        
        {/* Заголовок */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
          Скоро открытие!
        </h1>
        
        {/* Подзаголовок */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Мы работаем над созданием нового сайта нашего клуба
        </p>
        
        {/* Информационный блок */}
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 mb-8 border border-gray-700">
          <p className="text-gray-300">
            Следите за обновлениями в наших социальных сетях
          </p>
        </div>
        
        {/* Футер */}
        <div className="text-gray-500 text-sm">
          <p>© 2024 Название Клуба. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
}

import { FaTools } from 'react-icons/fa';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Иконка инструментов */}
        <FaTools className="w-16 h-16 text-white mx-auto mb-8 animate-bounce" />
        
        {/* Заголовок */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Скоро открытие!
        </h1>
        
        {/* Подзаголовок */}
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Мы работаем над созданием нового сайта нашего клуба
        </p>
        
        {/* Информационный блок */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8">
          <p className="text-blue-50">
            Следите за обновлениями в наших социальных сетях
          </p>
        </div>
        
        {/* Футер */}
        <div className="text-blue-200 text-sm">
          <p>© 2024 Название Клуба. Все права защищены.</p>
        </div>
      </div>
    </div>
  );
}

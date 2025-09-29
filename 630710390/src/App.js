import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-white shadow-md rounded p-8">
        <h1 className="text-2xl font-bold">สวัสดี React</h1>
        <p className="mt-4 text-gray-600">ยินดีต้อนรับสู่แอพพลิเคชัน React ของคุณ</p>
        <button className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">เริ่มต้น</button>
      </header>
    </div>
  );
}

export default App;

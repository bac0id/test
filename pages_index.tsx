import React, { useState } from 'react';

export default function ACMGameSimulator() {
  const [playerStats, setPlayerStats] = useState({
    contest: 50,
    project: 50,
    gpa: 50,
    bagu: 50,
  });
  const [year, setYear] = useState(1);
  const [semester, setSemester] = useState(1);
  const [news, setNews] = useState('欢迎来到 ACM 竞赛选手模拟器！');

  const handleAction = (actionType: string) => {
    switch (actionType) {
      case 'contest':
        setPlayerStats(prevStats => ({ ...prevStats, contest: Math.min(100, prevStats.contest + Math.random() * 10) }));
        setNews('参加了一场比赛，竞赛能力有所提升！');
        break;
      case 'project':
        setPlayerStats(prevStats => ({ ...prevStats, project: Math.min(100, prevStats.project + Math.random() * 10) }));
        setNews('完成了一个项目，项目经验更加丰富！');
        break;
      case 'gpa':
        setPlayerStats(prevStats => ({ ...prevStats, gpa: Math.min(100, prevStats.gpa + Math.random() * 5) }));
        setNews('努力学习，绩点有所进步！');
        break;
      case 'bagu':
        setPlayerStats(prevStats => ({ ...prevStats, bagu: Math.min(100, prevStats.bagu + Math.random() * 7) }));
        setNews('研读经典，八股知识更加扎实！');
        break;
      case 'rest':
        setNews('休息一下，恢复精力！');
        break;
      case 'nextSemester':
        if (semester < 2) {
          setSemester(semester + 1);
          setNews(`进入第 ${year} 年第 ${semester + 1} 学期`);
        } else {
          setYear(year + 1);
          setSemester(1);
          if (year + 1 > 4) {
            setNews('大学四年结束，毕业快乐！');
          } else {
            setNews(`进入第 ${year + 1} 年第 1 学期`);
          }
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">ACM 竞赛选手模拟器</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">角色状态</h2>
        <div className="mb-2">
          <p className="text-gray-600">竞赛能力: {playerStats.contest}</p>
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-blue-500 rounded-full h-2" style={{ width: `${playerStats.contest}%` }}></div>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">项目经验: {playerStats.project}</p>
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 rounded-full h-2" style={{ width: `${playerStats.project}%` }}></div>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-gray-600">绩点: {playerStats.gpa}</p>
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 rounded-full h-2" style={{ width: `${playerStats.gpa}%` }}></div>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">八股掌握: {playerStats.bagu}</p>
          <div className="bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 rounded-full h-2" style={{ width: `${playerStats.bagu}%` }}></div>
          </div>
        </div>
        <p className="text-gray-700">年份: {year} | 学期: {semester}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">行动</h2>
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => handleAction('contest')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">参加比赛</button>
          <button onClick={() => handleAction('project')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">项目实践</button>
          <button onClick={() => handleAction('gpa')} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">学习绩点</button>
          <button onClick={() => handleAction('bagu')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">八股学习</button>
          <button onClick={() => handleAction('rest')} className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded">休息一下</button>
          <button onClick={() => handleAction('nextSemester')} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">下学期</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">消息</h2>
        <p className="text-gray-800">{news}</p>
      </div>
    </div>
  );
}
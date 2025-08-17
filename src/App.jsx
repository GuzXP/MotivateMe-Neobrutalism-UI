import React from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-yellow-100 text-black flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-2xl mx-auto">
        <Header />
        <main>
          <TaskList />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
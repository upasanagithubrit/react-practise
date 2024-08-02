
import react from 'react';
import Todo from './todo.js';
import reactdom from 'react-dom/client';


const root= reactdom.createRoot(document.getElementById('root'));

root.render(<Todo/>);
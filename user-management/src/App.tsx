import React from 'react';
import './App.css';
import Counter from './components/Counter';

function App() {
  let student: string = 'Jeff';
  let age: number = 69;
  let isSmart: boolean = true;

  let students: string[] = ['Joe', 'Biden', 'Harris'];
  let fees: number[] = [12, 45, 78, 12, 45];

  interface Person {
    name: string;
    job?: string;
    employed: string | boolean;
    age: number;
    location?: string | number;
  }

  const person: Person = {
    name: 'Bill Clinton',
    employed: true,
    age: 85,
    location: 55,
  };

  const handleAddUser = (
    firstName: string,
    age: number,
    address: string
  ): number => {
    const total: number = 50;
    console.log(firstName, age, address);
    return age;
  };

  return <Counter></Counter>;
}

export default App;

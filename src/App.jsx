
// import { useState } from 'react';
import './App.css';
import Weather from './Components/WeatherApp/Weather';
// import menudata from './Data';
// import Restaurant from './Components/restaurant/Restaurant'
// import Usereducer from './Components/useReducer/Usereducer';
// import MenuCard from './Components/Resutarnt/MenuCard';
// import Restaurant from './Components/Restaurant';
// import Main from './Components/IncrDecr/Main';

// import TodoApp from "./Components/TodoApplication/TodoApp";
// import TodoAppUsingState from './Components/TodoApplication/TodoAppUsingState';

// import  Reducer  from './Components/IncrDecr/Reducer';
function App() {
  // const [menuData,setMenuData]=useState(menudata)
// const searcusingName=(classs)=>{
//   const updatedName=menuData.filter((ele)=>{
//    return ele.classs===classs;
//   })
//   setMenuData(updatedName)
// }

// const searcusingEmail=(class2)=>{
//   const updatedName2=menuData.filter((ele)=>{
//    return ele.class2===class2;
//   })
//   setMenuData(updatedName2)
// }

  return (
   <div className='App'>
   {/* <Restaurant></Restaurant> */}
   {/* <Usereducer></Usereducer> */}
   {/* <TodoApp></TodoApp> */}
   {/* <TodoAppUsingState></TodoAppUsingState> */}
   {/* <Main></Main>*/}
    {/* <Reducer></Reducer> */}
    {/* <MenuCard menuData={menuData}></MenuCard> */}
    <Weather></Weather>

   </div>
  );
}

export default App;

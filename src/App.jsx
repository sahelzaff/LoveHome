import React from 'react'
// import { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Background from './Components/Background/background'
import Center from './Components/main/center'
import Help from './Components/help/help'
import Review from './Components/Review/review'
import reviewData from './Components/Review/reviewData.js';
// import FAQs from './Components/FAQs/FAQs.jsx'
import Counter from './Components/Counter/Counter.jsx'
const App = () => {
  const review =[{reviewData}]
return (
  <div>
    <Navbar />
    <Background />
    <Center />
    <Help />
    <Review reviews={reviewData} />
    <Counter/>
    {/* <FAQs /> */}
  </div>
)
}

export default App
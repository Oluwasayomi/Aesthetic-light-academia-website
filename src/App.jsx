import './App.css'

import Card from './components/Card'
import Pages from './Pages'

function App() {
  return (
    <div>
      <h4 className="title">For my Light Academia girlies</h4>
      <p className="subtitle">Choose one to experience a different Light Academia inspiration:</p>

        <div className="cards">
        <Card 
        imgSrc="src/assets/Light Academia.jpg"
        imgAlt="Light Academia image" 
        location="🕈 Inner" 
        category="Books Yoga Mindset" 
        title="Light Academia" 
        rating="10/10 Rating"
        description="The main topic behind light academia. It is not just about aesthetic,
        but being able to back that gorgeous look with equally gorgeous mind. Who said being a genius was overrated?"/>

        <Card
        imgSrc="src/assets/Light Academia.jpg" 
        imgAlt="Light Academia image" 
        location="🕈 Outer" 
        category="Accessories Clothing Shoes" 
        title="Light Academia"
        rating="Solid 10/10" 
        description="Your outer look matters just as much as inside. Remember, beauty and brains darling.
        Be absolutely smart and look good doing it."/>

        <Card
        imgSrc="src/assets/Light Academia.jpg" 
        imgAlt="Light Academia image" 
        location="🕈 All" 
        category="Time Resourcefulness Balance" 
        title="Light Academia"
        rating="Perfect!" 
        description="As you're trying you best to fit in with the Light Academia mindset.
        Make sure you're keeping a balance with life as well. Not just being the beauty with brains,
        but also having a great social and financial life.
        You can do it girl!"/>
        </div>

      <Pages/>

    </div>
  )
}

export default App
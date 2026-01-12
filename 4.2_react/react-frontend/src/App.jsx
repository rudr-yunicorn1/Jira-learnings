import './App.css'
import HomeContainer from './containers/HomeContainer'  
import Header from './components/header'
import Counter from './components/Counter'
import NameInput from './components/NameInput'
import EffectDemo from './components/EffectDemo'
import UsersContainer from './containers/UsersContainer'

function App() {
// a function which will return whaterver will be given 
  return ( 
    // return fuinction wil be the one responsible for returning the output on web the jsx
    // <h1> HELLO React</h1>
    //here we can only return only one thing it doesent matter watever it is it should be a single container like 
    // <div>
    //   <h1></h1>
    //   <h1></h1>
    // </div>
    //now here iam passing the two heding but under one div so iti is called one div so it can process
    // everything is component in react but the logic is return under the container
    //we can also import the container from the src 
    // <div>
    //   <HomeContainer /> 
    // </div>
    //HERE THE ABOVE iam importing the container  
    // <div >
    //   <Header />
    // </div>
    // above iam importing the header form component and using it inside the app.jsx

    <div>
      <HomeContainer /> 
      <Header username="Rudresh" />
      <Counter />
       <NameInput />
       <EffectDemo />
       <UsersContainer />
    </div>
    //above we are using the prop functionality in which the rudresh is passed as a paremmeter which is called prop
      // now coming in the props 
//Props = Properties ,Props are like function parameters.

// Props are used to send data from one component to another.
  )
// now iam gonaa use the state andlearn about it 
// useState is a React hook that lets a component:
// store data
// update data
// re-render UI automatically
// in the above return iam also calling the counter component which is using the state 
//above iam also using the Name input component in which i also used the state and it is called 
//controlled component 

// now iam gonna learn and use the useeffect which is useEffect is a React hook used to run side effects.
// it is what which allows the react to comute with the backend 
// anything happens outside of rendering comes under the useefects like api call, facth data etc
// all the response and request work can also be done under effect and all the data feacthing things is also consit in it 
 // the usercontainer is called under the useefect 
}

export default App

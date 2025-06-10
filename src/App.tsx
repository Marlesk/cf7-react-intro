// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
// import Todo from "./components/Todo/Todo.tsx";
//import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import NameChanger from "./components/NameChanger.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
//import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
//import CounterWithReducer from "./components/CounterWithReducer.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";

import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import NameChangerPage from "./pages/NameChangerPage.tsx";

function App() {
  return (
      <>
          {/*<Layout>*/}
          {/*    /!*<ClassComponent/>*!/*/}
          {/*    /!*<FunctionalComponent/>*!/*/}
          {/*    /!*<ArrowFunctionalComponent/>*!/*/}
          {/*    /!*<ArrowFunctionalComponentWithProps*!/*/}
          {/*    /!*    title={"Is an Arrow Functional Component with Props"}*!/*/}
          {/*    /!*    description={"this is a description"}*!/*/}
          {/*    /!*<h1 className="text-center text-2xl font-bold">This is a title</h1>*!/*/}

          {/*    /!*<ClassComponentWithState/>*!/*/}
          {/*    /!*<FunctionalComponentWithState/>*!/*/}
          {/*    /!*<Counter/>*!/*/}
          {/*    /!*<NameChanger/>*!/*/}
          {/*    /!*<CounterWithMoreStates/>*!/*/}
          {/*    /!*<CounterAdvanced/>*!/*/}
          {/*    /!*<CounterWithCustomHook/>*!/*/}
          {/*    /!*<CounterAdvancedWithCustomHook/>*!/*/}
          {/*    /!*<CounterWithReducer/>*!/*/}
          {/*    <Todo/>*/}
          {/*</Layout>*/}
          <BrowserRouter>
              <Layout>
                  <Routes>
                      <Route path="/" element = {<HomePage/>}/>
                      <Route path="name-changer" element={<NameChangerPage/>}/>
                  </Routes>
              </Layout>
          </BrowserRouter>
      </>
  )
}

export default App

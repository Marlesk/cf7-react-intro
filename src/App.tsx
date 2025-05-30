// import ClassComponent from "./components/ClassComponent.tsx";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
//import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import NameChanger from "./components/NameChanger.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
import CounterAdvancedWithCustomHook from "./components/CounterAdvancedWithCustomHook.tsx";
//import ClassComponentWithState from "./components/ClassComponentWithState.tsx";



function App() {
  return (
      <>
          <Layout>
              {/*<ClassComponent/>*/}
              {/*<FunctionalComponent/>*/}
              {/*<ArrowFunctionalComponent/>*/}
              {/*<ArrowFunctionalComponentWithProps*/}
              {/*    title={"Is an Arrow Functional Component with Props"}*/}
              {/*    description={"this is a description"}*/}
              {/*/>*/}
              {/*<h1 className="text-center text-2xl font-bold">This is a title</h1>*/}

              {/*<ClassComponentWithState/>*/}
              {/*<FunctionalComponentWithState/>*/}
              {/*<Counter/>*/}
              {/*<NameChanger/>*/}
              {/*<CounterWithMoreStates/>*/}
              {/*<CounterAdvanced/>*/}
              {/*<CounterWithCustomHook/>*/}
              <CounterAdvancedWithCustomHook/>
          </Layout>
      </>
  )
}

export default App

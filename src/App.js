import React,{Suspense} from 'react';
import {ReactQueryConfigProvider} from "react-query"
import { ReactQueryDevtools } from 'react-query-devtools';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'modern-normalize/modern-normalize.css';

// Import assets
import GlobalStyle from './theme/GlobalStyle';
import List from './pages/List'
import Detail from './pages/Detail'
import Header from './components/Header';
import Loading from './utils/loading';

import './App.css';

const Loader = () => <Loading/>

const queryConfig = {
  suspense: true,
  retry: 0,
  staleTime: 600000,
}

function App() {
  return(
  <ReactQueryConfigProvider config={queryConfig}>
    <Suspense fallback={<Loader />}>
      <Header/>
      <Router className="App">
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Detail} />
      </Router>
    </Suspense>
    <ReactQueryDevtools initialIsOpen={false} />
    <GlobalStyle/>
  </ReactQueryConfigProvider>
  )
}

export default App;

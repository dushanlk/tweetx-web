import React from 'react'
import SearchTweets from '../containers/SearchTweets'
import SearchResult from '../containers/SearchResult'
import ResultStatContainer from '../containers/ResultStatContainer'
import 'typeface-roboto';

const App = () => (
    <div>
        <SearchTweets/>
        <ResultStatContainer/>
        <SearchResult/>
    </div>
)

export default App

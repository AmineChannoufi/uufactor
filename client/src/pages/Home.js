import { Fragment } from 'react';
import Header from "./Header";
import Navigation from './Navigation';

import Services from './Services';
const Home=()=>{
    return(
    <Fragment>
        <Navigation/>
        <Header/>
        <Services/>
    </Fragment>

    )

}
export default Home ;
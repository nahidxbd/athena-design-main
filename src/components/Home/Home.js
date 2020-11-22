import React from 'react';
import Achievements from '../Achievements/Achievements';

import Header from '../Header/Header';
import Pricing from '../Pricing/Pricing';
import Stay from '../Stay/Stay';
import WeDo from '../WeDo/WeDo';
import Mailbox from '../Mailbox/Mailbox'
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <WeDo></WeDo>
           <Stay></Stay>
           <Achievements></Achievements>
           <Pricing></Pricing>
           <Mailbox></Mailbox>
           <Footer></Footer>
          
        </div>
    );
};

export default Home;
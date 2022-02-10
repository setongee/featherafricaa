import './App.css';
import Landing from './sections/landing/landing'
import NavBar from './components/TitleBar/NavBar'
import Info from './sections/information/info'
import Feature from './sections/features/feature/Feature'
import Developer from './sections/developer/Developer'
import Contact from './sections/contact/contact'
import Footer from './sections/footer/footer';

import transfer from './assets/transfer.svg'
import nfp from './assets/nfp.svg'
import bills from './assets/bills.svg'
import withdraw from './assets/withdraw.svg'
import chat from './assets/chat.svg'

const App = () => {

  const featuresData = [

    {
      tag : 'Transfer Money',
      tag2 : 'Transfer Money',
      icon : 'arrow-up-right',
      color : '#004eff',
      header : 'Transfer',
      header2 : ' money easily.',
      subtitle : 'end and receive money from anyone using feather and even to bank accounts.',
      image : transfer,
      position : true
    },
    {
      tag : 'Near Field Payments',
      tag2 : 'ield Payments',
      icon : 'map-pin',
      color : '#FFA700',
      header : 'Perform gps',
      header2 : ' based actions.',
      subtitle : 'You can now find the nearest cash vendor (mobile money agent) on your phone and withdraw without ATM cards.',
      image : nfp,
      position : !true,
    },
    {
      tag : 'Withdraw Cash',
      tag2 : 'Withdraw Cash',
      icon : 'credit-card',
      color : '#D3007A',
      header : 'Withdraw cash',
      header2 : ' quickly & safely.',
      subtitle : 'You can now withdraw your cash from anyone on feather without using a debit card.',
      image : withdraw,
      position : true
    },
    {
      tag : 'Bill Payments',
      tag2 : 'Bill Payments',
      icon : 'send',
      color : '#5001BC',
      header : 'Pay bills, airtime',
      header2 : ' & data purchase.',
      subtitle : 'Initiate bill payments, airtime & data purchases from your customers favorite biller and network provider',
      image : bills,
      position : !true
    },
    {
      tag : 'Chat',
      tag2 : 'In---Chat',
      icon : 'message-circle',
      color : '#003ad6',
      header : 'In-App',
      header2 : ' Messaging : ',
      subtitle : 'enjoy a seamless transaction experience through our in-app communication with your cash vendor.',
      image : chat,
      position : true
    }
    

  ]

  return (

    <div className = 'container'>

      <NavBar/>
      <Landing/>
      {/* <Info/> */}
      
      {
        featuresData.map((feature, index)=> {

          const {tag, tag2, icon, color, header, header2, subtitle, image, position} = feature

          return <Feature key = {index} tag = {tag} tag2 = {tag2} icon = {icon} color = {color} header = {header} header2 = {header2} subtitle = {subtitle} image = {image} position = {position} track = {index} />

        })
      }

      <Contact/>
      <Footer/>
      
    </div>

  );
}

export default App;


import './App.css';
import Landing from './sections/landing/landing'
import NavBar from './components/TitleBar/NavBar'
import Info from './sections/information/info'
import Transfer from './sections/features/transfer/Transfer'

import transfer from './assets/transfer.svg'
import nfp from './assets/nfp.svg'
import bills from './assets/bills.svg'
import withdraw from './assets/withdraw.svg'

const App = () => {

  const featuresData = [

    {
      tag : 'Transfer Money',
      tag2 : 'Transfer Money',
      icon : 'arrow-up-right',
      color : '#004eff',
      header : 'Transfer',
      header2 : ' money easily.',
      subtitle : 'Send and receive money across multiple fintech solutions in africa. Provide your customers with a robust method of money transfer.',
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
      subtitle : 'Perform transactions based on your current location (e.g pay business/customers close to you, find agency banks close to you for withdrawals.',
      image : nfp,
      position : !true
    },
    {
      tag : 'Withdraw Cash',
      tag2 : 'Withdraw Cash',
      icon : 'credit-card',
      color : '#D3007A',
      header : 'Withdraw cash',
      header2 : ' quickly & safely.',
      subtitle : 'Send and receive money across multiple fintech solutions in africa. Provide your customers with a robust method of money transfer.',
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
      subtitle : 'Send and receive money across multiple fintech solutions in africa. Provide your customers with a robust method of money transfer.',
      image : bills,
      position : !true
    }

  ]

  return (

    <div className = 'container'>

      <NavBar/>
      <Landing/>
      <Info/>
      
      {
        featuresData.map((feature, index)=> {

          const {tag, tag2, icon, color, header, header2, subtitle, image, position} = feature

          return <Transfer key = {index} tag = {tag} tag2 = {tag2} icon = {icon} color = {color} header = {header} header2 = {header2} subtitle = {subtitle} image = {image} position = {position} />

        })
      }
      
    </div>

  );
}

export default App;


import './App.css';
import Login from './Pages/Login/Login';
import ForgetPassword from './Pages/Forget/ForgetPassword';
import Otp from './Pages/OTP/Otp';
import Reset from './Pages/Reset/Reset';
import {Routes, Route} from 'react-router-dom'
import GroupAjo from './Pages/GroupAjo/GroupAjo';
import GroupAjoCreate from './Pages/GroupAjo/GroupAjoCreate';
import AjoParticipant from './Pages/GroupAjo/AjoParticipant';
import AddContact from './Pages/GroupAjo/AddContact';
import SelectedContact from './Pages/GroupAjo/SelectedContact';
import AjoSuccessfull from './Pages/GroupAjo/AjoSuccessfull';
import AjoStatus from './Pages/GroupAjo/AjoStatus';
import MatchAjo from './Pages/MatchingAjo/MatchAjo';
import CurrentAjo from './Pages/MatchingAjo/CurrentAjo';
import AvailableAjo from './Pages/MatchingAjo/AvailableAjo';
import MatchParticipant from './Pages/MatchingAjo/MatchParticipant';
import MatchInfo from './Pages/MatchingAjo/MatchInfo';
import PersonalAjo from './Pages/PersonalAjo/PersonalAjo';
import PersonalPreview from './Pages/PersonalAjo/PersonalPreview';
import PersonalSuccessful from './Pages/PersonalAjo/PersonalSuccessful';
import PersonalReview from './Pages/PersonalAjo/PersonalReview';
import Profile from './Pages/Profile/Profile';
import Dashboard from './Pages/Dashboard/Dashboard';
import Transaction from './Pages/Transaction/Transaction';
import Notification from './Pages/Notification/Notification';
import Transfer from './Pages/Transfers/Transfer';
import TransferForm from './Pages/Transfers/TransferForm';
import TransferSuccessful from './Pages/Transfers/TransferSuccessful';
import MatchAjoCreate from './Pages/MatchingAjo/MatchAjoCreate';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route exact path='/ForgetPassword' element={<ForgetPassword/>}></Route>
        <Route exact path='/Otp' element={<Otp/>}></Route>
        <Route exact path='/ResetPassword' element={<Reset/>}></Route>
        <Route exact path='/dashboard' element={<Dashboard/>}></Route>
        <Route exact path='/profile' element={<Profile/>}></Route>
        {/* ROUTE FOR TRANSACTION */}
        <Route exact path='/transaction' element={<Transaction/>}></Route>
        {/* ROUTE FOR NOTIFICATION */}
        <Route exact path='/notification' element={<Notification/>}></Route>
        {/* ROUTE FOR TRANSFER */}
        <Route exact path='/transfer' element={<Transfer/>}></Route>
        <Route exact path='/transfer/form' element={<TransferForm/>}></Route>
        <Route exact path='/transfer/success' element={<TransferSuccessful/>}></Route>
        {/* ROUTES FOR GROUP AJO */}
        <Route exact path='/ajo' element={<GroupAjo/>}></Route>
        <Route exact path='/ajo/createajo' element={<GroupAjoCreate/>}></Route>
        <Route exact path='/ajo/add' element={<AjoParticipant/>}></Route>
        <Route exact path='/ajo/addcontact' element={<AddContact/>}></Route>
        <Route exact path='/ajo/selectedcontact' element={<SelectedContact/>}></Route>
        <Route exact path='/ajo/ajosuccessfull' element={<AjoSuccessfull/>}></Route>
        <Route exact path='/ajo/ajostatus' element={<AjoStatus/>}></Route>
         {/* ROUTES FOR MATCHING AJO */}
         <Route exact path='/matchajo' element={<MatchAjo/>}></Route>
         <Route exact path='/matchform' element={<MatchAjoCreate/>}></Route>
         <Route exact path='/matchajo/available' element={<CurrentAjo/>}></Route>
         <Route exact path='/matchajo/yamseller' element={<AvailableAjo/>}></Route>
         <Route exact path='/matchajo/participant' element={<MatchParticipant/>}></Route>
         <Route exact path='/matchajo/information' element={<MatchInfo/>}></Route>
         {/* ROUTES FOR PERSONAL AJO */}
         <Route exact path='/personalajo' element={<PersonalAjo/>}></Route>
         <Route exact path='/personalajo/preview' element={<PersonalPreview/>}></Route>
         <Route exact path='/personalajo/success' element={<PersonalSuccessful/>}></Route>
         <Route exact path='/personalajo/review' element={<PersonalReview/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

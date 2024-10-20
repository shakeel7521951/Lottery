
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homee from './LotteryOffice/home/Homee';
import Loginn from './LotteryOffice/Loginn';
import Sign from './LotteryOffice/Sign';
import ContactUs from './LotteryOffice/contactUs/ContactUs';
import Syndicates from './LotteryOffice/syndicates/Syndicates';
import Combo from './LotteryOffice/combo/Combo';
import Results from './LotteryOffice/results/Results';
import Play from './LotteryOffice/play/Play';
import CheckOut from './LotteryOffice/checkOut/CheckOut';
import How_it_works from './LotteryOffice/how-it-works/How_it_works';
import Winners from './LotteryOffice/winners/Winners';
import ReadMore from './LotteryOffice/winners/ReadMore';
import DownloadApp from './LotteryOffice/downloadApp/DownloadApp';
import Lotto_System from './LotteryOffice/lotto_system/Lotto_System';
import Pay_In_Store from './LotteryOffice/Pay_in_store/Pay_In_Store';
import Charity from './LotteryOffice/Pay_in_store/Charity';
import About from './LotteryOffice/Pay_in_store/About';
import FAQs from './LotteryOffice/faqs/FAQs';
import Magzine from './LotteryOffice/magzine/Magzine';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homee/>} />
          <Route path='/login' element={<Loginn />} />
          <Route path='/signup' element={<Sign />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/syndicates' element={<Syndicates />} />
          <Route path='/combo' element={<Combo />} />
          <Route path='/results' element={<Results />} />
          <Route path='/play' element={<Play />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/how-it-works' element={<How_it_works />} />
          <Route path='/winners' element={<Winners />} />
          <Route path='/read-more' element={<ReadMore />} />
          <Route path='/app' element={<DownloadApp />} />
          <Route path='/lotto-systems' element={<Lotto_System />} />
          <Route path='/pay-in-store' element={<Pay_In_Store />} />
          <Route path='/charity' element={<Charity />} />
          <Route path='/about' element={<About />} />
          <Route path='/magzine' element={<Magzine />} />
          <Route path='/faqs' element={<FAQs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

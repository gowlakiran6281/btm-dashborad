// import { Router, Route, Routes } from "react-router-dom";
// import Customers from "../../Pages/Customers";
// // import Dashboard from '../../Pages/Dashboard'; // Corrected the import
// import Inventory from "../../Pages/Inventory";
// import Orders from "../../Pages/Orders";
// // import MusicForm from "../Components/MusicForm/MusicForm";
// import Articals from "../Articals/Articals";

// function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/Media" element={<MusicForm/>} /> */}
//         {/* <Route path="/Media" element={<MusicForm />}></Route> */}
//         <Route path="/Media" element={<Articals />}></Route>
//         {/* <Route path="/Media" element={<MusicForm />}></Route> */}
//         {/* <Route path="/inventory" element={<Inventory />} />
//         <Route path="/orders" element={<Orders />} /> */}
//         {/* <Route path="/customers" element={<Customers />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default AppRoutes;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Customers from '../../Pages/Customers';
// import Inventory from '../../Pages/Inventory';
// import Orders from '../../Pages/Orders';
// import MusicForm from '../Components/MusicForm/MusicForm';
// import Articals from '../Articals/Articals';
import AudioMessage from '../AudioMessage/AudioMessage';
import AudioSongs from '../AudioSongs/AudioSongs';
import VideoMessage from '../VideoMessage/VideoMessage';
import VideoSongs from '../VideoSongs/VideoSongs';
import Magzine from '../Magzine/Magzine';
import UpdateAudioMessage from '../UpdateAudioMessage/UpdateAudioMessage';
import UpdateDataComponent from '../UpdateAudioSongs/UpdateAudioSongs';

// import Update from "./Update"
import Articals from '../Articals/Articals';
import GetAllArticles from '../GetAllArticles/GetAllArticles';
import GetAllMagazines from '../GetAllMagazines/GetAllMagazines';
import GetAllAudioMessages from '../GetAllAudioMessages/GetAllAudioMessages';
import GetAllVideoMessage from '../GetAllVideoMessage/GetAllVideoMessage';
import AlbumComponent from '../AudioSongsAlbumNames/AlbumNames';
import FolderManager from '../Mainfolderaudiomessage/Mainfolderaudiomessage';
// import GetAllBanners from '../GetAllBanners/GetAllBanners';
import GetAllBanners from '../GetAllBanners/GetAllBanners';
import GetAllContactUs from '../GetAllContactUs/GetAllContactUs';
// import ContactUs from '../ContactUs/ContactUs';
import ContactUs from '../ContactUs/ContactUs/ContactUs';
import Mainfolderaudiomessage from '../Mainfolderaudiomessage/Mainfolderaudiomessage';

function AppRoutes() {

  return (
    // <Router>
      <Routes>
        {/* <Route path="/update/:id" element={<Update />} /> */}
         <Route path="/Media/AudioMessage" element={<AudioMessage />} />
         <Route path="/Media/AudioSongs" element={<AudioSongs />} />
        <Route path="/Media/VideoMessage" element={<VideoMessage />} />
        <Route path="/Media/VideoSongs" element={<VideoSongs />} />
        <Route path="/Media/AlbumComponent" element={<AlbumComponent />} />
      <Route path="/Media/FolderManager" element={<FolderManager />} />
      <Route path="/Media/ContactUs" element={<ContactUs />} />
      <Route path="/Media/Mainfolderaudiomessage" element={<Mainfolderaudiomessage />} />

        
        {/* <Route path="/library/Articals" element={<Articals />} /> */}
        <Route path="/library/Magzine" element={<Magzine />} />
        <Route path="/library/Articals" element={<Articals/>} />
        <Route path="/library/UpdateAudioMessage" element={<UpdateAudioMessage />} />
        <Route path="/Managable/UpdateDataComponent" element={<UpdateDataComponent />} />
        <Route path="/Managable/GetAllArticles" element={<GetAllArticles />} />
        <Route path="/Managable/GetAllMagazines" element={<GetAllMagazines />} />
        <Route path="/Managable/GetAllAudioMessages" element={<GetAllAudioMessages />} />
      <Route path="/Managable/GetAllVideoMessage" element={<GetAllVideoMessage />} />
      <Route path="/Manageable/GetAllBanner" element={<GetAllBanners />} />
      <Route path="/Manageable/GetAllContactUs" element={<GetAllContactUs />} />
      {/* <Route path="/Managable/ContactUs" element={<ContactUs />} /> */}


       
       {/* <Route path="/inventory" element={<Inventory />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/customers" element={<Customers />} /> */}
      </Routes>
    // </Router>
  );
}

export default AppRoutes;


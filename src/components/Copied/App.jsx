import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';

// Lazy-loaded components
const Nav = lazy(() => import('./components/Nav/Nav'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Home = lazy(() => import('./components/Home/Home'));
const Menu = lazy(() => import('./components/Menu/Menu'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs')); // Assuming these exist
const Meal = lazy(() => import('./components/Meal/Meal'));
const Questions = lazy(() => import('./components/Questions/Questions'));
const ContactUs = lazy(() => import('./components/ContactUs/ContactUs'));
// const SignIn = lazy(() => import('./components/SignIn/SignIn'));

function App() {
  return (
   
 <>
      <Nav />
      <Suspense fallback={<div className='flex items-center justify-center flew-row gap-3 min-h-[70vh] text-red-700 font-edu text-3xl'>Loading...</div>}>
      <Routes>
        {/* Define all your routes properly */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/meal' element={<Meal />} />
        <Route path='/questions' element={<Questions />} />
        <Route path='/contactus' element={<ContactUs />} />
        {/* <Route path='/signin' element={<SignIn />} /> */}
      </Routes>
      </Suspense>
      <Footer />
 </>
  
  );
}

export default App;

import React, { useState } from 'react';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import FAQ from './Components/FAQ';
import Profile from './Components/Profile';
import Inventory from './Components/Inventory';
import SignUp from './Components/SignUp';
import Progress from './Components/Progress';
import "@fontsource/inter"
import "@fontsource/inter/700.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import View from './Components/View';

function App() {

  const usePageNavigation = () => {
    const navigate = useNavigate();
    return (pageName: string) => navigate(`/${pageName.toLowerCase()}`);
  }

  const setPage = usePageNavigation();

  const goToLogin = () => {
    setPage('login');
  }

  const backToHome = () => {
    setPage('');
  }

  const toContactPage = () => {
    setPage('contact');
  }

  const toAboutUsPage = () => {
    setPage('about');
  }

  const toFAQPage = () => {
    setPage('faq');
  }

  const toProfilePage = () => {
    setPage('profile');
  }

  const toInventoryPage = () => {
    setPage('inventory');
  }

  const toViewPage = () => {
    setPage('inventory/view');
  }

  const toProgressPage = () => {
    setPage('Progress');
  }

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home 
                                  getStartedHandler={goToLogin} 
                                  aboutUsHandler={toAboutUsPage} 
                                  contactHandler={toContactPage} 
                                  FAQHandler={toFAQPage} 
                                  ProfileHandler={toProfilePage} 
                                />} />
      <Route path="/login" element={<LogIn 
                                          backToHomeHandler={backToHome} 
                                        />} />
      <Route path="/signUp" element={<SignUp backToLoginHandler={goToLogin}/>} />
        <Route path="/contact" element={<ContactUs 
                                            aboutUsHandler={toAboutUsPage} 
                                            contactHandler={toContactPage} 
                                            FAQHandler={toFAQPage} 
                                          />} />
        <Route path="/about" element={<AboutUs 
                                          aboutUsHandler={toAboutUsPage} 
                                          contactHandler={toContactPage} 
                                          FAQHandler={toFAQPage} 
                                        />} />
        <Route path="/faq" element={<FAQ 
                                        aboutUsHandler={toAboutUsPage} 
                                        contactHandler={toContactPage} 
                                        FAQHandler={toFAQPage} 
                                      />} />
        <Route path="/profile" element={<Profile 
                                            getStartedHandler={goToLogin}
                                            aboutUsHandler={toAboutUsPage}
                                            contactHandler={toContactPage}
                                            FAQHandler={toFAQPage}
                                            ProfileHandler={toProfilePage}
                                            InventoryHandler={toInventoryPage}
                                            ProgressHandler={toProgressPage}
                                            backToHomeHandler={backToHome}
                                            SettingsHandler={toProfilePage}
                                          />} />
        <Route path="/inventory" element={<Inventory 
                                              getStartedHandler={goToLogin}
                                              aboutUsHandler={toAboutUsPage}
                                              contactHandler={toContactPage}
                                              FAQHandler={toFAQPage}
                                              ProfileHandler={toProfilePage}
                                              ProgressHandler={toProgressPage}
                                              ViewHandler={toViewPage}
                                              backToHomeHandler={backToHome}
                                              InventoryHandler={toInventoryPage}
                                              SettingsHandler={toProfilePage}
                                            />} />
        <Route path="/inventory/view" element={<View 
                                                getStartedHandler={goToLogin}
                                                aboutUsHandler={toAboutUsPage}
                                                contactHandler={toContactPage}
                                                FAQHandler={toFAQPage}
                                                ProfileHandler={toProfilePage}
                                                ViewHandler={toViewPage}
                                                backToHomeHandler={backToHome}
                                                InventoryHandler={toInventoryPage}
                                                SettingsHandler={toProfilePage}
                                                ProgressHandler={toProgressPage}
                                              />} />
        <Route path="/progress" element={<Progress 
                                              getStartedHandler={goToLogin}
                                              aboutUsHandler={toAboutUsPage}
                                              contactHandler={toContactPage}
                                              FAQHandler={toFAQPage}

                                              ProfileHandler={toProfilePage} 
                                              InventoryHandler={toInventoryPage}
                                              ProgressHandler={toProgressPage}
                                              SettingsHandler={toProfilePage}
                                              backToHomeHandler={backToHome}
                                            />} />
      </Routes>
    </div>
  );
}

export default App;

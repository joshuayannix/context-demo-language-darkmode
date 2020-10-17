import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import PageContent from './PageContent';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';

export default function App () {
  return (
    <LanguageProvider>      
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>  
    </LanguageProvider>    
  );
}


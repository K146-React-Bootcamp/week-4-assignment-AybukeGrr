import "bootstrap/dist/css/bootstrap.min.css";
 import React, { useContext, useState } from 'react';
 import Button from "react-bootstrap/Button";
 import Card from "react-bootstrap/Card";
 import { useTheme } from "../Context/ThemeContext";
 
 const ContentCard = () => {

  const { theme } = useTheme();

   return (
     <Card
       style={{ width: "18rem", position: "fixed", left: 600, top: 150 }}
       bg={theme}
       variant={theme}
     >
       <Card.Img variant="top" src="logo-1.png" />
       <Card.Body>
         <Card.Title>Kodluyoruz React Bootcamp</Card.Title>
         <Card.Text>Week-4-Assignment</Card.Text>
       </Card.Body>
     </Card>
   );
 };

 export default ContentCard;
 

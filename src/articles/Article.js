import React from 'react';
import './Article.css';
import image1 from '../assets/hogwarts/hogwarts-1.png'
import image2 from '../assets/hogwarts/hogwarts-2.png'
import image3 from '../assets/hogwarts/hogwarts-3.png'
import image4 from '../assets/hogwarts/hogwarts-4.png'
import image5 from '../assets/hogwarts/hogwarts-5.png'
import image6 from '../assets/hogwarts/hogwarts-6.png'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";


function Article() {
  return (
    <div className="Article">
        <div className="header-wrapper">
            <div class="menu-wrapper" style={{marginTop: 50}}>
                <Link to="/with-style/" className="menu-link">Home</Link>
                <Link to="/with-style/about/" className="menu-link">About</Link>
            </div>
        </div>
        <div class="first-paragraph">
            <div className="left">
                <img src={image6} />  
            </div>
            <div>
                <h1>Hogwarts <br/> Legacies</h1>
                <p>70 magische Stunden und ein tränenreicher Abschied später und ich kann behaupten, dass
                    Hogwarts Legacy all meine Erwartungen mehr als erfüllt / übertroffen hat.
                    Im Jahr 1800 habe ich die Chance bekommen mich mehrmals in Hogwarts zu erirren, bin durch den verbotenen Wald geschlichen, habe Hogmeats leer gekauft und – ich sah dabei fabelhaft aus. Zumindest virtuell.
                    Natürlich gab es eine Vielzahl an Möglichkeiten zum Kombinieren von Outfits, aber hier kommen meine liebsten Outfits:</p>
            </div>
      
        </div>  
        <div class="article-wrapper">
            <div class="text-col">
                <div>
                    <h2>Die Schuluniform</h2>
                    <p className="text">Natürlich habe ich die verschiedenen Anlässe der Quests für unterschiedliche Outfits genutzt. Also habe ich mich für die akademischen Aktivitäten für eine formeller Schuluniform entschieden. Zu meiner Freude als treuer Hufflepuff wurde hierfür das Gelb des Wappens in einen etwas goldeneren Ton gewandelt, der gut das Leuchten der freundlichen Hufflepuffs wiederspiegelt. </p>
                    <div className="inline-flexing">
                        <div>
                            <h3>Die Farben der Hogwarts Häuser</h3>
                            <p>Gryffindor Rot: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i<br/>
                            Slythrin Grün: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i<br/>
                            Ravenclaw Blau: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i<br/>
                            Hufflepuff Gelb: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor i</p>
                        </div>
                       
                    </div>
                </div>
                <div>
                    <h2>Der Abenteurer</h2>
                    <p>Für die wärmeren Zeiten habe ich mich für einen sehr femininen Stil entschieden. Strohhut, geblümte Bluse und eine Schleife an der Hosen schreien nicht gerade nach angriffslustiger Abenteuerin, und hat hat die Kampfszenen deswegen schon etwas lustig aussehen lassen.
                    </p>   
                    <div className="inline-flexing">
                        <p> Für die abenteuerlichen Missionen außerhalb des Schlosses hatte ich für die kälteren Jahreszeiten einen Umhang mit kuscheligem Schal, ganz in den Farben meines Hauses.</p>
                    </div>
                </div>
                <div>
                    <h2>Der Hüter</h2>
                    <p>
                    Zuletzt hatte ich mir als geprüfte Hüterin etwas extravagantes verdient. Ich wollte wie ein abenteuerlicher Dumbledore aussehen und finde, dass mein Look für die letzte Mission das mit den glitzernden Verzierungen, dem Gold und .. gut zeigt.
                    Das Basisoutfit bestand aus festen Stiefeln…
                    </p>
                    <div className="inline-flexing">
                        <div>
                            <h3>Woher kommen eigentlich Hüte in der Zaubererwelt?</h3>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                        </div>
                        <img src={image4} />
                    </div>
                </div>
            </div>
            <div className="image-wrapper">
                <span className="image">
                    <img src={image1} />
                    <p>Hufflepuff Schuluniform</p>
                </span>
                <span className="image">
                    <img src={image5} />
                    <p>Unterschrift</p>
                </span>
                <span className="image">
                    <img src={image3} />
                    <p>Unterschrift</p>
                </span>
            </div>

        </div>
       
    
       
    </div>
  );
}

export default Article;

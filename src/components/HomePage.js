/**
 * @file
 * Displays the home page.
 */

import React from 'react'

import Contact from './Contact.js';

//import BottomNavigation from '@material-ui/core/BottomNavigation';
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

/*
function sayHello() {
  alert('Hello!');
  //document.location.href = "http://google.com";
}

function loadLink(link) {
  document.location.href = link;
}
*/

class HomePage extends React.Component {
  render() {
    return (
      <div style={{ marginTop: 150}}>
        {/*<ReactPlayer url="https://youtu.be/MyG3TPyaCVw" width="100%" />*/}
        {/*<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.trendhunterstatic.com%2Fthumbs%2Fpanoramic-illustrations.jpeg&f=1&nofb=1" alt="Title" style={{ width: "100%", marginTop: "0px" }}/>*/}

        <article>
          <p>
            The central subdivision of the bed nucleus of the stria terminalis (BSTc) is sexually dimorphic. On average, the BSTc is twice as large in men as in women and contains twice the number of somatostatin neurons.[7] A sample of six post-mortem, long-term HRT treated trans women (male-to-female) were found to have a female-typical number of cells in the BSTc, whereas a trans man (female-to-male) was found to have a male-typical number.[8][9] The authors (Jiang-Ning Zhou, Frank PM Kruijver, Dick Swaab) also examined subjects with hormone-related disorders and found no pattern between those disorders and the BSTc while the single untreated male-to-female transsexual had a female-typical number of cells. They concluded that the BSTc provides evidence for a neurobiological basis of gender identity and proposed that such was determined before birth.
          </p>
          <p>
            This site exists as a repository for my thoughts, projects, and aspirations. I have many interests spanning music, art, and computer science. I believe it is the medling of the intersection of these technologies that allows us to create wonders in the world. Technology to me is akin to magic or cybernetics, it is the expansion of human desire to be more than it is. It is only through the concerted effort of many people that these technologies can be better utilized for the benefit of all living things on this planet. I do not believe we can blindly focus on just people anymore, we must consult with nature prior to do anything in the world. Instead we arogantly assume that the planet is ours to consume. This is a wrong way of looking at the world. The reality is, the world is what we make of it, and if you can't accept that, then you may as well be a drone. Good luck out there peeps!
          </p>
          <p>
            This is a contemplation of my thoughts as summarized by the vasy intergalactic mezmerization of fine focus as it elucidates into the universe. So chill peeps! I'm here to put you all at ease! Listen here and listen well, for there is a message amongst the madness that is the cosmos of thought. We are eternal, death is a beginning, not an end, and we have nothing to fear but fear itself. I borrowed that last one I'm aware, but it fits. So lets rejoice in our new found immortality and stop toiling and find happiness in the death of all things! J/K Please live, like seriously, the world needs everyone, we're not a plague, we're just the life that is suffering under the eternal sunshine of truth and light and love and pain. The sun is all things, so rejoice... your end is near MUAHAHAHAHAHAHA
          </p>
        </article>
        <div>
          <Contact />
        </div>

        {/* <BottomNavigation value={0} onChange={(event, newValue) => { this.sayHello(); }} showLabels style={footerStyle}> 
          <BottomNavigationAction label="Home" style={{ color:'white' }} value="home" icon={<Home />} />
          <BottomNavigationAction label="Posts" style={{ color:'gray' }} value="posts" icon={<Book />} />
          <BottomNavigationAction label="Contact" style={{ color:'gray' }} value="contact" icon={<AccountBox />} />
        </BottomNavigation> */}
      </div>
    );
  }
}

export default HomePage;

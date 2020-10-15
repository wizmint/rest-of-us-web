import React from 'react'

/*
function sayHello() {
  alert('Hello!');
  //document.location.href = "http://google.com";
}

function loadLink(link) {
  document.location.href = link;
}
*/

function HomePage() {
    return (
      <div>
        {/*<ReactPlayer url="https://youtu.be/MyG3TPyaCVw" width="100%" />*/}
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.trendhunterstatic.com%2Fthumbs%2Fpanoramic-illustrations.jpeg&f=1&nofb=1" alt="Title" style={{ width: "100%", marginTop: "0px" }}/>

        <article>
          <p style={{margin: 20}}>This is a contemplation of my thoughts as summarized by the vasy intergalactic mezmerization of fine focus as it elucidates into the universe. So chill peeps! I'm here to put you all at ease! Listen here and listen well, for there is a message amongst the madness that is the cosmos of thought. We are eternal, death is a beginning, not an end, and we have nothing to fear but fear itself. I borrowed that last one I'm aware, but it fits. So lets rejoice in our new found immortality and stop toiling and find happiness in the death of all things! J/K Please live, like seriously, the world needs everyone, we're not a plague, we're just the life that is suffering under the eternal sunshine of truth and light and love and pain. The sun is all things, so rejoice... your end is near MUAHAHAHAHAHAHA</p>
        </article>

        {/* <BottomNavigation value={0} onChange={(event, newValue) => { this.sayHello(); }} showLabels style={footerStyle}> 
          <BottomNavigationAction label="Home" style={{ color:'white' }} value="home" icon={<Home />} />
          <BottomNavigationAction label="Posts" style={{ color:'gray' }} value="posts" icon={<Book />} />
          <BottomNavigationAction label="Contact" style={{ color:'gray' }} value="contact" icon={<AccountBox />} />
        </BottomNavigation> */}
      </div>
    );
}

export default HomePage;

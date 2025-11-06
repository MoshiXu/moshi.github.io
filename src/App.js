import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello Welcome to my World</h1>


      <img 
        src="/profile.jpg" 
        alt="My Pic" 
        style={{ width: '300px', borderRadius: '10px', marginTop: '20px' }} 
      />

      <div style={{ marginTop: '40px' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2LMQgn8bmOU"
          title="YouTube video"
          frameBorder="0"   // ✅ camelCase instead of frameborder
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen   // ✅ camelCase instead of allowfullscreen
        ></iframe>
      </div>
      <p></p>
      <a href="https://www.instagram.com/portrait_of_los_angeles">My portrait Instagram account</a>
      <p></p>
      
      <p></p>
      <a href="https://www.imdb.com/name/nm17303056">My IMDb</a>
      <p></p>
      <a href="https://www.buymeacoffee.com/moshixu" target="_blank" rel="noopener">Support me monthly</a>
    </div>

    
  );
}


export default App;

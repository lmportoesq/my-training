function About() {
   function handleClickBack() {
      window.location.href = '/';
   }

   return (
      <div className='about-card'>
         <div>
            <h1>About me</h1>
            <hr />
         </div>
         <div id="about-information">
            <img src="./images/photo.jpg" alt="Photo" />
            <div>
               <h2>Luis Miguel Porto Esquivel</h2>
            </div>
            <div>
               <p>
                  I am a professional in analysis and programming of computers,
                  with more than 15 years of experience in the field of programming.

                  Completely passionate about my profession, creative, easily adaptable to different work environments,
                  with the ability to lead, make decisions and work as a team.
               </p>
               <div>
                  <button className='button-back' onClick={handleClickBack}>Go back</button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default About;

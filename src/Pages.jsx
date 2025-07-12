import React from "react"

const Pages = () => {
return (
    <section>
        <br/>
        <hr/>
        
        <div>
            <h1>This is an h1 heading</h1>
            <h2>This is an h2 heading</h2>
            <h3>This is an h3 heading</h3>
            <h4>This is an h4 heading</h4>
            <h5>This is an h5 heading</h5>
            <hr/> {/*This means horizontal line */}
            <br/> {/*This means break */}
        </div>

        <div>
            <p>
            Wassup!

            No matter the spaces you leave
            in a paragraph tag

            it will still be the same.

            Unless you use a br(break) tag

            or use a pre-formated (pre) tag.
            </p>
        </div>

        <div>
            <pre>
            Lorem,
            ipsum dolor sit amet 
            consectetur adipisicing elit. 

            Ea quia nostrum ab officiis enim,
            exercitationem quibusdam incidunt
            dicta deleniti dolor, 
            praesentium deserunt delectus nulla? 

            Voluptas cupiditate aspernatur dolore 
            maxime vel.
            </pre> {/*Use Lorem to generate random words*/}
        </div>

        <div>
            <a href="https://www.google.com/"
            target="_blank"
            title="Goes to Google">
            Click me to get access to Google
            </a> {/*a means anchor*/}

            <br/>

            <a href="lyrics.html">
            Song lyrics
            </a>

            <br/>

            <a href="mailto:fakemail@yahoo.com">
            Email me
            </a>

        <hr/>
        </div>

        <div>
        <h2>This is a soothing pinterest board</h2>

        <a href="https://www.pinterest.co.uk/wispofsilk/light-academia/">
        <img src="src/assets/pinterest board.jpg"
        alt="Pinterest board"
        height="200"/>
        </a>

        <img src="src/assets/writing gif.gif" 
        alt="paper"
        height="200"/>
        {/*If you store the local file in a seperate folder,
        You have to put in the folder in which it is*/}

        <br/>

        <p>Black Swan instrumental</p>
        <audio controls autoplay loop>
            <source src="src/assets/BTS - Black Swan - Orchestral Version ! Instrumental Music.mp3"
            type="audio/mpeg"/>
        </audio>

        </div>
    </section>
)
}

export default Pages
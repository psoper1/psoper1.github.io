import Typewriter from "typewriter-effect";

function AboutMe() {
    return (
        <>
            <div id="about" className="text-center animatedtext">
                <Typewriter

                    onInit={(typewriter) => {

                        typewriter

                            .typeString("Hello")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("My name is Preston")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("I like to build things")

                            .pauseFor(1000)
                            .deleteAll()
                            .typeString("Welcome to my website, be sure to have a look around")
                            .start();
                    }}
                />
            </div>
        </>
    )
}

export default AboutMe;
import TicTacToeScreenshot from "../Pictures/TicTacToeScreenshot.jpg"
import WeatherAppScreenshot from "../Pictures/WeatherAppScreenshot.jpg";
import MindReaderScreenshot from "../Pictures/MindReaderScreenshot.jpg";
import RestaurantMenuScreenshot from "../Pictures/RestaurantMenuScreenshot.jpg";
import PythonSqlHeroesScreenshot from "../Pictures/PythonSqlHeroesScreenshot.jpg";
import Carousel from 'react-bootstrap/Carousel';

function ProjectsCode() {
    return (
        <>
            <Carousel interval={null}>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/tic-tac-toe-game/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={TicTacToeScreenshot}
                        alt="First slide"
                    /></a>
                    <Carousel.Caption>
                        <h3 className="carousel-text-color">Dragonball Super: Super Tic-Tac-Toe</h3>
                        <p className="carousel-text-color">Tech Stack: HTML, CSS, Javascript</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/WeatherApp/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={WeatherAppScreenshot}
                        alt="Second slide"
                    /></a>

                    <Carousel.Caption>
                        <h3 className="carousel-text-color">Weather App</h3>
                        <p className="carousel-text-color">Tech Stack: Javascript, (Some) CSS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/mind-reader/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={MindReaderScreenshot}
                        alt="Third slide"
                    /></a>

                    <Carousel.Caption>
                        <h3 className="carousel-text-color">Mind Reader</h3>
                        <p className="carousel-text-color">Tech Stack: Javascript</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/menu-project/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={RestaurantMenuScreenshot}
                        alt="First slide"
                    /></a>
                    <Carousel.Caption>
                        <h3 className="color-white">React: Restaruant Menu</h3>
                        <p className="color-white">Tech Stack: React, CSS (Must have CORS Chrome Extension to pull JSON data)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/psoper1/superheroes_sql_python_project"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={PythonSqlHeroesScreenshot}
                        alt="First slide"
                    /></a>
                    <Carousel.Caption>
                        <h3 className="color-white">Python SQL Heroes Database</h3>
                        <p className="color-white">Tech Stack: Python, SQL (postgresql)</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




        </>
    )
}

export default ProjectsCode;




{/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={TicTacToeScreenshot} className="tictactoe rounded mx-auto d-block w-50" alt="TicTacToe"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="carousel-text-color">Dragonball Super: Super Tic-Tac-Toe</h5>
                                <p className="carousel-text-color">Tech Stack: HTML, CSS, Javascript</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="..." className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> */}
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
                        alt="First slide" /></a>
                    <Carousel.Caption>
                        <h3 className="carousel-text-color">Dragonball Super: Super Tic-Tac-Toe</h3>
                        <p className="carousel-text-color">Tech Stack: HTML, CSS, Javascript</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/WeatherApp/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={WeatherAppScreenshot}
                        alt="Second slide" /></a>
                    <Carousel.Caption>
                        <h3 className="carousel-text-color">Weather App</h3>
                        <p className="carousel-text-color">Tech Stack: Javascript, (Some) CSS</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/mind-reader/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={MindReaderScreenshot}
                        alt="Third slide" /></a>
                    <Carousel.Caption>
                        <h3 className="carousel-text-color">Mind Reader</h3>
                        <p className="carousel-text-color">Tech Stack: Javascript</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://psoper1.github.io/menu-project/"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={RestaurantMenuScreenshot}
                        alt="First slide" /></a>
                    <Carousel.Caption>
                        <h3 className="color-white">React: Restaruant Menu</h3>
                        <p className="color-white">Tech Stack: React, CSS (Must have CORS Chrome Extension to pull JSON data)</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://github.com/psoper1/superheroes_sql_python_project"> <img
                        className="CarImg text-center rounded mx-auto d-block w-50"
                        src={PythonSqlHeroesScreenshot}
                        alt="First slide" /></a>
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
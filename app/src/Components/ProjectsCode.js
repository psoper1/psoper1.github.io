import TicTacToeScreenshot from "../Pictures/TicTacToeScreenshot.jpg"
import WeatherAppScreenshot from "../Pictures/WeatherAppScreenshot.jpg";
import MindReaderScreenshot from "../Pictures/MindReaderScreenshot.jpg";
import RestaurantMenuScreenshot from "../Pictures/RestaurantMenuScreenshot.jpg";
import PythonSqlHeroesScreenshot from "../Pictures/PythonSqlHeroesScreenshot.jpg";
import Bookapedia from "../Pictures/bp-sc3.png"
import { Card } from "react-bootstrap";

function ProjectsCode() {
    return (
        <>
            <div className="container project-cards">
            <div className="row justify-content-center">
            <Card style={{ width: "25rem", border: "none" }} className="bg-transparent">
            <Card.Body className="d-flex flex-column">
                <img className="card-img-top" src={Bookapedia} alt="Card cap" />
                    <Card.Title className="text-center title-card">Bookapedia Book Search Engine</Card.Title>
                    <Card.Text className="text-center">
                    Tech Stack: Front End: HTML, CSS, ReactJS, Firebase Backend: Python, Django REST, Google Cloud
                    </Card.Text>
                    <div className="mt-auto text-center">
                    <a href="https://bookapedia-frontend.web.app/" className="btn btn-primary btn-projects">Take me to the Project!</a>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "none" }} className="bg-transparent">
            <Card.Body className="d-flex flex-column">
                <img className="card-img-top" src={TicTacToeScreenshot} alt="Card cap" />
                    <Card.Title className="text-center title-card">Dragonball Super: Super Tic-Tac-Toe</Card.Title>
                    <Card.Text className="text-center">
                    Tech Stack: HTML, CSS, Javascript
                    </Card.Text>
                    <div className="mt-auto text-center">
                    <a href="https://psoper1.github.io/tic-tac-toe-game/" className="btn btn-primary btn-projects">Take me to the Project!</a>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "none" }} className="bg-transparent">
            <Card.Body className="d-flex flex-column">
                <img className="card-img-top" src={WeatherAppScreenshot} alt="Card cap" />
                    <Card.Title className="text-center title-card">Weather App</Card.Title>
                    <Card.Text className="text-center">
                    Tech Stack: Javascript, (Some) CSS
                    </Card.Text>
                    <div className="mt-auto text-center">
                    <a href="https://psoper1.github.io/WeatherApp/" className="btn btn-primary btn-projects">Take me to the Project!</a>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "none" }} className="bg-transparent">
            <Card.Body className="d-flex flex-column">
                <img className="card-img-top" src={MindReaderScreenshot} alt="Card cap" />
                    <Card.Title className="text-center title-card">Mind Reader</Card.Title>
                    <Card.Text className="text-center">
                    Tech Stack: Javascript
                    </Card.Text>
                    <div className="mt-auto text-center">
                    <a href="https://psoper1.github.io/mind-reader/" className="btn btn-primary btn-projects">Take me to the Project!</a>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "none" }} className="bg-transparent">
            <Card.Body className="d-flex flex-column">
                <img className="card-img-top" src={RestaurantMenuScreenshot} alt="Card cap" />
                    <Card.Title className="text-center title-card">React: Restaruant Menu</Card.Title>
                    <Card.Text className="text-center">
                    Tech Stack: React, CSS (Must have CORS Chrome Extension to pull JSON data)
                    </Card.Text>
                    <div className="mt-auto text-center">
                    <a href="https://psoper1.github.io/menu-project/" className="btn btn-primary btn-projects">Take me to the Project!</a>
                    </div>
                </Card.Body>
            </Card>
            <Card style={{ width: "25rem", border: "none" }} className="bg-transparent">
            <Card.Body className="d-flex flex-column">
                <img className="card-img-top" src={PythonSqlHeroesScreenshot} alt="Card cap" />
                    <Card.Title className="text-center title-card">Python SQL Heroes Database</Card.Title>
                    <Card.Text className="text-center">
                    Tech Stack: Python, SQL (postgreSQL)
                    </Card.Text>
                    <div className="mt-auto text-center">
                    <a href="https://github.com/psoper1/superheroes_sql_python_project" className="btn btn-primary btn-projects">Take me to the Project!</a>
                    </div>
                </Card.Body>
            </Card>
            </div>
            </div>
        </>
    )
}

export default ProjectsCode;
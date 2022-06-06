import React, { Fragment, useState } from 'react';
import Board, { moveCard } from '@asseinfo/react-kanban'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { CustomBoards } from '../../../constant'
const CustomeBoard = (props) => {
    const Customboard = {
        columns: [
            {
                id: 10,
                title: "To Do (Item only in Working)",
                cards: [
                    {
                        "id": 11,
                        "title": "Test Sidebar",
                        "date": "24/7/20",
                        "priority": "medium",
                        "img": "user/3.jpg",
                        "company": "Themeforest, australia",
                        "rate": "+5",
                        "customer_img1": "user/3.jpg",
                        "customer_img2": "user/1.jpg",
                        "customer_img3": "user/5.jpg",
                        "bg_color": "bg-light-info"
                    },
                    {
                        "id": 12,
                        "title": "Dashboard issue",
                        "date": "24/7/20",
                        "priority": "Low",
                        "img": "user/3.jpg",
                        "company": "Pixelstrap, New york",
                        "rate": "+5",
                        "customer_img1": "user/3.jpg",
                        "customer_img2": "user/1.jpg",
                        "customer_img3": "user/5.jpg",
                        "bg_color": "bg-light-info"
                    }
                ]
            },
            {
                id: 13,
                title: "Working",
                cards: [
                    {
                        "id": 14,
                        "title": "Test Sidebar",
                        "date": "24/7/20",
                        "priority": "Argent",
                        "img": "user/3.jpg",
                        "company": "Themeforest, australia",
                        "rate": "+5",
                        "customer_img1": "user/3.jpg",
                        "customer_img2": "user/1.jpg",
                        "customer_img3": "user/5.jpg",
                        "bg_color": "bg-light-warning"
                    },
                    {
                        "id": 15,
                        "title": "Dashboard issue",
                        "date": "24/7/20",
                        "priority": "Low",
                        "img": "user/3.jpg",
                        "company": "Pixelstrap, New york",
                        "rate": "+5",
                        "customer_img1": "user/3.jpg",
                        "customer_img2": "user/1.jpg",
                        "customer_img3": "user/5.jpg",
                        "bg_color": "bg-light-warning"
                    }
                ]
            },
            {
                id: 16,
                title: "Done (Item only in Working)",
                cards: [
                    {
                        "id": 17,
                        "title": "Test Sidebar",
                        "date": "24/7/20",
                        "priority": "Argent",
                        "img": "user/3.jpg",
                        "company": "Themeforest, australia",
                        "rate": "+5",
                        "customer_img1": "user/3.jpg",
                        "customer_img2": "user/1.jpg",
                        "customer_img3": "user/5.jpg",
                        "bg_color": "bg-light-success"
                    },
                    {
                        "id": 18,
                        "title": "Dashboard issue",
                        "date": "24/7/20",
                        "priority": "Low",
                        "img": "user/3.jpg",
                        "company": "Pixelstrap, New york",
                        "rate": "+5",
                        "customer_img1": "user/3.jpg",
                        "customer_img2": "user/1.jpg",
                        "customer_img3": "user/5.jpg",
                        "bg_color": "bg-light-success"
                    }
                ]
            }
        ]
    };
    const [controlledBoard, setBoard] = useState(Customboard);
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    return (
        <Fragment>
            {Customboard && Customboard ?
                <Card >
                    <CardHeader>
                        <h5>{CustomBoards}</h5>
                    </CardHeader>
                    <CardBody>
                        <div id="demo2">
                            <div className="kanban-container custom-board">
                                <div className="kanban-board">
                                    <main className="kanban-drag">
                                        <Board onCardDragEnd={handleCardMove}
                                            renderCard={({ title, date, priority, img, company, rate, customer_img1, customer_img2, customer_img3, bg_color }) => (
                                                <div className="kanban-item">
                                                    <a className={`kanban-box`} href="#javascript">
                                                        <span className="date">{date}</span>
                                                        <span className={`badge ${priority === "Low" ? "badge-success" : "badge-primary"} f-right`}>{priority}</span>
                                                        <h6>{title}</h6>
                                                        <div className="d-flex align-items-center">
                                                            <img className="img-20 me-1 rounded-circle" src={require(`../../../assets/images/${img}`)} alt="" />
                                                            <div className="flex-grow-1">
                                                                <p>{company}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mt-3">
                                                            <ul className="list">
                                                                <li><i className="fa fa-comments-o"></i>{"2"}</li>
                                                                <li><i className="fa fa-paperclip"></i>{"2"}</li>
                                                                <li><i className="fa fa-eye"></i></li>
                                                            </ul>
                                                            <div className="customers">
                                                                <ul>
                                                                    <li className="d-inline-block me-3">
                                                                        <p className="f-12">{rate}</p>
                                                                    </li>
                                                                    <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img1}`)} alt="" /></li>
                                                                    <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img2}`)} alt="" /></li>
                                                                    <li className="d-inline-block"><img className="img-20 rounded-circle" src={require(`../../../assets/images/${customer_img3}`)} alt="" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            )}
                                            disableColumnDrag >
                                            {controlledBoard}
                                        </Board>
                                    </main>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                : ""}
        </Fragment>
    );
}

export default CustomeBoard;
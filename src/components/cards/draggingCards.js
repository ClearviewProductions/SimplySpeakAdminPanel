import React, { Fragment, useState } from 'react';
import Breadcrumb from '../common/breadcrumb';
import Board, { moveCard } from '@asseinfo/react-kanban'
import { DragBothTitleCard, DragOnlyCard, DragOnlyContent } from "../../constant";
const DraggingCards = () => {

    const board = {
        columns: [
            {
                id: 1,
                title: 'Basic card',
                cards: [
                    {
                        id: 1,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 2,
                title: 'Flat Card',
                cards: [
                    {
                        id: 2,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    }
    const board1 = {
        columns: [
            {
                id: 3,
                title: 'Heading Card',
                cards: [
                    {
                        id: 3,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 4,
                title: 'Without Shadow',
                cards: [
                    {
                        id: 4,
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
        ]
    }
    const board2 = {
        columns: [
            {
                id: 5,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 5,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            },
            {
                id: 6,
                title: 'Card Sub-Title',
                cards: [
                    {
                        id: 6,
                        title: 'You can extend default collapse behaviour to create an accordion',
                        description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
                    },
                ]
            }
        ]
    }
    const [controlledBoard, setBoard] = useState(board);
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
    }
    const [controlledBoard1, setBoard1] = useState(board1);
    function handleCardMove1(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard1, source, destination);
        setBoard1(updatedBoard);
    }
    const [controlledBoard2, setBoard2] = useState(board2);
    function handleCardMove2(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard2, source, destination);
        setBoard2(updatedBoard);
    }
    return (
        <Fragment>
            <Breadcrumb title="Draggable Card" parent="Card" />
            <div className="container-fluid">
                <div className="row ui-sortable" >
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>
                                    {DragBothTitleCard}
                                </h5>
                            </div>
                            <div className="card-body draggable-card">
                                <Board onCardDragEnd={handleCardMove} disableLaneDrag>{controlledBoard}</Board>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>
                                    {DragOnlyCard}
                                </h5>
                            </div>
                            <div className="card-body draggable-card">
                                <Board onCardDragEnd={handleCardMove1} disableCardDrag>{controlledBoard1}</Board>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h5>
                                    {DragOnlyContent}
                                </h5>
                            </div>
                            <div className="card-body">
                                <Board onCardDragEnd={handleCardMove2} disableColumnDrag>{controlledBoard2}</Board>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default DraggingCards;
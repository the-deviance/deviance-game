import React, {useEffect, useState} from "react";
import useGameData from "../../utils/useGameData";
import usePropertyData from "../../utils/usePropertyData";
import Dice from "../../components/Dice";
import PurchaseProperty from "../../components/PurchaseProperty";
import NoFundsModal from "../../components/NoFundsModal";
import ShowRentModal from "../../components/ShowRentModal";
import ActionModal from "../../components/ActionModal";
import SpecialModal from "../../components/SpecialModal";
import AddPlayers from "../../components/AddPlayers";
import PartnerPicker from "../../components/PartnerPicker";
import AddToys from "../../components/AddToys";
import {colours} from "../../data/constants";
import {DRESS_LABELS} from "../../types/game";
import Chick from "../../components/Chick";
import {track} from "../../utils/analytics";

export default function Card({id}) {
    const {gameData, movePlayer, endTurn, increaseSpiceLevel} = useGameData();
    const {propertyData} = usePropertyData();

    const incrementMoveAndCheckSpice = () => {
        console.log('incrementMoveAndCheckSpice called');
        const usedCards = JSON.parse(localStorage.getItem("cardData") || '[]');

        console.log(`used cards length: ${usedCards.length}`)
        // When each player has played ~ 3 cards, increase spice
        if (usedCards.length && usedCards.length % (gameData.players.length * 3) === 0) {
            console.log('Increasing spice');
            increaseSpiceLevel();
        }
    };

    const [setupStep, setSetupStep] = useState(false);
    const [value, setValue] = useState(0);
    const [rolling, setRolling] = useState(false);
    const [purchaseModal, setPurchaseModal] = useState(false);
    const [noFundsModal, setNoFundsModal] = useState(false);
    const [showRentModal, setShowRentModal] = useState(false);
    const [actionModal, setActionModal] = useState(false);
    const [specialModal, setSpecialModal] = useState(false);


    useEffect(() => {
        if (gameData.started) {
            // Always show setup when game starts, but check if we should skip based on existing data
            if (gameData.players.length > 0) {
                const hasNamedPlayers = gameData.players.some(player => player.name && player.name.trim());
                setSetupStep(hasNamedPlayers ? 0 : 1);
            } else {
                setSetupStep(1);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameData.started]);

    const handleOnChange = (value, rolling) => {
        setValue(value);
        setRolling(rolling);
    };

    useEffect(() => {
        if (gameData.currentPlayer !== undefined && !rolling && value) {
            track('Dice Rolled', {value});
            console.log('Moving player', gameData.currentPlayer, 'by', value, 'steps');
            console.log('Current player data:', gameData.players[gameData.currentPlayer]);
            movePlayer(value).then((player) => {
                console.log('Player has finished moving...')

                if (!player) return;
                console.log('Player after move:', player);
                const property = propertyData[player.position];

                console.log('Property at position', player.position, ':', property);
                // Is the Property Owned?
                if (property.owner === undefined) {
                    // Does it have a price?
                    if (!property.price) {
                        // No price so must be a special card
                        if (property.name === "Go") {
                            console.log('Landed on Go, ending turn');
                            return endPlayerTurn();
                        }
                        setSpecialModal(property);
                    } else {
                        // Not owned - Can player afford it?
                        if (player.money >= property.price) {
                            // Show purchase modal
                            setPurchaseModal(property);
                        } else {
                            // Show no funds modal
                            setNoFundsModal(property);
                        }
                    }
                } else {
                    // Property is owned
                    // Is it owned by the player?
                    if (property.owner === gameData.currentPlayer) {
                        // Property is owned by the player, nothing else to do
                        endPlayerTurn();
                    } else {
                        // Property is owned by someone else
                        checkRent(property);
                    }
                }

                // Increment move count and check for spice level increase
                incrementMoveAndCheckSpice();

            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rolling]);

    const checkRent = (property) => {
        // Make sure other modals are closed
        setPurchaseModal(false);
        setNoFundsModal(false);

        // Charge Rent
        setShowRentModal(property);
    };

    const showAction = (workingItOff) => {
        const player = gameData.players[gameData.currentPlayer];
        const property = propertyData[player.position];
        setShowRentModal(false);
        track('Rent Settled', {
            method: workingItOff ? 'favour' : 'cash',
            property: property?.name,
        });
        if (workingItOff) {
            setActionModal(property);
        } else {
            endPlayerTurn();
        }
    };

    // Sanity gate: the die stays locked until there are at least two players
    // (solo Deviance is just sad admin) and setup is out of the way.
    const needMorePlayers = gameData.players.length < 2;

    const endPlayerTurn = () => {
        console.log("Ending turn");
        setPurchaseModal(false);
        setNoFundsModal(false);
        setShowRentModal(false);
        setActionModal(false);
        setSpecialModal(false);
        endTurn();
    };

    return (
        <div className="center-panel">
            <AddPlayers
                modal={setupStep === 1}
                toggle={() => {
                    setSetupStep(0);
                }}
                setSetupStep={setSetupStep}
            ></AddPlayers>
            <PartnerPicker
                modal={setupStep === 2}
                toggle={() => {
                    setSetupStep(0);
                }}
                setSetupStep={setSetupStep}
            ></PartnerPicker>
            <AddToys
                modal={setupStep === 3}
                toggle={() => {
                    setSetupStep(0);
                }}
                setSetupStep={setSetupStep}
            ></AddToys>
            <PurchaseProperty property={purchaseModal} next={endPlayerTurn}/>
            <NoFundsModal property={noFundsModal} next={endPlayerTurn}/>
            <ShowRentModal property={showRentModal} next={showAction}/>
            <ActionModal property={actionModal} next={endPlayerTurn}/>
            <SpecialModal property={specialModal} next={endPlayerTurn}/>
            {gameData.players.length ? (
                <div className="center-inner">
                    <div className="stat-row stat-head">
                        <div className="stat-col-player">Player:</div>
                        <div className="stat-col-bank">Bank:</div>
                        <div className="stat-col-dress">Clothes:</div>
                        <div className="stat-col-optouts">Opt Outs:</div>
                    </div>

                    {gameData.players.map((player, index) => {
                        // Clamp: a save written before the opt-out floor fix
                        // can hold a negative count, and Array(-1) throws.
                        const optOuts = Array(Math.max(player.optOuts ?? 1, 0)).fill(1);
                        return (
                            <div key={index} className="stat-row">
                                <div className="stat-col-player">
                                    <div
                                        style={{
                                            backgroundColor: colours[index],
                                            height: "16px",
                                            width: "16px",
                                            minWidth: "16px",
                                            borderRadius: "8px",
                                            marginRight: "8px",
                                        }}
                                    ></div>
                                    <span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>{player.name}</span>
                                </div>
                                <span className="stat-col-bank">£{player.money}</span>
                                <span className="stat-col-dress">{DRESS_LABELS[player.dress]}</span>
                                <div className="stat-col-optouts">
                                    {optOuts.map((_, i) => (
                                        <Chick key={i}/>
                                    ))}
                                </div>
                            </div>
                        );
                    })}

                    {!needMorePlayers && gameData.players[gameData.currentPlayer] && (
                        <div className="turn-banner">
                            <h2
                                key={gameData.currentPlayer}
                                className="turn-banner-text"
                                style={{borderLeftColor: colours[gameData.currentPlayer]}}
                            >
                                {gameData.players[gameData.currentPlayer].name}'s Turn
                            </h2>
                        </div>
                    )}

                    <div className="dice-dock">
                        <Dice
                            onChange={handleOnChange}
                            accent={colours[gameData.currentPlayer] || "#c70039"}
                            disabled={Boolean(
                                purchaseModal || noFundsModal || showRentModal ||
                                actionModal || specialModal ||
                                setupStep > 0 || needMorePlayers
                            )}
                        />
                        <p className="dice-hint">
                            {needMorePlayers
                                ? "It takes at least two to play."
                                : rolling ? "Rolling..." : "Tap the die to roll it."}
                        </p>
                        {needMorePlayers && !setupStep && (
                            <button
                                className="spice-button"
                                onClick={() => setSetupStep(1)}
                            >
                                Add players
                            </button>
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

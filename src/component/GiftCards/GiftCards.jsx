import React, { useState, useEffect } from 'react';
import './GiftCards.css'; 
import ShimmerContainer from '../ShimmerCard/ShimmerContainer';

const GiftCards = () => {
    const [giftCardsData, setGiftCardsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(false);    
    const [accessToken, setAccessToken] = useState('');  
    const [showModal, setShowModal] = useState(false);  
    const [selectedCard, setSelectedCard] = useState(null);  
    const [toastMessage, setToastMessage] = useState('');  

    // Function to fetch new access token
    const fetchAccessToken = async () => {
        const tokenResponse = await fetch('https://auth.reloadly.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                client_id: 'EQRKvwbYZD4IxOJ1CuL0dW8TxWNlNPxR',
                client_secret: 'tf0YZiWzRw-SIy1NoZr5jjn7LO56PR-aD4dZFXpnwefnlJuybLrWW5L26gAoWxM',
                grant_type: 'client_credentials',
                audience: 'https://giftcards-sandbox.reloadly.com',
            }),
        });

        if (tokenResponse.ok) {
            const tokenData = await tokenResponse.json();
            setAccessToken(tokenData.access_token);
            return tokenData.access_token;
        } else {
            console.error('Failed to fetch access token');
            return null;
        }
    };

    // Function to fetch gift cards data
    const fetchGiftCards = async (token) => {
        try {
            setLoading(true);
            const response = await fetch('https://giftcards-sandbox.reloadly.com/products?countryCode=IN', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setGiftCardsData(data.content);
                setFilteredData(data.content);
                setLoading(false);
            } else if (response.status === 401) {
                const newToken = await fetchAccessToken();
                if (newToken) {
                    fetchGiftCards(newToken);
                } else {
                    setError(true);
                    setLoading(false);
                }
            } else {
                setError(true);
                setLoading(false);
                console.error('Failed to fetch gift cards data');
            }
        } catch (error) {
            setError(true);
            setLoading(false);
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const initialize = async () => {
            const token = await fetchAccessToken();
            if (token) {
                fetchGiftCards(token);
            }
        };

        initialize();
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = giftCardsData.filter((card) =>
            card.productName.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    const handleBuyNow = (card) => {
        setSelectedCard(card);
        setShowModal(true);  
    };

    const handleConfirmPurchase = async () => {
        // Generate a unique custom identifier (using current timestamp for simplicity)
        const uniqueCustomIdentifier = `order_${Date.now()}`;
    
        const body = {
            productId: selectedCard.productId,
            quantity: 1,
            unitPrice: selectedCard.fixedRecipientDenominations[0] || 20, 
            customIdentifier: uniqueCustomIdentifier,  // Use the unique identifier here
            senderName: "John Doe",
            recipientEmail: "dump.bin0007@gmail.com",
            recipientPhoneDetails: {
                countryCode: "IN",
                phoneNumber: "9988578478"
            },
            preOrder: false
        };
    
        try {
            const response = await fetch('https://giftcards-sandbox.reloadly.com/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify(body)
            });
    
            if (response.ok) {
                setToastMessage('Successfully purchased the gift card!');
                setShowModal(false);  
            } else {
                const errorData = await response.json();
                setToastMessage(`Failed to complete the purchase: ${errorData.message}`);
            }
        } catch (error) {
            setToastMessage('Error occurred during purchase.');
        }
    };
    

    return (
        <div className="travel-topups-container">
            <div className="header-container21">
                <h2>Gift Cards</h2>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by product name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {loading || error ? (
                <ShimmerContainer />
            ) : (
                <div className="topups-grid">
                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                        filteredData.map((card) => (
                            <div key={card.productId} className="topup-card">
                                {card.logoUrls && card.logoUrls.length > 0 && (
                                    <img src={card.logoUrls[0]} alt={card.productName} className="topup-image" />
                                )}

                                <div className="topup-details">
                                    <span className="topup-title">{card.productName}</span>
                                    {card.fixedRecipientDenominations && card.fixedRecipientDenominations.length > 0 ? (
                                        <span className="topup-price">Price: ${card.fixedRecipientDenominations[0]}</span>
                                    ) : card.fixedRecipientToSenderDenominationsMap ? (
                                        <span className="topup-price">
                                            Price: ${Object.keys(card.fixedRecipientToSenderDenominationsMap)[0]}
                                        </span>
                                    ) : (
                                        <span className="topup-price">Price: N/A</span>
                                    )}
                                    <button className='gift-buy-button' onClick={() => handleBuyNow(card)}>Buy Now</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No gift cards available.</p>
                    )}
                </div>
            )}

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Are you sure you want to buy this gift card?</h3>
                        <div className="modal-buttons">
                            <button onClick={handleConfirmPurchase}>Yes</button>
                            <button onClick={() => setShowModal(false)}>No</button>
                        </div>
                    </div>
                </div>
            )}

            {toastMessage && (
                <div className="toast">
                    <p>{toastMessage}</p>
                </div>
            )}
        </div>
    );
};

export default GiftCards;

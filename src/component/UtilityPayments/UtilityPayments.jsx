import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShimmerContainer from '../ShimmerCard/ShimmerContainer';
import './UtilityPayments.css'
const UtilityPayments = () => {
    const [billerData, setBillerData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(false);
    const [token, setToken] = useState(''); 
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedBiller, setSelectedBiller] = useState(null);
    const [amount, setAmount] = useState(''); // Amount field
    const navigate = useNavigate();

    // Fetch the bearer token
    const fetchToken = async () => {
        try {
            const response = await fetch('https://auth.reloadly.com/oauth/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    client_id: 'EQRKvwbYZD4IxOJ1CuL0dW8TxWNlNPxR',
                    client_secret: 'tf0YZiWzRw-SIy1NoZr5jjn7LO56PR-aD4dZFXpnwefnlJuybLrWW5L26gAoWxM',
                    grant_type: 'client_credentials',
                    audience: 'https://utilities-sandbox.reloadly.com'
                }),
            });
            const data = await response.json();
            setToken(data.access_token);
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };

    useEffect(() => {
        fetchToken(); // Get the token on component mount
    }, []);

    const fetchBillers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://utilities-sandbox.reloadly.com/billers', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setBillerData(data.content); 
                setFilteredData(data.content); 
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
                console.error('Failed to fetch billers data');
            }
        } catch (error) {
            setError(true);
            setLoading(false);
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchBillers();
        }
    }, [token]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        const filtered = billerData.filter((biller) =>
            biller.name.toLowerCase().includes(value)
        );
        setFilteredData(filtered);
    };

    const handleCardClick = (biller) => {
        setSelectedBiller(biller); // Set the selected biller
        setModalOpen(true); // Open the modal
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setAmount(''); // Reset amount when closing modal
    };

    const handleRecharge = async () => {
        if (!amount || isNaN(amount) || Number(amount) <= 0) {
            alert('Please enter a valid amount.');
            return;
        }
    
        // Generate a unique referenceId using current timestamp
        const uniqueReferenceId = `recharge-${Date.now()}`;
    
        const apiBody = {
            subscriberAccountNumber: "04223568280", // Default or dynamically fetched
            amount: parseFloat(amount), // Convert the string to a number
            amountId: null,
            billerId: selectedBiller.id,
            useLocalAmount: false,
            referenceId: uniqueReferenceId, // Use the generated unique referenceId
            additionalInfo: {
                invoiceId: null,
            },
        };
    
        try {
            const response = await fetch('https://utilities-sandbox.reloadly.com/pay', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apiBody),
            });
    
            // Debugging: check if the response status is not OK
            if (!response.ok) {
                const errorData = await response.json(); // Parse the error response for details
                console.error('Failed to recharge. Status:', response.status, 'Response:', errorData);
                alert(`Recharge failed! Error: ${errorData.message || 'Unknown error'}`);
                return;
            }
    
            const data = await response.json();
            alert('Recharge successful!');
            console.log('Recharge response:', data);
            handleModalClose(); // Close modal on success
        } catch (error) {
            // Catch any network or runtime errors
            console.error('Error occurred during recharge:', error);
            alert('Error occurred during recharge. Please try again.');
        }
    };
    

    return (
        <div className="travel-topups-container">
            <div className="header-container21">
                <h2>Utility Billers</h2>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by biller name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {loading || error ? (
                <ShimmerContainer />  
            ) : (
                <div className="topups-grid">
                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                        filteredData.map((biller) => (
                            <div 
                                key={biller.id} 
                                className="topup-card"
                                onClick={() => handleCardClick(biller)}
                            >
                                <div className="topup-details">
                                    <span className="topup-price">{biller.name}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No billers available.</p>
                    )}
                </div>
            )}

            {modalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Recharge for {selectedBiller?.name}</h3>
                        <input
                            type="text"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        <button onClick={handleRecharge}>Recharge</button>
                        <button onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UtilityPayments;

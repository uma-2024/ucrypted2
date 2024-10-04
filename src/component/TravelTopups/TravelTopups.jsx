import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './TravelTopups.css'; 
import ShimmerContainer from '../ShimmerCard/ShimmerContainer';

const TravelTopups = () => {
    const [giftCardsData, setGiftCardsData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState('IN'); 
    const [token, setToken] = useState(''); 
    const [countries, setCountries] = useState([]); // Use state to store fetched countries
    const navigate = useNavigate(); // Hook for navigation

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
                    audience: 'https://topups-sandbox.reloadly.com'
                }),
            });
            const data = await response.json();
            setToken(data.access_token); 
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };

    // Fetch the countries for top-ups using the token
    const fetchCountries = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://topups-sandbox.reloadly.com/countries', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`, // Pass the token here
                },
            });

            if (response.ok) {
                const data = await response.json();
                setCountries(data); // Assuming the API returns a list of countries
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
                console.error('Failed to fetch countries data');
            }
        } catch (error) {
            setError(true);
            setLoading(false);
            console.error('Error fetching countries:', error);
        }
    };

    useEffect(() => {
        fetchToken(); // Fetch the token on component mount
    }, []);

    useEffect(() => {
        if (token) {
            fetchCountries(); // Fetch countries once the token is available
        }
    }, [token]);

    const fetchGiftCards = async () => {
        try {
            setLoading(true);
            const response = await fetch(`https://topups-sandbox.reloadly.com/operators/countries/${selectedCountry}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setGiftCardsData(data); 
                setFilteredData(data);
                setLoading(false);
            } else {
                setError(true);
                setLoading(false);
                console.error('Failed to fetch top-up operators data');
            }
        } catch (error) {
            setError(true);
            setLoading(false);
            console.error('Error fetching top-up operators:', error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchGiftCards(); // Fetch top-up operators once token and selected country are available
        }
    }, [selectedCountry, token]);

    // Updated handleSearch function
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
    
        const filtered = giftCardsData.filter((card) =>
            (card.operatorName && card.operatorName.toLowerCase().includes(value)) || 
            (card.name && card.name.toLowerCase().includes(value))
        );
    
        setFilteredData(filtered);
    };

    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value); 
    };

    const handleCardClick = (operator) => {
        if (operator && operator.operatorId) {
            navigate(`/topups/${operator.operatorId}`, { state: { operator } });
            console.log('operator ==>>', operator);
        } else {
            console.error("Operator ID is missing!", operator); 
        }
    };

    return (
        <div className="travel-topups-container">
            <div className="header-container21">
                <h2>Top-up Operators</h2>
                <select
                    className="country-select"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                >
                    {countries.map((country) => (
                        <option key={country.isoName} value={country.isoName}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by operator name"
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            {loading || error ? (
                <ShimmerContainer />  
            ) : (
                <div className="topups-grid">
                    {Array.isArray(filteredData) && filteredData.length > 0 ? (
                        filteredData.map((operator) => {
                            console.log('operator:', operator);
                            return (
                                <div 
                                    key={operator.operatorId} 
                                    className="topup-card"
                                    onClick={() => handleCardClick(operator)} 
                                >
                                    {operator.logoUrls && operator.logoUrls.length > 0 && (
                                        <img src={operator.logoUrls[0]} alt={operator.operatorName} className="topup-image" />
                                    )}
                                    <div className="topup-details">
                                        <span className="topup-price">{operator.name}</span>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default TravelTopups;

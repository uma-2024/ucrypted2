import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./OperatorDetails.css";

const OperatorDetail = () => {
  const location = useLocation();

  // Get operator details from state or localStorage
  const operator =
    location.state?.operator ||
    JSON.parse(localStorage.getItem("operatorDetails"));
  console.log("operator for operation details === ", operator);

  // Initialize state for selected location safely
  const initialLocation =
    operator?.geographicalRechargePlans[0]?.locationName || "";
  console.log("initialLocation  === ", initialLocation);
  const [selectedLocation, setSelectedLocation] = useState(initialLocation);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  console.log("selected Location for operator details == >>", selectedLocation);

  const selectedRechargePlan = operator?.geographicalRechargePlans.find(
    (plan) => plan.locationName === selectedLocation
  );

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  // Function to recharge via fixed amount button
  const handleRecharge = async (amount) => {
    if (!phoneNumber || !amount) {
      alert("Please enter a phone number and select an amount.");
      return;
    }

    const payload = {
      operatorId: operator.operatorId,
      amount: amount.toFixed(2),
      useLocalAmount: true,
      customIdentifier: "This is example identifier",
      recipientPhone: {
        countryCode: "GB", // Modify the country code as needed
        number: phoneNumber,
      },
      senderPhone: {
        countryCode: "CA", // Example country code
        number: "11231231231",
      },
    };

    try {
      const response = await fetch(
        "https://utilities-sandbox.reloadly.com/pay",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InZpc2l0b3ItYXBwbGljYXRpb24tc2VydmVyLTIwMjEwMjIifQ.eyJwaWQiOiI2NmRmZWQzMGVhNDkyZjM0YmMxMDUyZjQiLCJ2aWQiOiI2NmRmZWQzMGVhNDkyZjM0YmMxMDUyZjQtdE9mR20yX1g3Y3lYMlRoVVQ4ZERmIiwic2lkIjoiNjZlMDNlY2JhM2M4ZDQwYmY5OWNiZDEwIiwiaWF0IjoxNzI1OTcyMTcxLCJleHAiOjE3MjU5NzM5NzEsImp0aSI6IjFBbkRraVlIUjFmZFJsQy1mdzBmNCJ9.E0yqzQQ-jerApySZ1Mlw2E_uKxM5aGPFhKGqw0NTRxbHVgPDFjwZJrKbf3dOwoMt1oGMrsZpLofPOSCuRvoa1w`, // Replace with your token
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      if (response.ok) {
        alert(`Recharge successful! Transaction ID: ${result.transactionId}`);
      } else {
        alert(`Recharge failed! Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Recharge Error:", error);
      alert("Error during recharge. Please try again.");
    }
  };

  // Handle manual recharge via custom amount input
  const handleManualRechargeClick = () => {
    if (!customAmount || isNaN(customAmount) || Number(customAmount) <= 0) {
      alert("Please enter a valid custom recharge amount.");
      return;
    }
    handleRecharge(Number(customAmount));
  };

  // Check if operator exists
  if (!operator) {
    return <p>No operator details found.</p>;
  }

  // Check if operator.name is an object and handle it
  const operatorName =
    typeof operator.name === "object"
      ? `${operator.name.isoName}, ${operator.name.name}`
      : operator.name;

  return (
    <div className="operator-detail-container">
      <h2>Operator Details</h2>
      <img src={operator.logoUrls[0]} alt={`${operatorName} logo`} />
      <p>Operator ID: {operator.operatorId}</p>
      <p>Operator Name: {operatorName}</p>

      {/* Input field for phone number */}
      <div>
        <label htmlFor="phone-input">Phone Number: </label>
        <input
          type="text"
          id="phone-input"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          placeholder="Enter recipient's phone number"
        />
      </div>

      {/* Input field for custom recharge amount */}
      <div style={{ marginBottom: "10px", marginTop: "10px" }}>
        <label htmlFor="amount-input">Recharge Amount: </label>
        <input
          type="number"
          id="amount-input"
          value={customAmount}
          onChange={handleCustomAmountChange}
          placeholder="Enter custom recharge amount"
        />
        <button onClick={handleManualRechargeClick}>Recharge</button>
      </div>

      {/* Dropdown for selecting a location */}
      <div>
        <label htmlFor="location-select">Select Location: </label>
        <select
          id="location-select"
          value={selectedLocation}
          onChange={handleLocationChange}
        >
          {operator.geographicalRechargePlans.map((plan) => (
            <option key={plan.locationCode} value={plan.locationName}>
              {plan.locationName}
            </option>
          ))}
        </select>
      </div>

      {/* Display the selected location */}
      <p>Selected Location: {selectedLocation}</p>

      {/* Display fixed amounts for the selected location */}
      {selectedRechargePlan && (
        <div>
          <h3>Fixed Amounts</h3>
          <div className="amountcards">
            {selectedRechargePlan.localAmounts.map((localAmount) => (
              <div className="amount-btn-div amount-item" key={localAmount}>
                <p>
                  {
                    selectedRechargePlan.localFixedAmountsDescriptions[
                      localAmount.toFixed(2)
                    ]
                  }{" "}
                  -{" "}
                  {
                    selectedRechargePlan.localFixedAmountsPlanNames[
                      localAmount.toFixed(2)
                    ]
                  }
                  <button
                    type="button"
                    className="amount-btn"
                    onClick={() => handleRecharge(localAmount)}
                  >
                    Rs. {localAmount}
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OperatorDetail;

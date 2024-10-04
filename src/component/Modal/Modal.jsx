import React from 'react';
import './Modal.css'; // Add styling for the modal

const Modal = ({ show, onClose, cardData }) => {
    if (!show) return null;

    const { operatorId, name, logoUrls, senderCurrencyCode, geographicalRechargePlans } = cardData;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button onClick={onClose} className="close-button">Close</button>
                <div className="modal-body">
                    <h2>{name} - {operatorId}</h2>
                    {logoUrls && logoUrls.length > 0 && (
                        <img src={logoUrls[0]} alt={name} className="modal-image" />
                    )}
                    <p><strong>Sender Currency Code:</strong> {senderCurrencyCode}</p>
                    {geographicalRechargePlans && geographicalRechargePlans.length > 0 && (
                        <div>
                            <p><strong>First Plan (Tamilnadu):</strong></p>
                            <p><strong>Fixed Amount:</strong> {geographicalRechargePlans[0].fixedAmounts[0]}</p>
                            <p><strong>Description:</strong> {geographicalRechargePlans[0].fixedAmountsDescriptions[geographicalRechargePlans[0].fixedAmounts[0]]}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;

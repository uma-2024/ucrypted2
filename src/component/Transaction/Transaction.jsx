import React from "react";
import "./Transaction.css";

const TransactionHistory = () => {
  const transactions = [
    {
      id: "456789356",
      date: "Sep 9, 2024, 04:30pm",
      from: "fadel@email.com",
      type: "Income",
      amount: "+$5,670.00",
      status: "Pending",
    },
    {
      id: "456789356",
      date: "Sep 8, 2024, 03:13pm",
      from: "Wise - 5466xxxx",
      type: "Savings",
      amount: "+$15,000.00",
      status: "Completed",
    },
    {
      id: "456789356",
      date: "Sep 7, 2024, 1:00pm",
      from: "Paypal - 3345xxxx",
      type: "Expenses",
      amount: "-$3,456.00",
      status: "Cancelled",
    },
    {
      id: "456789356",
      date: "Sep 6, 2024, 07:00am",
      from: "kikikarisma@email.com",
      type: "Income",
      amount: "+$30,000.00",
      status: "Pending",
    },
    {
      id: "456789356",
      date: "Sep 8, 2024, 03:13pm",
      from: "Wise - 5466xxxx",
      type: "Savings",
      amount: "+$8,000.00",
      status: "Completed",
    },
  ];

  return (
    <div className="transaction-history">
      {/* Top Summary */}
      <div className="transition-title">Transaction History</div>
      <div className="summary-grid">
        <div className="summary-card">
          <div className="transation-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="17"
              viewBox="0 0 10 17"
              fill="none"
            >
              <path
                d="M5.02031 0.5C5.61016 0.5 6.13061 0.96875 6.13061 1.5V2.625C6.16531 2.625 6.2347 2.65625 6.2694 2.65625C6.65106 2.6875 7.72666 2.875 8.17772 2.96875C8.76756 3.09375 9.14923 3.65625 9.01044 4.1875C8.83696 4.71875 8.24711 5.03125 7.65727 4.90625C7.3103 4.8125 6.33879 4.6875 5.95713 4.625C4.84683 4.46875 3.87532 4.5625 3.21608 4.78125C2.59154 5 2.31397 5.3125 2.24457 5.65625C2.17518 6 2.24457 6.1875 2.31397 6.3125C2.38336 6.4375 2.48745 6.5625 2.76502 6.71875C3.32017 7.0625 4.18759 7.28125 5.29789 7.5625H5.40198C6.37349 7.8125 7.58787 8.125 8.48999 8.65625C8.97574 8.9375 9.4268 9.34375 9.70437 9.875C10.0166 10.4375 10.0513 11.0625 9.94725 11.7188C9.70437 12.9062 8.76756 13.7188 7.65727 14.125C7.17151 14.3125 6.65106 14.4062 6.13061 14.4688V15.5C6.13061 16.0625 5.61016 16.5 5.02031 16.5C4.39577 16.5 3.91002 16.0625 3.91002 15.5V14.4375C3.87532 14.4375 3.87532 14.4062 3.84062 14.4062C3.0079 14.3125 1.62003 13.9688 0.683218 13.5938C0.0933727 13.375 -0.149505 12.7812 0.0933728 12.2812C0.33625 11.7812 0.995488 11.5312 1.55064 11.7812C2.27927 12.0625 3.49365 12.3438 4.18759 12.4375C5.29789 12.5938 6.2 12.5 6.82454 12.2812C7.41439 12.0625 7.65727 11.75 7.76136 11.375C7.83075 11.0312 7.76136 10.8438 7.69196 10.7188C7.62257 10.5938 7.51848 10.4688 7.24091 10.3125C6.68576 9.96875 5.81834 9.75 4.70804 9.46875H4.60395C3.63244 9.21875 2.41806 8.90625 1.51594 8.375C1.03019 8.09375 0.579127 7.6875 0.301553 7.15625C-0.0107175 6.59375 -0.0454143 5.96875 0.058676 5.28125C0.33625 4.09375 1.30776 3.3125 2.41806 2.90625C2.86911 2.75 3.38956 2.65625 3.91002 2.59375V1.5C3.91002 0.96875 4.39577 0.5 5.02031 0.5Z"
                fill="#9C9C9C"
              />
            </svg>
          </div>
          <div style={{textAlign:"left"}}>
            <div className="title">Balances</div>
            <div className="amount">$78,987.00</div>
          </div>
        </div>
        <div className="summary-card">
          <div className="transation-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
            >
              <path
                d="M14 0.5C14.5312 0.5 15 0.96875 15 1.5C15 2.0625 14.5312 2.5 14 2.5H2.5C2.21875 2.5 2 2.75 2 3C2 3.28125 2.21875 3.5 2.5 3.5H14C15.0938 3.5 16 4.40625 16 5.5V12.5C16 13.625 15.0938 14.5 14 14.5H2C0.875 14.5 0 13.625 0 12.5V2.5C0 1.40625 0.875 0.5 2 0.5H14ZM13 10C13.5312 10 14 9.5625 14 9C14 8.46875 13.5312 8 13 8C12.4375 8 12 8.46875 12 9C12 9.5625 12.4375 10 13 10Z"
                fill="#9C9C9C"
              />
            </svg>
          </div>
         
            <div style={{textAlign:"left"}}>
              <div className="title">Savings</div>
              <div className="amount">$23,000.00</div>
            </div>
        
        </div>
        <div className="summary-card">
          <div className="transation-svg">
          
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="17"
              viewBox="0 0 14 17"
              fill="none"
            >
              <path
                d="M13.645 10.4508L7.81925 16.1779C7.60078 16.3926 7.30949 16.5 7.01821 16.5C6.69051 16.5 6.39922 16.3926 6.18075 16.1779L0.355007 10.4508C-0.118336 10.0213 -0.118336 9.26958 0.355007 8.84004C0.791938 8.37472 1.55657 8.37472 1.9935 8.84004L5.85306 12.5984V1.60962C5.85306 1.00112 6.36281 0.5 6.98179 0.5C7.56437 0.5 8.18336 1.00112 8.18336 1.60962V12.5984L12.0065 8.84004C12.4434 8.37472 13.2081 8.37472 13.645 8.84004C14.1183 9.26958 14.1183 10.0213 13.645 10.4508Z"
                fill="#9C9C9C"
              />
            </svg>
          </div>
          <div style={{textAlign:"left"}}>
          <div className="title">Incomes</div>
          <div className="amount">$28,670.00</div>
        </div>
        </div>

     
      <div className="summary-card">
        <div className="transation-svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="17" viewBox="0 0 14 17" fill="none">
<path d="M13.645 8.17392C13.4265 8.38833 13.1352 8.49553 12.844 8.49553C12.5163 8.49553 12.225 8.38833 12.0065 8.17392L8.18336 4.42183V15.3565C8.18336 15.9997 7.63719 16.5 7.01821 16.5C6.43563 16.5 5.85306 15.9997 5.85306 15.3565V4.42183L1.9935 8.17392C1.55657 8.63847 0.791938 8.63847 0.355007 8.17392C-0.118336 7.74511 -0.118336 6.9947 0.355007 6.56588L6.18075 0.848409C6.61769 0.383864 7.38231 0.383864 7.81925 0.848409L13.645 6.56588C14.1183 6.9947 14.1183 7.74511 13.645 8.17392Z" fill="#9C9C9C"/>
</svg>
        </div>
        <div style={{textAlign:"left"}}>
          <div className="title">Expenses</div>
          <div className="amount">$3,456.00</div>
        </div>
      </div>
</div>
      {/* Transaction Table */}
      <div className="transaction-table-container">
        <div className="transaction-header">
          <div className="toggle-btn">
            <span>All</span>
            <span>Live</span>
            <span>Expired</span>
          </div>
          <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
            <label htmlFor="status-select" className="text-white mr-2">
              Status: 
            </label>
            <select
              id="status-select"
              className="bg-gray-700 text-white p-2 rounded"
            >
              <option>All</option>
              <option>Live</option>
              <option>Expired</option>
            </select>
          </div>
        </div>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Ref ID</th>
              <th>Transaction Date</th>
              <th>From</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx, index) => (
              <tr key={index}>
                <td>{tx.id}</td>
                <td>{tx.date}</td>
                <td className="from-cell">
                  <span className="icon-placeholder" />
                  {tx.from}
                </td>
                <td>{tx.type}</td>
                <td
                  className={
                    tx.amount.startsWith("-")
                      ? "amount-negative"
                      : "amount-positive"
                  }
                >
                  {tx.amount}
                </td>
                <td className={`status-${tx.status.toLowerCase()}`}>
                  {tx.status}
                </td>
                <td style={{display:"flex", justifyContent: "flex-end"
                }}>
                  <button className="action-button">•••</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;

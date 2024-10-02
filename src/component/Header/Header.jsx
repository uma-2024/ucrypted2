import React from 'react';
import './Header.css'; // Import a separate CSS file for styling
import phoneImage from '../../Assets/Images/image (38).png'
import headerImage from "../../Assets/Images/Group.png"
import headerImage2 from '../../Assets/Images/image (37).png'
const Header = () => {
  return (
    <header className="header-container">
      {/* Left Section */}
      <div className="header-left">
        <div className='header-left-inner'> 
        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="21" viewBox="0 0 38 21" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7628 18.2894C16.7754 19.8363 14.1976 20.7702 11.3807 20.7702C5.09531 20.7702 0 16.1206 0 10.3851C0 4.64957 5.09531 0 11.3807 0C14.1976 0 16.7755 0.93388 18.7628 2.48086C20.7501 0.933885 23.3279 7.30109e-06 26.1448 7.30109e-06C32.4302 7.30109e-06 37.5255 4.64958 37.5255 10.3851C37.5255 16.1206 32.4302 20.7702 26.1448 20.7702C23.3279 20.7702 20.7501 19.8363 18.7628 18.2894Z" fill="#ED0006"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7628 18.2893C21.2098 16.3845 22.7614 13.5502 22.7614 10.3851C22.7614 7.22004 21.2098 4.38568 18.7628 2.48086C20.7501 0.933879 23.3279 0 26.1448 0C32.4302 0 37.5255 4.64957 37.5255 10.3851C37.5255 16.1206 32.4302 20.7702 26.1448 20.7702C23.3279 20.7702 20.7501 19.8363 18.7628 18.2893Z" fill="#F9A000"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7628 18.2893C21.2098 16.3845 22.7614 13.5501 22.7614 10.3851C22.7614 7.22006 21.2098 4.38572 18.7628 2.4809C16.3158 4.38572 14.7642 7.22006 14.7642 10.3851C14.7642 13.5501 16.3158 16.3845 18.7628 18.2893Z" fill="#FF5E00"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="44" height="14" viewBox="0 0 44 14" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1658 13.477H7.48257L4.72058 2.93985C4.58948 2.45515 4.31113 2.02663 3.90168 1.82467C2.87985 1.31713 1.75386 0.91321 0.525513 0.709491V0.303811H6.45894C7.27784 0.303811 7.89202 0.91321 7.99438 1.62095L9.42745 9.22175L13.1089 0.303811H16.6898L11.1658 13.477ZM18.737 13.477H15.2585L18.1229 0.303811H21.6014L18.737 13.477ZM26.1018 3.95319C26.2041 3.24369 26.8183 2.83801 27.5348 2.83801C28.6608 2.73615 29.8874 2.93986 30.911 3.44565L31.5252 0.609398C30.5016 0.203718 29.3756 0 28.3537 0C24.9776 0 22.5209 1.82468 22.5209 4.35711C22.5209 6.28365 24.261 7.29522 25.4894 7.90462C26.8183 8.51226 27.3301 8.91794 27.2278 9.52558C27.2278 10.437 26.2041 10.8427 25.1823 10.8427C23.954 10.8427 22.7256 10.5389 21.6014 10.0314L20.9872 12.8694C22.2156 13.3752 23.5445 13.5789 24.7729 13.5789C28.5585 13.679 30.911 11.856 30.911 9.1199C30.911 5.67425 26.1018 5.47229 26.1018 3.95319ZM43.0849 13.477L40.323 0.303811H37.3562C36.7421 0.303811 36.1279 0.709491 35.9232 1.31713L30.8086 13.477H34.3895L35.1043 11.5522H39.5041L39.9135 13.477H43.0849ZM37.868 3.85132L38.8899 8.81607H36.0255L37.868 3.85132Z" fill="#F5F5F5"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="41" height="12" viewBox="0 0 41 12" fill="none">
<path d="M35.4085 3.88412C18.2793 12.0362 7.64878 5.21558 0.843822 1.0729C0.422733 0.811814 -0.29297 1.13394 0.328001 1.8472C2.59507 4.59607 10.0247 11.2217 19.7226 11.2217C29.4272 11.2217 35.2005 5.9264 35.9227 5.00268C36.6401 4.08676 36.1334 3.58152 35.4084 3.88412H35.4085ZM40.2192 1.22737C39.7592 0.628373 37.4222 0.516712 35.9514 0.697388C34.4783 0.872855 32.2672 1.77314 32.4594 2.3137C32.5581 2.51619 32.7594 2.42536 33.7714 2.33437C34.7861 2.23313 37.6287 1.87438 38.221 2.64868C38.8161 3.42836 37.3144 7.14246 37.0401 7.74146C36.7752 8.34045 37.1414 8.49492 37.6391 8.09597C38.1301 7.69718 39.0188 6.6644 39.6152 5.20288C40.2075 3.73339 40.5687 1.68345 40.2191 1.22737H40.2192Z" fill="#FF9900"/>
<path d="M35.4085 3.88412C18.2793 12.0362 7.64878 5.21558 0.843822 1.0729C0.422733 0.811814 -0.29297 1.13394 0.328001 1.8472C2.59507 4.59607 10.0247 11.2217 19.7226 11.2217C29.4272 11.2217 35.2005 5.9264 35.9227 5.00268C36.6401 4.08676 36.1334 3.58152 35.4084 3.88412H35.4085ZM40.2192 1.22737C39.7592 0.628373 37.4222 0.516712 35.9514 0.697388C34.4783 0.872855 32.2672 1.77314 32.4594 2.3137C32.5581 2.51619 32.7594 2.42536 33.7714 2.33437C34.7861 2.23313 37.6287 1.87438 38.221 2.64868C38.8161 3.42836 37.3144 7.14246 37.0401 7.74146C36.7752 8.34045 37.1414 8.49492 37.6391 8.09597C38.1301 7.69718 39.0188 6.6644 39.6152 5.20288C40.2075 3.73339 40.5687 1.68345 40.2191 1.22737H40.2192Z" fill="#FF9900"/>
</svg>
        </div>
        <h2>Pay With Crypto</h2>
        <p>Electricity, Travel, Wifi, Food & more</p>
        <button className="shop-now-btn">Shop Now</button>

        {/* Payment Logos */}
        {/* <div className="payment-logos">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/MasterCard_Logo.svg" alt="MasterCard" className="payment-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg" alt="Visa" className="payment-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/PayPal_Logo.svg" alt="Pay" className="payment-logo" />
        </div> */}
      </div>
      <img src={headerImage} className='header-image'/>

      {/* Right Section */}
      <div className="header-right">
        <h3>Recommended For You</h3>
        <div className="recommendations">
          {/* Recommendation Item */}
          <div className="recommendation-item">
          <img src={headerImage2} alt="Amazon Pay" className="recommendation-logo" />
          <img src={phoneImage} alt="PhonePe" className="recommendation-logo" />
          </div>
          <h3 style={{marginBottom:"0px", marginTop:"0px"}}>Recommended For You</h3>
          {/* Another Recommendation Item */}
          <div className="recommendation-item">
            <img src={headerImage2} alt="Amazon Pay" className="recommendation-logo" />
            <img src={phoneImage} alt="PhonePe" className="recommendation-logo" />
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

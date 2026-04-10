import React from 'react'

function Footer() {
    return ( 
        <footer style={{ backgroundColor: '#f7f7f7', padding: '40px 0' }}>
      <div className="container border-top pt-5">
        <div className="row">

          {/* Logo + Copyright */}
          <div className="col-md-3 mb-4">
            <img
              src="media/images/logo.svg"
              alt="Zerodha Logo"
              style={{ width: '60%', marginBottom: '15px' }}
            />
            <p style={{ fontSize: '14px', color: '#555' }}>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-3 mb-4">
            <h6 style={{ fontWeight: 600 }}>Company</h6>
            <a href="#" className="d-block my-1 text-muted">About</a>
            <a href="#" className="d-block my-1 text-muted">Products</a>
            <a href="#" className="d-block my-1 text-muted">Pricing</a>
            <a href="#" className="d-block my-1 text-muted">Referral programme</a>
            <a href="#" className="d-block my-1 text-muted">Careers</a>
            <a href="#" className="d-block my-1 text-muted">Zerodha.tech</a>
            <a href="#" className="d-block my-1 text-muted">Open source</a>
            <a href="#" className="d-block my-1 text-muted">Press & media</a>
            <a href="#" className="d-block my-1 text-muted">Zerodha Cares (CSR)</a>
          </div>

          {/* Support Links */}
          <div className="col-md-3 mb-4">
            <h6 style={{ fontWeight: 600 }}>Support</h6>
            <a href="#" className="d-block my-1 text-muted">Contact us</a>
            <a href="#" className="d-block my-1 text-muted">Support portal</a>
            <a href="#" className="d-block my-1 text-muted">Z-Connect blog</a>
            <a href="#" className="d-block my-1 text-muted">List of charges</a>
            <a href="#" className="d-block my-1 text-muted">Downloads & resources</a>
            <a href="#" className="d-block my-1 text-primary">Videos</a>
            <a href="#" className="d-block my-1 text-muted">Market overview</a>
            <a href="#" className="d-block my-1 text-muted">How to file a complaint?</a>
            <a href="#" className="d-block my-1 text-muted">Status of your complaints</a>
          </div>

          {/* Account Links */}
          <div className="col-md-3 mb-4">
            <h6 style={{ fontWeight: 600 }}>Account</h6>
            <a href="#" className="d-block my-1 text-muted">Open an account</a>
            <a href="#" className="d-block my-1 text-muted">Fund transfer</a>
            <a href="#" className="d-block my-1 text-muted">60 day challenge</a>
          </div>
        </div>

        {/* Legal Section */}
        <div className="mt-5 text-muted" style={{ fontSize: '10px' }}>
          <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
          Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
          "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
          </p>
        </div>
      </div>
    </footer>

    );
}

export default Footer;
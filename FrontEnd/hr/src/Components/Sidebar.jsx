function Sidebar() {
    return (
        <aside>

            {/* Logo */}
            <div className="logo-name">
                <div className="logo">
                    <img
                        src="https://img.magnific.com/premium-vector/creative-elegant-abstract-minimalistic-logo-design-vector-any-brand-company_1287271-17862.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="StaffDesk logo"
                    />
                </div>

                <h1>StaffDesk</h1>
            </div>


            {/* Navigation */}
            <div className="container">

                <h2>WORKSPACE</h2>

                <div className="cont active">
                    <span className="symbol">
                        <i className="ri-dashboard-line"></i>
                    </span>

                    <span className="name">
                        Overview
                    </span>
                </div>


                <div className="cont">
                    <span className="symbol">
                        <i className="ri-team-line"></i>
                    </span>

                    <span className="name">
                        People
                    </span>
                </div>


                <div className="cont">
                    <span className="symbol">
                        <i className="ri-calendar-line"></i>
                    </span>

                    <span className="name">
                        Time off
                    </span>
                </div>


                <div className="cont">
                    <span className="symbol">
                        <i className="ri-time-line"></i>
                    </span>

                    <span className="name">
                        Attendance
                    </span>
                </div>


                <div className="cont">
                    <span className="symbol">
                        <i className="ri-bank-card-line"></i>
                    </span>

                    <span className="name">
                        Payroll
                    </span>
                </div>

            </div>


            {/* Logout */}
            <button className="logout">
                <i className="ri-logout-box-r-line"></i>
                <span>Logout</span>
            </button>

        </aside>
    );
}

export default Sidebar;
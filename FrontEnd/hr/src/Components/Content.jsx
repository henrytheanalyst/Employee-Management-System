function Content(){
    return(
        <section className="content">
            <header className="topbar">
                <div className="search">
                    <span>🔍</span>
                    <input type="text" placeholder="Seach people,teams and anything" />
                </div>
                <div className="user-area">
                    <span>🔔</span>
                    <span>Need help?</span>
                    <div className="avatar">
                        AH
                    </div>
                </div>
            </header>
            <div className="dashboard">
                <div className="welcome">
                    <div>
                        <p>MONDAY 12 MAY</p>
                        <h1>Good Morning ,Alex</h1>
                        <span>Here's what happening with your team today</span>
                    </div>
                    <button className="add-employee">
                        Add Employee
                    </button>
                </div>
            </div>
        </section>
    );
}
export default Content;
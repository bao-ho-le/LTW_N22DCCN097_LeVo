const header = {
    width: '100vw',
    backgroundColor: 'white',
    height: '70px',
    display: 'flex',
    flexDirection: 'row',  
    justifyContent: 'center',
    alignItems: 'center'   
} as const;

const titleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    width: "75%",  
};

function Header() {
    return (
        <div style={header}>
            <div style={titleStyle}>GAMING GEAR</div> 
        </div>
    );
}

export default Header;

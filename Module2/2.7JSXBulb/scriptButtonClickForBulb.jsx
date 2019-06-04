var Bulb= React.createClass({
    getInitialState:function(){
        return{
            status :false
        }
    },
    switch:function(){
        this.setState(
            {status: !this.state.status}
        )
    },
    render: function(){
        var dispalyBulb = this.state.status ? 'img/bulb_off.png' : 'img/bulb_on.png' ;
        return(
            <div>
                <img width="200px" src = { dispalyBulb } />
                <button onClick={this.switch} >Click</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Bulb/>,document.getElementById('root')
);
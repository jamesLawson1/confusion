import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props); //required in every class component
        //local info is handled in state.
        //it is private and fully controlled by the component but can be passed 
        //as props to children 

        //state should only be modified using setState()
        /*
            this.setState({ selectedDish: dish})
        */
        console.log('Constructor invoked');
    }

    componentDidMount(){
        //runs right after component mounts
        console.log("componentDidMount invoked");
    }


    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle heading={dish.name}>{dish.name}</CardTitle>      
                    </CardBody>        
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }
    //render returns the view of the component 
    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                //every list requires a key attribute for rendering
                <div key={dish.id} className='col-12 col-md-5 m-1'>
                    <Card onClick={() => this.props.onClick(dish.id)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay  className='ml-5'>
                                <CardTitle >{dish.name}</CardTitle> 
                            </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        console.log("Render is invoked");
        return (
            <div className='container'>
                <div className='row'>
                        {menu}
                </div>
                
            </div>
        );
    }
    
}

//makes it possible to import it into another file. 
export default Menu;
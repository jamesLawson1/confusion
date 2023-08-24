import React, { Component } from 'react';
import {Card, CardText, CardImg, CardTitle} from 'reactstrap';

class DishDetails extends Component {

    renderDish(dish){
        if(dish != null){
            return(
                <div key={dish.id} className='col-12 col-md-5 m-1' >
                    <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardTitle >{dish.name}</CardTitle> 
                            <CardText>
                                {dish.description}
                            </CardText>
                    
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    renderComment(dish){
        if(dish != null){
            return(
                <div key={dish.id} className='col-12 col-md-5 m-1' >
                    <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardTitle >{dish.name}</CardTitle> 
                            <CardText>
                                {dish.description}
                            </CardText>
                    
                    </Card>
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }


    

    render(){
        var dish = this.props.dish;
        return(
            <div className='row'>
                {this.renderDish(dish)}
            </div>
        );
    }
}

export default DishDetails;
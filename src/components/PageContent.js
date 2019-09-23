import React from 'react';
import { connect } from 'react-redux';
import { Select, InputLabel, FormControl , MenuItem, Grid,
         FormLabel, FormControlLabel, RadioGroup, Radio, Button } from '@material-ui/core';
import { sizeUpdate, priceUpdate, addToCart, gemStoneQualityUpdate, caratWeightUpdate, metalTypeUpdate } from '../actions';

const images = require.context('../../public/images', true);

const mapStateToProps = state => {
        return {
                 userSelection: state.userSelection,
                 sizes: state.sizes,
                 productDetails: state.productDetails,
                 addedItems: state.addedItems,
                 total: state.total
                };
}

const mapDispatchToProps = dispatch => {

        return {
                sizeUpdate: ringSize => dispatch(sizeUpdate(ringSize)),
                priceUpdate: userSelection => dispatch(priceUpdate(userSelection)),
                addToCart: userSelection => dispatch(addToCart(userSelection)),
                gemStoneQualityUpdate: gemStones => dispatch(gemStoneQualityUpdate(gemStones)),
                caratWeightUpdate: caratWeight => dispatch(caratWeightUpdate(caratWeight)),
                metalTypeUpdate: metalType => dispatch(metalTypeUpdate(metalType)),
        };
}

 class PageContent extends React.Component {
        //classes = useStyles();

        getNewUserSelectionDetails = (gem, carat, metal) => {
                //debugger;
                let newUserDetail = this.props.productDetails.filter((productDetail) => {
                        //console.log(productDetail);
                        return (productDetail.GemStone === gem &&
                        productDetail.CaretWeight === parseFloat(carat) &&
                        productDetail.MetalType === metal)
                }) ;
                console.log("UserDetail : " + newUserDetail);
                return newUserDetail;
        }

        handleSizeChanges = (event) => {
                event.preventDefault();
                this.props.sizeUpdate({ ringSize: event.target.value });
        };
        handleGemQualityChange = (event) => {
                event.preventDefault();
                let userSelectionDetails = this.getNewUserSelectionDetails(event.target.value, this.props.userSelection.caratWeight, this.props.userSelection.metalType);
                let userSelection = {
                        gemStones: userSelectionDetails[0].GemStone,
                        caratWeight: userSelectionDetails[0].CaretWeight,
                        metalType: userSelectionDetails[0].MetalType,
                        image: `${userSelectionDetails[0].ID}.webp`,
                        price: userSelectionDetails[0].Price
                       }
                this.props.priceUpdate(userSelection);
        }
        handleCaratWeightChange = (event) => {
                event.preventDefault();
                let userSelectionDetails = this.getNewUserSelectionDetails(this.props.userSelection.gemStones, event.target.value, this.props.userSelection.metalType);
                //debugger;
                //Yet to add image: '1.webp',
                let userSelection = {
                        gemStones: userSelectionDetails[0].GemStone,
                        caratWeight: userSelectionDetails[0].CaretWeight,
                        metalType: userSelectionDetails[0].MetalType,
                        image: `${userSelectionDetails[0].ID}.webp`,
                        price: userSelectionDetails[0].Price
                       }
                this.props.priceUpdate(userSelection);
        }
        handleMetalTypeChange = (event) => {
                event.preventDefault();
                let userSelectionDetails = this.getNewUserSelectionDetails(this.props.userSelection.gemStones, this.props.userSelection.caratWeight, event.target.value);
                let userSelection = {
                        gemStones: userSelectionDetails[0].GemStone,
                        caratWeight: userSelectionDetails[0].CaretWeight,
                        metalType: userSelectionDetails[0].MetalType,
                        image: `${userSelectionDetails[0].ID}.webp`,
                        price: userSelectionDetails[0].Price
                       }
                this.props.priceUpdate(userSelection);
        }

        handleAddToCart = (event) => {
                event.preventDefault();
                let items = [];
                items.push(...this.props.addedItems);
                items.push(this.props.userSelection);
                this.props.addToCart(items);              
        }

        render(){
                return(
                        <div className="page-content">
                        <Grid container >
                        <Grid item xs={12} sm={6}>
                            <img src={images(`./${this.props.userSelection.image}`)} alt="Ring" height="80%" width="80%" />    
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        <h4>${this.props.userSelection.price}</h4>
                        <form className="display-flex">
                                <FormControl component="fieldset" >
                                        <FormLabel component="legend">Gemstone Quality</FormLabel>
                                        <RadioGroup aria-label="gems1" name="gems1"
                                         className="flex-direction-row" defaultValue={this.props.userSelection.gemStones} onChange={this.handleGemQualityChange}>
                                                <FormControlLabel value="Good" control={<Radio />} label="Good" />
                                                <FormControlLabel value="Better" control={<Radio />} label="Better" />
                                                <FormControlLabel value="Best" control={<Radio />} label="Best" />
                                                <FormControlLabel value="Heirloom" control={<Radio />} label="Heirloom" />
                                        </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" >
                                        <FormLabel component="legend">Carat Weight</FormLabel>
                                        <RadioGroup aria-label="caratWeight" name="caratWeight"
                                         className="flex-direction-row" defaultValue={this.props.userSelection.caratWeight} onChange={this.handleCaratWeightChange}>
                                                <FormControlLabel value="1.1" control={<Radio />} label="1.1" />
                                                <FormControlLabel value="1.9" control={<Radio />} label="1.9" />
                                                <FormControlLabel value="2.49" control={<Radio />} label="2.49" />
                                                <FormControlLabel value="4.03" control={<Radio />} label="4.03" />
                                        </RadioGroup>
                                </FormControl>
                                <FormControl component="fieldset" >
                                        <FormLabel component="legend">Metal Type</FormLabel>
                                        <RadioGroup aria-label="metalType" name="metalType"
                                         className="flex-direction-row" defaultValue={this.props.userSelection.metalType} onChange={this.handleMetalTypeChange}>
                                                <FormControlLabel value="Rose Gold" control={<Radio />} label="Rose Gold" />
                                                <FormControlLabel value="Yellow Gold" control={<Radio />} label="Yellow Gold" />
                                                <FormControlLabel value="White Gold" control={<Radio />} label="White Gold" />
                                                <FormControlLabel value="Platinum" control={<Radio />} label="Platinum" />
                                        </RadioGroup>
                                </FormControl>
                                <FormControl>
                                <InputLabel htmlFor='ring-size'>
                                        Size     
                                </InputLabel>  
                                <Select 
                                        value={this.props.userSelection.ringSize}
                                        onChange={this.handleSizeChanges}
                                        inputProps={
                                                {
                                                        name: 'ring-sizes',
                                                        id:'ring-size'
                                                }
                                        }
                                >
                
                                        {this.props.sizes.map((size,i) => {
                                                return (
                                                <MenuItem
                                                        key={i}
                                                        value={size.optionid}>
                                                        {size.size}
                                                </MenuItem>
                                                );
                                        })}
                                        </Select>
                                </FormControl>     
                                <Grid item xs={12} sm={6} className="margin-top">
                                        <Button variant="contained" color="secondary" onClick={this.handleAddToCart}>
                                                Add to Cart
                                        </Button>
                                </Grid>
                                </form>
                                </Grid>
                               
                        </Grid>
                        </div>
              )
        }
   
}


export default connect(mapStateToProps, mapDispatchToProps) (PageContent);
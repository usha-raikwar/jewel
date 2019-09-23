import C from './constants'

export function sizeUpdate(ringSize) {
    //debugger;
    return {
        type: C.SIZE_CHANGE,
        payload: {
            userSelection: ringSize
        }
    }
}

export function priceUpdate(userSelection) {
    //debugger;
    return {
        type: C.PRICE_UPDATE,
        payload: {
            userSelection
        }
    }
}

export function addToCart(addedItems) {
    //debugger;
    return {
        type: C.ADD_TO_CART,
        payload: {
            addedItems
        }
    }
}

export function gemStoneQualityUpdate(gemStones) {
    return {
        type: C.GEM_STONE_QUALITY_UPDATE,
        payload: {
            userSelection: gemStones
        }
    }
}

export function caratWeightUpdate(caratWeight) {
    return {
        type: C.CARAT_WEIGHT_UPDATE,
        payload: {
            userSelection: caratWeight
        }
    }
}

export function metalTypeUpdate(metalType) {
    return {
        type: C.METAL_TYPE_UPDATE,
        payload: {
            userSelection: metalType
        }
    }
}